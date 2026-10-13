// @vitest-environment jsdom
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { NextIntlClientProvider } from "next-intl";
import messages from "@/i18n/messages/en.json";
import namespaces from "@/i18n/routeNamespaces.generated.json";
import { pickMessages } from "@/i18n/pickMessages";
import CachedInputTokens from "@/shared/components/CachedInputTokens";
import UsageOverview from "@/shared/components/UsageOverview";

function renderUsage(children: React.ReactNode) {
  return renderToStaticMarkup(
    <NextIntlClientProvider
      locale="en"
      timeZone="UTC"
      messages={pickMessages(messages, namespaces.sections.usage)}
      onError={(error) => {
        throw error;
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}

describe("provider cached input reporting", () => {
  it("renders recorded cache reads separately from original input and output", () => {
    const html = renderUsage(
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
    expect(html).toContain("Total Input Tokens");
    expect(html).toContain(">100<");
    expect(html).toContain("Cache Read Tokens");
    expect(html).toContain("60");
    expect(html).toContain(messages.stats.outputTokens);
    expect(html).not.toContain(">160<");
  }, 1_000);

  it("does not display missing historical cache counts as measured zero", () => {
    const unknown = renderUsage(<CachedInputTokens value={null} complete={false} />);
    const partial = renderUsage(<CachedInputTokens value={60} complete={false} />);
    expect(unknown).toContain("No data available");
    expect(unknown).not.toContain(": 0");
    expect(partial).toContain("60");
    expect(partial).toContain("(Partial)");
  }, 1_000);
});
