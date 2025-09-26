import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SpeechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
              >
                Hyperfunnel
              </a>
              <span className="text-gray-400">•</span>
              <span className="text-lg text-gray-600">Text-to-Speech</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/travel-assistant"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Travel Assistant
              </a>
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
