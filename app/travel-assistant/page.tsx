import type { Metadata } from "next";
import { Suspense } from "react";
import TravelAssistantContent from "@/components/pages/travel-assistant/travel-assistant-content";
import { generateDynamicMetadata } from "@/lib/metadata";

type Props = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  return generateDynamicMetadata(searchParams);
}

export default function TravelAssistantPage(props: Props) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      }
    >
      <TravelAssistantContent />
    </Suspense>
  );
}
