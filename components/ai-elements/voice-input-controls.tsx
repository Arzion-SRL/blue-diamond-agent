"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Mic, Square, AlertCircle, CheckCircle2 } from "lucide-react";

export interface VoiceInputControlsProps {
  isSupported: boolean;
  isListening: boolean;
  hasPermission: boolean | null;
  transcript: string;
  interimTranscript: string;
  confidence: number;
  error: string | null;
  onToggleListening: () => void;
  onRequestPermissions: () => void;
  onClearError: () => void;
  compact?: boolean;
}

export function VoiceInputControls({
  isSupported,
  isListening,
  hasPermission,
  transcript,
  interimTranscript,
  confidence,
  error,
  onToggleListening,
  onRequestPermissions,
  onClearError,
  compact = false,
}: VoiceInputControlsProps) {
  // If not supported, don't render anything
  if (!isSupported) {
    return null;
  }

  // Permission denied state
  if (hasPermission === false) {
    return (
      <div className="space-y-2">
        <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5" />
            <div className="text-orange-800">
              <div className="space-y-2">
                <p>Microphone access is required for voice input.</p>
                <Button
                  size="sm"
                  onClick={onRequestPermissions}
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Grant Microphone Access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="space-y-2">
        <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
            <div className="text-red-800 flex-1">
              <div className="flex items-center justify-between">
                <span>{error}</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={onClearError}
                  className="h-6 text-red-600 hover:text-red-700"
                >
                  ×
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <TooltipProvider>
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={onToggleListening}
                className={`${
                  isListening
                    ? "bg-red-50 border-red-200 text-red-700 animate-pulse"
                    : "text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
                }`}
                disabled={hasPermission !== true}
              >
                {isListening ? (
                  <Square className="w-4 h-4" />
                ) : (
                  <Mic className="w-4 h-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {isListening ? "Stop Voice Input" : "Start Voice Input"}
            </TooltipContent>
          </Tooltip>

          {isListening && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-red-600 font-medium">
                Recording
              </span>
            </div>
          )}
        </div>
      </TooltipProvider>
    );
  }

  return (
    <div className="space-y-3">
      {/* Main Controls */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleListening}
            className={`${
              isListening
                ? "bg-red-50 border-red-200 text-red-700"
                : "text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
            }`}
            disabled={hasPermission !== true}
          >
            {isListening ? (
              <>
                <Square className="w-4 h-4 mr-2" />
                Stop Recording
              </>
            ) : (
              <>
                <Mic className="w-4 h-4 mr-2" />
                Start Voice Input
              </>
            )}
          </Button>

          {hasPermission === true && (
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200"
            >
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Ready
            </Badge>
          )}
        </div>

        {isListening && (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-red-600 font-medium">
                Recording
              </span>
            </div>

            {confidence > 0 && (
              <Badge variant="outline" className="text-xs">
                Confidence: {Math.round(confidence * 100)}%
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Live Transcript Display */}
      {(transcript || interimTranscript) && (
        <div className="p-3 bg-gray-50 rounded-lg border">
          <div className="text-sm">
            <span className="font-medium text-gray-700">Transcription: </span>
            <span className="text-gray-900">{transcript}</span>
            {interimTranscript && (
              <span className="text-gray-500 italic">{interimTranscript}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
