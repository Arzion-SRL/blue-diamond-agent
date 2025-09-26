import type { Metadata } from "next";
import { Suspense } from "react";
import HomeContent from "@/components/pages/home/home-content";
import { generateDynamicMetadata } from "@/lib/metadata";

type Props = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  return generateDynamicMetadata(searchParams);
}

// Main page component with Suspense boundary
export default function Home(props: Props) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
