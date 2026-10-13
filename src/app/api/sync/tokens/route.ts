import { NextResponse } from "next/server";
import { getAuditRequestContext, logAuditEvent } from "@/lib/compliance/index";
import { createErrorResponse, createErrorResponseFromUnknown } from "@/lib/api/errorResponse";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { createSyncTokenSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
import {
  issueSyncToken,
  listSyncTokenSummaries,
  parseSyncTokenTtl,
  resolveSyncApiKeyIdFromManagementRequest,
} from "@/lib/sync/tokens";
import { resolveSyncTokenIssuer } from "@/lib/sync/issuerAuth";

export async function GET(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  try {
    const tokens = await listSyncTokenSummaries();
    return NextResponse.json({
      tokens,
      total: tokens.length,
    });
  } catch (error) {
    return createErrorResponseFromUnknown(error, "Failed to list sync tokens");
  }
}

export async function POST(request: Request) {
  // GHSA-2452-4qrm-6p4w: a sync token downloads every provider credential in plaintext, so
  // minting one needs an operator credential (dashboard session / local CLI) — a
  // manage-scoped API key alone is not enough.
  const issuer = await resolveSyncTokenIssuer(request);
  if (!issuer.ok) return issuer.response;

  const auditContext = getAuditRequestContext(request);

  let rawBody;
  try {
    rawBody = await request.json();
  } catch {
    return createErrorResponse({
      status: 400,
      message: "Invalid JSON body",
    });
  }

  try {
    const validation = validateBody(createSyncTokenSchema, rawBody);
    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    let ttlMs: number | null = null;
    if (validation.data.ttl) {
      ttlMs = parseSyncTokenTtl(validation.data.ttl);
      if (ttlMs === null) {
        return createErrorResponse({
          status: 400,
          message: "ttl must be between 1 minute and 365 days",
        });
      }
    } else if (validation.data.expiresInDays) {
      ttlMs = validation.data.expiresInDays * 24 * 60 * 60 * 1000;
    }

    // When an API key accompanies the operator credential it is recorded as the token's
    // issuer, and revoking/deleting that key invalidates the token.
    const syncApiKeyId = await resolveSyncApiKeyIdFromManagementRequest(request);
    const issued = await issueSyncToken({
      name: validation.data.name,
      issuerKind: issuer.issuerKind,
      syncApiKeyId,
      ttlMs,
    });

    const tokenSummary = {
      id: issued.record.id,
      name: issued.record.name,
      syncApiKeyId: issued.record.syncApiKeyId,
      issuerKind: issued.record.issuerKind,
      expiresAt: issued.record.expiresAt,
      revokedAt: issued.record.revokedAt,
      lastUsedAt: issued.record.lastUsedAt,
      createdAt: issued.record.createdAt,
      updatedAt: issued.record.updatedAt,
    };

    logAuditEvent({
      action: "sync.token.created",
      actor: issuer.issuerKind === "local_cli" ? "cli" : "admin",
      target: issued.record.name,
      resourceType: "sync_token",
      status: "success",
      ipAddress: auditContext.ipAddress || undefined,
      requestId: auditContext.requestId,
      metadata: tokenSummary,
    });

    return NextResponse.json(
      {
        token: issued.token,
        syncToken: tokenSummary,
      },
      { status: 201 }
    );
  } catch (error) {
    return createErrorResponseFromUnknown(error, "Failed to create sync token");
  }
}
