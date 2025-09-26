"use client";

import { useState, useCallback, useRef, useEffect } from "react";

export interface UseSpeechRecognitionOptions {
  lang?: string;
  continuous?: boolean;
  interimResults?: boolean;
  maxAlternatives?: number;
}

export interface SpeechRecognitionResultData {
  transcript: string;
  confidence: number;
  isFinal: boolean;
}

export function useSpeechRecognition(
  options: UseSpeechRecognitionOptions = {}
) {
  const {
    lang = "en-US",
    continuous = false,
    interimResults = true,
    maxAlternatives = 1,
  } = options;

  const [currentLang, setCurrentLang] = useState(lang);

  const [isSupported, setIsSupported] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [confidence, setConfidence] = useState(0);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if Speech Recognition is supported
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      setIsSupported(true);
      recognitionRef.current = new SpeechRecognition();
    } else {
      setIsSupported(false);
      setError("Speech recognition is not supported in this browser");
    }
  }, []);

  // Initialize recognition settings
  useEffect(() => {
    if (!recognitionRef.current) return;

    const recognition = recognitionRef.current;
    recognition.lang = currentLang;
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.maxAlternatives = maxAlternatives;

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
      setTranscript("");
      setInterimTranscript("");
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = "";
      let interimText = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcript = result[0].transcript;

        if (result.isFinal) {
          finalTranscript += transcript;
          setConfidence(result[0].confidence);
        } else {
          interimText += transcript;
        }
      }

      if (finalTranscript) {
        setTranscript((prev) => prev + finalTranscript);
      }
      setInterimTranscript(interimText);

      // Auto-stop after getting final result (if not continuous)
      if (!continuous && finalTranscript) {
        // Give a small delay to allow for natural pauses
        setTimeout(() => {
          stopListening();
        }, 800);
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setIsListening(false);

      const errorMessages = {
        network: "Network error occurred during recognition",
        "not-allowed":
          "Microphone access denied. Please allow microphone access and try again.",
        "no-speech": "No speech detected. Please try again.",
        aborted: "Speech recognition was aborted",
        "audio-capture": "Audio capture failed. Check your microphone.",
        "service-not-allowed": "Speech recognition service is not allowed",
      };

      const errorMessage =
        errorMessages[event.error as keyof typeof errorMessages] ||
        `Speech recognition error: ${event.error}`;

      setError(errorMessage);

      // Handle special case for permission denial
      if (event.error === "not-allowed") {
        setHasPermission(false);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
  }, [currentLang, continuous, interimResults, maxAlternatives]);

  // Check microphone permissions
  const checkPermissions = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());
      setHasPermission(true);
      return true;
    } catch (err: any) {
      if (
        err.name === "NotAllowedError" ||
        err.name === "PermissionDeniedError"
      ) {
        setHasPermission(false);
        setError(
          "Microphone access denied. Please allow microphone access and try again."
        );
      } else if (err.name === "NotFoundError") {
        setError(
          "No microphone found. Please connect a microphone and try again."
        );
      } else {
        setError("Failed to access microphone. Please check your settings.");
      }
      return false;
    }
  }, []);

  // Start listening
  const startListening = useCallback(async () => {
    if (!isSupported || !recognitionRef.current) {
      setError("Speech recognition is not supported");
      return;
    }

    if (isListening) {
      return;
    }

    // Check permissions first
    const hasAccess = await checkPermissions();
    if (!hasAccess) {
      return;
    }

    try {
      setError(null);
      setTranscript("");
      setInterimTranscript("");
      recognitionRef.current.start();

      // Auto-stop after 30 seconds if continuous mode
      if (continuous) {
        timeoutRef.current = setTimeout(() => {
          stopListening();
        }, 30000);
      }
    } catch (err: any) {
      setError("Failed to start speech recognition");
      setIsListening(false);
    }
  }, [isSupported, isListening, continuous, checkPermissions]);

  // Stop listening
  const stopListening = useCallback(() => {
    if (!recognitionRef.current || !isListening) {
      return;
    }

    recognitionRef.current.stop();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [isListening]);

  // Toggle listening
  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  // Reset transcript
  const resetTranscript = useCallback(() => {
    setTranscript("");
    setInterimTranscript("");
    setConfidence(0);
  }, []);

  // Change language
  const changeLanguage = useCallback(
    (newLang: string) => {
      if (isListening) {
        stopListening();
      }
      setCurrentLang(newLang);
    },
    [isListening, stopListening]
  );

  // Get full transcript (final + interim)
  const fullTranscript = transcript + interimTranscript;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (recognitionRef.current && isListening) {
        recognitionRef.current.abort();
      }
    };
  }, [isListening]);

  return {
    isSupported,
    isListening,
    hasPermission,
    transcript,
    interimTranscript,
    fullTranscript,
    confidence,
    error,
    currentLang,
    startListening,
    stopListening,
    toggleListening,
    resetTranscript,
    changeLanguage,
    checkPermissions,
    setError,
  };
}
