"use client";

import { useState } from "react";
import {
  generateSpeech,
  generateAndPlaySpeech,
  type VoiceType,
} from "@/lib/speech";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader } from "@/components/ai-elements/loader";

export default function SpeechExample() {
  const [text, setText] = useState("Hello, world!");
  const [voice, setVoice] = useState<VoiceType>("alloy");
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const voices: { value: VoiceType; label: string }[] = [
    { value: "alloy", label: "Alloy" },
    { value: "echo", label: "Echo" },
    { value: "fable", label: "Fable" },
    { value: "onyx", label: "Onyx" },
    { value: "nova", label: "Nova" },
    { value: "shimmer", label: "Shimmer" },
  ];

  const handleGenerateAndPlay = async () => {
    if (!text.trim()) return;

    setIsGenerating(true);
    setError(null);

    try {
      await generateAndPlaySpeech({ text, voice });
    } catch (err: any) {
      if (err.message?.includes("Text-to-Speech is not currently supported")) {
        setError(
          "Text-to-Speech requires an OpenAI API key. Please add OPENAI_API_KEY to your environment variables."
        );
      } else {
        setError(
          err instanceof Error ? err.message : "Failed to generate speech"
        );
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateDownload = async () => {
    if (!text.trim()) return;

    setIsGenerating(true);
    setError(null);

    try {
      const audioBlob = await generateSpeech({ text, voice });
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);

      // Create download link
      const a = document.createElement("a");
      a.href = url;
      a.download = `speech-${Date.now()}.mp3`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err: any) {
      if (err.message?.includes("Text-to-Speech is not currently supported")) {
        setError(
          "Text-to-Speech requires an OpenAI API key. Please add OPENAI_API_KEY to your environment variables."
        );
      } else {
        setError(
          err instanceof Error ? err.message : "Failed to generate speech"
        );
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Text-to-Speech Example</CardTitle>
        <CardDescription>
          Generate speech from text using OpenAI's TTS API
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="text-input" className="text-sm font-medium">
            Text to convert:
          </label>
          <Input
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to convert to speech..."
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="voice-select" className="text-sm font-medium">
            Voice:
          </label>
          <Select
            value={voice}
            onValueChange={(value) => setVoice(value as VoiceType)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a voice" />
            </SelectTrigger>
            <SelectContent>
              {voices.map((v) => (
                <SelectItem key={v.value} value={v.value}>
                  {v.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
            {error}
          </div>
        )}

        <div className="flex gap-2">
          <Button
            onClick={handleGenerateAndPlay}
            disabled={!text.trim() || isGenerating}
            className="flex-1"
          >
            {isGenerating ? <Loader size={16} className="mr-2" /> : null}
            Play Speech
          </Button>

          <Button
            onClick={handleGenerateDownload}
            disabled={!text.trim() || isGenerating}
            variant="outline"
            className="flex-1"
          >
            {isGenerating ? <Loader size={16} className="mr-2" /> : null}
            Download Speech
          </Button>
        </div>

        {audioUrl && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Generated Audio:</label>
            <audio controls className="w-full">
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
