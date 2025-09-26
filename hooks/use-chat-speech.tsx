"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { generateAndPlaySpeech, type VoiceType } from "@/lib/speech";

export interface UseChatSpeechOptions {
  voice?: VoiceType;
  autoPlay?: boolean;
}

export function useChatSpeech(options: UseChatSpeechOptions = {}) {
  const { voice = "alloy", autoPlay = false } = options;
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(autoPlay);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentVoice, setCurrentVoice] = useState<VoiceType>(voice);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  // Stop any currently playing audio
  const stopCurrentAudio = useCallback(() => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current = null;
      setIsPlaying(false);
    }
  }, []);

  // Generate and play speech for text
  const generateSpeech = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      try {
        setError(null);
        setIsPlaying(true);

        // Stop any currently playing audio
        stopCurrentAudio();

        // Clean text (remove markdown, special characters, etc.)
        const cleanText = text
          .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold markdown
          .replace(/\*(.*?)\*/g, "$1") // Remove italic markdown
          .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Remove links, keep text
          .replace(/`(.*?)`/g, "$1") // Remove code backticks
          .replace(/#{1,6}\s/g, "") // Remove heading markers
          .replace(/[^\w\s.,!?;:'"()-]/g, "") // Remove special characters
          .trim();

        if (!cleanText) return;

        const audio = await generateAndPlaySpeech({
          text: cleanText,
          voice: currentVoice,
        });

        currentAudioRef.current = audio;

        // Listen for audio events
        audio.addEventListener("ended", () => {
          setIsPlaying(false);
          currentAudioRef.current = null;
        });

        audio.addEventListener("error", () => {
          setIsPlaying(false);
          setError("Failed to play audio");
          currentAudioRef.current = null;
        });
      } catch (err: any) {
        setIsPlaying(false);
        if (
          err.message?.includes("Text-to-Speech is not currently supported")
        ) {
          setError("Text-to-Speech requires an OpenAI API key.");
        } else {
          setError(err.message || "Failed to generate speech");
        }
      }
    },
    [currentVoice, stopCurrentAudio]
  );

  // Auto-generate speech for assistant messages when enabled
  const handleMessageSpeech = useCallback(
    (text: string, isAssistant: boolean) => {
      if (isSpeechEnabled && isAssistant && text.trim()) {
        // Small delay to ensure message is fully rendered
        setTimeout(() => {
          generateSpeech(text);
        }, 100);
      }
    },
    [isSpeechEnabled, generateSpeech]
  );

  // Toggle speech on/off
  const toggleSpeech = useCallback(() => {
    setIsSpeechEnabled((prev) => {
      if (prev) {
        // If disabling, stop current audio
        stopCurrentAudio();
      }
      return !prev;
    });
    setError(null);
  }, [stopCurrentAudio]);

  // Manual speech generation (for buttons on individual messages)
  const playMessageSpeech = useCallback(
    (text: string) => {
      generateSpeech(text);
    },
    [generateSpeech]
  );

  // Change voice
  const changeVoice = useCallback((newVoice: VoiceType) => {
    setCurrentVoice(newVoice);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCurrentAudio();
    };
  }, [stopCurrentAudio]);

  return {
    isSpeechEnabled,
    isPlaying,
    error,
    currentVoice,
    toggleSpeech,
    handleMessageSpeech,
    playMessageSpeech,
    changeVoice,
    stopCurrentAudio,
    setError,
  };
}
