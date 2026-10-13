-- 206: GHSA-2452-4qrm-6p4w — bind sync tokens to the credential that minted them.
--   expires_at           : ISO timestamp; tokens without one are no longer accepted.
--   issuer_kind          : who minted it (dashboard_session | local_cli | open_instance).
--   password_fingerprint : digest of the admin password hash at mint time; a password
--                          rotation changes it and invalidates the token.
-- Rows minted before this migration have no binding (some may have been minted by a
-- manage-scoped API key) and are revoked here; validation also rejects them.

ALTER TABLE sync_tokens ADD COLUMN expires_at TEXT;
ALTER TABLE sync_tokens ADD COLUMN issuer_kind TEXT;
ALTER TABLE sync_tokens ADD COLUMN password_fingerprint TEXT;

UPDATE sync_tokens
SET revoked_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now'),
    updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
WHERE revoked_at IS NULL AND issuer_kind IS NULL;
