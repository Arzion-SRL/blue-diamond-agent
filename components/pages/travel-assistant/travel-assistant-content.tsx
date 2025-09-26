"use client";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, Bug, UserStar, Mic, Square } from "lucide-react";
import { useState, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { useToolRenderer } from "@/hooks/use-tool-renderer";
import { useChatSpeech } from "@/hooks/use-chat-speech";
import { useSpeechRecognition } from "@/hooks/use-speech-recognition";
import HyperfunnelIcon from "@/components/ui/hyperfunnel-icon";
import { DebugPanel } from "@/components/ai-elements/debug-panel";
import { useDebugMode } from "@/hooks/use-debug-mode";
import { useSearchParams } from "next/navigation";
import { shouldHideBranding } from "@/lib/branding-helpers";
import {
  SpeechControls,
  MessageSpeechButton,
} from "@/components/ai-elements/speech-controls";
import { VoiceInputControls } from "@/components/ai-elements/voice-input-controls";

export default function TravelAssistantContent() {
  const [input, setInput] = useState("");
  const [isAutoSending, setIsAutoSending] = useState(false);
  const { isDebugAvailable, showDebug, toggleDebug } = useDebugMode();
  const { messages, sendMessage, status } = useChat();
  const { renderContent } = useToolRenderer(sendMessage, status);
  const searchParams = useSearchParams();
  const hideBranding = shouldHideBranding(searchParams);

  const {
    isSpeechEnabled,
    isPlaying,
    error: speechError,
    currentVoice,
    toggleSpeech,
    handleMessageSpeech,
    playMessageSpeech,
    changeVoice,
    stopCurrentAudio,
    setError,
  } = useChatSpeech({ voice: "alloy", autoPlay: false });

  // Voice input functionality (speech-to-text)
  const {
    isSupported: isVoiceInputSupported,
    isListening,
    hasPermission,
    transcript,
    interimTranscript,
    confidence,
    error: voiceInputError,
    toggleListening,
    resetTranscript,
    checkPermissions,
    setError: setVoiceInputError,
  } = useSpeechRecognition({
    lang: "en-US",
    continuous: false,
    interimResults: true,
  });

  // Auto-generate speech for new assistant messages
  useEffect(() => {
    if (isSpeechEnabled && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === "assistant" && status !== "streaming") {
        // Extract text content from message parts
        const textParts =
          lastMessage.parts
            ?.filter((part: any) => part.type === "text")
            ?.map((part: any) => part.text)
            ?.join(" ") || "";

        if (textParts.trim()) {
          handleMessageSpeech(textParts, true);
        }
      }
    }
  }, [messages, status, isSpeechEnabled, handleMessageSpeech]);

  // Handle voice input completion - auto-submit message
  useEffect(() => {
    if (!isListening && transcript && transcript.trim()) {
      // When voice input stops and we have a transcript, send message automatically
      const finalText = (input + (input ? " " : "") + transcript.trim()).trim();

      if (finalText) {
        setIsAutoSending(true);

        // Small delay to show the auto-sending state
        setTimeout(() => {
          sendMessage({
            role: "user",
            parts: [{ type: "text", text: finalText }],
          });

          // Clean up after sending
          setInput("");
          resetTranscript();
          setIsAutoSending(false);
        }, 300);
      }
    }
  }, [isListening, transcript, input, sendMessage, resetTranscript]);

  // Helper function to extract text from message parts
  const extractTextFromMessage = (messageParts: any[]) => {
    return (
      messageParts
        ?.filter((part: any) => part.type === "text")
        ?.map((part: any) => part.text)
        ?.join(" ") || ""
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({
        role: "user",
        parts: [{ type: "text", text: input }],
      });
      setInput("");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Chat Interface */}
      <Card className="h-[100dvh] flex flex-col overflow-hidden gap-0">
        <CardHeader className="border-b flex-shrink-0 bg-[#F9F9FB]">
          <div className="flex flex-wrap-reverse gap-2 items-center justify-between">
            <CardTitle className="text-lg">
              How can I help you plan your trip today?
            </CardTitle>
            <div className="flex items-center gap-4">
              {hideBranding ? (
                <UserStar size={32} className="text-gray-600" />
              ) : (
                <HyperfunnelIcon size={32} />
              )}
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-semibold text-gray-900">
                    Travel Assistant
                  </h1>
                  {isDebugAvailable && (
                    <Badge
                      variant="outline"
                      className="bg-orange-50 text-orange-700 border-orange-200"
                    >
                      DEV
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-500">
                  AI-powered travel planning
                </p>
              </div>
            </div>
          </div>

          <CardAction className="flex items-center gap-2">
            {/* Text-to-Speech Controls */}
            <SpeechControls
              isSpeechEnabled={isSpeechEnabled}
              isPlaying={isPlaying}
              currentVoice={currentVoice}
              error={speechError}
              onToggleSpeech={toggleSpeech}
              onChangeVoice={changeVoice}
              onStopAudio={stopCurrentAudio}
              compact={true}
            />

            {/* Voice Input Controls */}
            <VoiceInputControls
              isSupported={isVoiceInputSupported}
              isListening={isListening}
              hasPermission={hasPermission}
              transcript={transcript}
              interimTranscript={interimTranscript}
              confidence={confidence}
              error={voiceInputError}
              onToggleListening={toggleListening}
              onRequestPermissions={checkPermissions}
              onClearError={() => setVoiceInputError(null)}
              compact={true}
            />

            {isDebugAvailable && (
              <Button
                variant="outline"
                size="sm"
                onClick={toggleDebug}
                className="font-bold"
              >
                <Bug className="w-4 h-4 mr-2" />
                {showDebug ? "Hide Debug" : "Show Debug"}
              </Button>
            )}
          </CardAction>
        </CardHeader>

        <CardContent className="max-w-4xl mx-auto w-full flex-1 flex flex-col pl-4 pr-4">
          <div className="flex-1 relative">
            <Conversation className="absolute inset-0">
              <ConversationContent className="py-6 md:p-6">
                {messages.map((message) => {
                  const messageText = extractTextFromMessage(
                    message.parts || []
                  );
                  const isAssistant = message.role === "assistant";

                  return (
                    <Message
                      from={message.role as "user" | "assistant" | "system"}
                      key={`${message.id}`}
                    >
                      <MessageContent
                        speechButton={
                          isAssistant && messageText.trim() ? (
                            <MessageSpeechButton
                              text={messageText}
                              onPlay={playMessageSpeech}
                              disabled={isPlaying}
                              isPlaying={false}
                            />
                          ) : undefined
                        }
                      >
                        {renderContent(message.parts)}
                      </MessageContent>
                    </Message>
                  );
                })}

                {/* Loading indicator - Show feedback during streaming */}
                {status === "streaming" && (
                  <Message from="assistant">
                    <MessageContent>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                        <span>Thinking...</span>
                      </div>
                    </MessageContent>
                  </Message>
                )}
              </ConversationContent>
              <ConversationScrollButton />
            </Conversation>
          </div>

          {/* Input Area */}
          <div className="mb-4 relative before:bg-[url('/background-prompt.png')] before:bg-cover before:bg-no-repeat before:bg-bottom before:absolute before:w-full before:h-[70px] before:md:h-[180px] before:block before:-bottom-6 before:left-0 before:right-0 before:z-0">
            <div className="w-full relative z-1">
              {/* Suggestion Buttons */}
              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 mb-4 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setInput(
                        "I need help finding hotels in Mexico for next week"
                      )
                    }
                    className="text-sm h-8 px-3 rounded-lg border-gray-300"
                  >
                    Find hotels in Mexico
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setInput(
                        "What are the best destinations for a beach vacation?"
                      )
                    }
                    className="text-sm h-8 px-3 rounded-lg border-gray-300"
                  >
                    Where can i go for a beach vacation?
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setInput("Help me plan a 5-day itinerary for Mexico")
                    }
                    className="text-sm h-8 px-3 rounded-lg border-gray-300"
                  >
                    Help me plan a 5-day itinerary for Mexico
                  </Button>
                </div>
              )}

              <PromptInput onSubmit={handleSubmit} className="w-full relative">
                <PromptInputTextarea
                  value={
                    input + (interimTranscript ? ` ${interimTranscript}` : "")
                  }
                  placeholder={
                    isListening
                      ? "Listening... speak now (will send automatically when you finish)"
                      : isAutoSending
                      ? "Sending your voice message..."
                      : "Ask me about hotels, destinations, or travel planning..."
                  }
                  onChange={(e) => setInput(e.currentTarget.value)}
                  className="pr-20 min-h-[100px] max-h-[100px] rounded-2xl border-gray-300 bg-gray-50 focus:border-gray-400 focus:ring-0 focus:bg-white resize-none overflow-auto"
                  readOnly={isListening}
                />

                {/* Voice Input Button */}
                {isVoiceInputSupported && (
                  <Button
                    type="button"
                    onClick={toggleListening}
                    disabled={
                      hasPermission === false ||
                      status === "streaming" ||
                      isAutoSending
                    }
                    className={`absolute bottom-3 right-14 rounded-full w-10 h-10 p-0 transition-all duration-200 ${
                      isListening
                        ? "bg-red-500 hover:bg-red-600 animate-pulse"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                    title={
                      isListening
                        ? "Stop recording"
                        : "Click to speak - message will send automatically"
                    }
                  >
                    {isListening ? (
                      <Square className="w-5 h-5 text-white" />
                    ) : (
                      <Mic className="w-5 h-5 text-white" />
                    )}
                  </Button>
                )}

                {/* Send Button */}
                <Button
                  type="submit"
                  disabled={
                    (!input.trim() && !transcript.trim()) ||
                    status === "streaming" ||
                    isListening ||
                    isAutoSending
                  }
                  className="absolute bottom-3 right-2 rounded-full w-10 h-10 p-0 bg-gray-800 hover:bg-gray-700 transition-all duration-200 disabled:opacity-30"
                  onClick={() => {
                    const finalText = (
                      input + (transcript ? ` ${transcript}` : "")
                    ).trim();
                    if (finalText) {
                      sendMessage({
                        role: "user",
                        parts: [
                          {
                            type: "text",
                            text: finalText,
                          },
                        ],
                      });
                      setInput("");
                      resetTranscript();
                    }
                  }}
                >
                  <ArrowUp className="w-5 h-5 text-white" />
                </Button>
              </PromptInput>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Debug Panel - Only show in development */}
      {showDebug && <DebugPanel messages={messages} status={status} />}
    </div>
  );
}
