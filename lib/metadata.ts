import type { Metadata } from "next";
import { headers } from "next/headers";
import { BRANDING } from "./constants";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined; }>;

export async function generateDynamicMetadata(
  searchParams?: SearchParams
): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const hasNoBranding = resolvedSearchParams?.[BRANDING.NO_BRANDING_PARAM] !== undefined;

  const headersList = await headers();
  const host = headersList.get("host");
  const isTravelApp = host === BRANDING.TRAVEL_DOMAIN;

  if (hasNoBranding || isTravelApp) {
    return {
      title: "AI-Powered Travel Assistant",
      description:
        "Discover perfect hotels through smart conversations, curated recommendations, and instant booking - all powered by AI to make your travel planning effortless.",
    };
  }

  // Título normal de producción
  return {
    title: "Hyperfunnel - AI-Powered Travel Assistant",
    description:
      "Discover perfect hotels through smart conversations, curated recommendations, and instant booking - all powered by AI to make your travel planning effortless.",
  };
}
