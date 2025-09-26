"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Volume2, VolumeX, Play, Square, Settings } from "lucide-react";
import { type VoiceType } from "@/lib/speech";

export interface SpeechControlsProps {
  isSpeechEnabled: boolean;
  isPlaying: boolean;
  currentVoice: VoiceType;
  error: string | null;
  onToggleSpeech: () => void;
  onChangeVoice: (voice: VoiceType) => void;
  onStopAudio: () => void;
  compact?: boolean;
}

const voices: { value: VoiceType; label: string; description: string }[] = [
  { value: "alloy", label: "Alloy", description: "Balanced and natural" },
  { value: "echo", label: "Echo", description: "Clear and articulate" },
  { value: "fable", label: "Fable", description: "Warm and storytelling" },
  { value: "onyx", label: "Onyx", description: "Deep and authoritative" },
  { value: "nova", label: "Nova", description: "Energetic and bright" },
  { value: "shimmer", label: "Shimmer", description: "Soft and gentle" },
];

export function SpeechControls({
  isSpeechEnabled,
  isPlaying,
  currentVoice,
  error,
  onToggleSpeech,
  onChangeVoice,
  onStopAudio,
  compact = false,
}: SpeechControlsProps) {
  if (compact) {
    return (
      <TooltipProvider>
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={onToggleSpeech}
                className={`${
                  isSpeechEnabled
                    ? "bg-[#3D6E7E] hover:bg-[#3D6E7E] border-[#3D6E7E] hover:text-white"
                    : "bg-transparent hover:bg-[#3D6E7E] hover:text-white"
                }`}
              >
                {isSpeechEnabled ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {isSpeechEnabled ? "Disable Auto Speech" : "Enable Auto Speech"}
            </TooltipContent>
          </Tooltip>

          {isPlaying && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onStopAudio}
                  className="text-red-600 border-red-200"
                >
                  <Square className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Stop Audio</TooltipContent>
            </Tooltip>
          )}
        </div>
      </TooltipProvider>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onToggleSpeech}
          className={`${
            isSpeechEnabled
              ? "bg-blue-50 border-blue-200 text-blue-700"
              : "text-gray-600"
          }`}
        >
          {isSpeechEnabled ? (
            <Volume2 className="w-4 h-4 mr-2" />
          ) : (
            <VolumeX className="w-4 h-4 mr-2" />
          )}
          {isSpeechEnabled ? "Auto Speech ON" : "Auto Speech OFF"}
        </Button>

        {isSpeechEnabled && (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            {currentVoice}
          </Badge>
        )}
      </div>

      {isPlaying && (
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">Playing</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onStopAudio}
            className="text-red-600 border-red-200"
          >
            <Square className="w-3 h-3 mr-1" />
            Stop
          </Button>
        </div>
      )}

      {isSpeechEnabled && (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-3">
              <h4 className="font-semibold">Speech Settings</h4>
              <div className="space-y-2">
                <label className="text-sm font-medium">Voice:</label>
                <Select
                  value={currentVoice}
                  onValueChange={(value) => onChangeVoice(value as VoiceType)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {voices.map((voice) => (
                      <SelectItem key={voice.value} value={voice.value}>
                        <div className="flex flex-col">
                          <span className="font-medium">{voice.label}</span>
                          <span className="text-xs text-gray-500">
                            {voice.description}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <p className="text-xs text-gray-600">
                Assistant responses will automatically be converted to speech
                when this feature is enabled.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      )}

      {error && (
        <Badge variant="destructive" className="text-xs">
          {error}
        </Badge>
      )}
    </div>
  );
}

export interface MessageSpeechButtonProps {
  text: string;
  onPlay: (text: string) => void;
  disabled?: boolean;
  isPlaying?: boolean;
}

export function MessageSpeechButton({
  text,
  onPlay,
  disabled = false,
  isPlaying = false,
}: MessageSpeechButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onPlay(text)}
            disabled={disabled}
            className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
          >
            {isPlaying ? (
              <Square className="w-3 h-3" />
            ) : (
              <Play className="w-3 h-3" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {isPlaying ? "Stop" : "Play this message"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
