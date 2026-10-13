"use client";

import { useTranslations } from "next-intl";
import { fmtFull } from "@/shared/utils/formatting";

export default function CachedInputTokens({
  value,
  complete = true,
}: {
  value: number | null | undefined;
  complete?: boolean;
}) {
  const t = useTranslations("cache");
  const common = useTranslations("common");
  return (
    <span className="text-xs text-text-muted block" data-testid="cached-input-tokens">
      {t("cachedTokens")}:{" "}
      {value == null ? common("noData") : `${fmtFull(value)}${complete ? "" : "+"}`}
    </span>
  );
}
