// @vitest-environment jsdom
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import CachedInputTokens from "@/shared/components/CachedInputTokens";
import UsageOverview from "@/shared/components/UsageOverview";

vi.mock("next-intl", () => ({ useTranslations: () => (key: string) => key }));

describe("provider cached input reporting", () => {
  it("renders recorded cache reads separately from original input and output", () => {
    const html = renderToStaticMarkup(
      <UsageOverview
        stats={{
          totalRequests: 1,
          totalPromptTokens: 100,
          totalCompletionTokens: 10,
          totalCost: 0,
          totalCachedInputTokens: 60,
          totalCachedInputTokensComplete: true,
          last10Minutes: [],
        }}
      />
    );
    expect(html).toContain("totalInputTokens");
    expect(html).toContain(">100<");
    expect(html).toContain("cachedTokens");
    expect(html).toContain("60");
    expect(html).toContain("outputTokens");
    expect(html).not.toContain(">160<");
  }, 1_000);

  it("does not display missing historical cache counts as measured zero", () => {
    const unknown = renderToStaticMarkup(<CachedInputTokens value={null} complete={false} />);
    const partial = renderToStaticMarkup(<CachedInputTokens value={60} complete={false} />);
    expect(unknown).toContain("noData");
    expect(unknown).not.toContain(": 0");
    expect(partial).toContain("60+");
  }, 1_000);
});
