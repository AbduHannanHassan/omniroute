---
title: "Cached input token reporting"
description: "Report cache-read input tokens and incomplete historical measurements."
---

# Cached input token reporting

The usage overview shows provider-reported cache-read input tokens beneath total input tokens.
The model and account tables show the same breakdown beneath their input counts. These tokens are
already part of input usage: do not add the cached value to the input total. Cache writes and
OmniRoute response-cache hits are separate measurements.

Usage statistics expose `totalCachedInputTokens` and `totalCachedInputTokensComplete`, and each
provider/model/account/API-key/minute bucket has `cachedInputTokens` and
`cachedInputTokensComplete`. Recorded per-request usage is reused; no extra provider request or
cache configuration change is made. Billing and the existing input/output fields remain unchanged.

New daily archives preserve cache-read totals. Archives created before this change have no retained
cache-read count: the count is `null` when entirely unknown, or a known subtotal with a false
completeness flag when mixed with measured data. The panel displays missing data instead of zero;
`+` marks a known subtotal whose historical coverage is incomplete. Historical data cannot be
reconstructed from the ordinary input total. Daily archives retain provider/model identity only,
not account or API-key identity. Those breakdowns therefore show only retained per-request data
and are marked incomplete whenever the selected history includes archives.

The existing ingestion convention records zero when raw cache-read metadata is absent; this change
does not turn that into a new provider-capability guarantee. Availability depends on the provider's
actual usage metadata.
