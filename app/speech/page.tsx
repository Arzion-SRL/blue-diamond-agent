import { Metadata } from "next";
import SpeechExample from "@/components/examples/speech-example";

export const metadata: Metadata = {
  title: "Text-to-Speech | Hyperfunnel",
  description: "Convert text to speech using OpenAI's TTS API",
};

export default function SpeechPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Text-to-Speech
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your text into natural-sounding speech using OpenAI's
            advanced text-to-speech technology. Choose from multiple voices and
            generate high-quality audio instantly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <SpeechExample />
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-sm border p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  🎤 Multiple Voices
                </h3>
                <p className="text-gray-600 text-sm">
                  Choose from 6 different AI voices: Alloy, Echo, Fable, Onyx,
                  Nova, and Shimmer.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  ⚡ Instant Generation
                </h3>
                <p className="text-gray-600 text-sm">
                  Generate high-quality speech audio in seconds with OpenAI's
                  TTS-1 model.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  🎵 Audio Controls
                </h3>
                <p className="text-gray-600 text-sm">
                  Play audio directly in the browser or download MP3 files for
                  later use.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  📱 Responsive Design
                </h3>
                <p className="text-gray-600 text-sm">
                  Works seamlessly on desktop, tablet, and mobile devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
