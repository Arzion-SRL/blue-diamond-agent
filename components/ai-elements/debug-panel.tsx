import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronUp,
  Bug,
  MessageSquare,
  Wrench,
  Info,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface DebugPanelProps {
  messages: any[];
  status: string;
}

export function DebugPanel({ messages, status }: DebugPanelProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedMessages, setExpandedMessages] = useState<Set<string>>(
    new Set()
  );

  const toggleMessage = (messageId: string) => {
    const newExpanded = new Set(expandedMessages);
    if (newExpanded.has(messageId)) {
      newExpanded.delete(messageId);
    } else {
      newExpanded.add(messageId);
    }
    setExpandedMessages(newExpanded);
  };

  const getMessageTypeColor = (role: string) => {
    switch (role) {
      case "user":
        return "bg-blue-100 text-blue-800";
      case "assistant":
        return "bg-green-100 text-green-800";
      case "tool":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPartTypeColor = (type: string) => {
    switch (type) {
      case "text":
        return "bg-blue-50 text-blue-700";
      case "dynamic-tool":
        return "bg-orange-50 text-orange-700";
      case "tool":
        return "bg-purple-50 text-purple-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  const formatJson = (obj: any) => {
    try {
      return JSON.stringify(obj, null, 2);
    } catch {
      return String(obj);
    }
  };

  const renderPart = (part: any, index: number) => {
    return (
      <div key={index} className="border rounded-lg p-3 mb-2 bg-gray-50">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className={getPartTypeColor(part.type)}>
            {part.type}
          </Badge>
          {part.toolName && (
            <Badge variant="outline" className="bg-orange-50 text-orange-700">
              {part.toolName}
            </Badge>
          )}
          {part.state && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              {part.state}
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          {part.text && (
            <div>
              <span className="text-sm font-medium text-gray-600">Text:</span>
              <p className="text-sm bg-white p-2 rounded border">{part.text}</p>
            </div>
          )}

          {part.toolName && (
            <div>
              <span className="text-sm font-medium text-gray-600">
                Tool Name:
              </span>
              <p className="text-sm bg-white p-2 rounded border">
                {part.toolName}
              </p>
            </div>
          )}

          {part.state && (
            <div>
              <span className="text-sm font-medium text-gray-600">State:</span>
              <p className="text-sm bg-white p-2 rounded border">
                {part.state}
              </p>
            </div>
          )}

          {part.output && (
            <div>
              <span className="text-sm font-medium text-gray-600">Output:</span>
              <pre className="text-xs bg-white p-2 rounded border overflow-auto max-h-32">
                {formatJson(part.output)}
              </pre>
            </div>
          )}

          {part.errorText && (
            <div>
              <span className="text-sm font-medium text-red-600">Error:</span>
              <p className="text-sm bg-red-50 p-2 rounded border text-red-700">
                {part.errorText}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <Card className="fixed bottom-4 right-4 w-96 max-h-[80vh] overflow-hidden shadow-lg border-2 border-orange-200 z-50">
      <CardHeader className="bg-orange-50 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bug className="w-5 h-5 text-orange-600" />
            <CardTitle className="text-lg text-orange-800">
              Debug Panel
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="h-8 w-8 p-0 hover:bg-orange-100"
          >
            {isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-4 text-sm text-orange-700">
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            <span>{messages.length} messages</span>
          </div>
          <div className="flex items-center gap-1">
            <Wrench className="w-4 h-4" />
            <span>Status: {status}</span>
            {status === "streaming" && (
              <div className="animate-pulse w-2 h-2 bg-orange-500 rounded-full ml-1"></div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        {messages.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs">
            {(() => {
              const stats = messages.reduce((acc, msg) => {
                acc[msg.role] = (acc[msg.role] || 0) + 1;
                return acc;
              }, {} as Record<string, number>);

              return Object.entries(stats).map(([role, count]) => (
                <Badge
                  key={role}
                  variant="outline"
                  className="text-xs px-2 py-1"
                >
                  {role}: {String(count)}
                </Badge>
              ));
            })()}
          </div>
        )}
      </CardHeader>

      {isOpen && (
        <CardContent className="p-0 overflow-auto max-h-[60vh]">
          <div className="p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <Info className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p>No messages yet</p>
                <p className="text-sm">
                  Start a conversation to see debug info
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <Collapsible key={message.id || index}>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-3 h-auto bg-gray-50 hover:bg-gray-100"
                      onClick={() =>
                        toggleMessage(message.id || index.toString())
                      }
                    >
                      <div className="flex items-center gap-2">
                        <Badge className={getMessageTypeColor(message.role)}>
                          {message.role}
                        </Badge>
                        <span className="text-sm text-gray-600">
                          {message.parts?.length || 0} parts
                        </span>
                      </div>
                      {expandedMessages.has(message.id || index.toString()) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="mt-2">
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500 mb-2">
                        ID: {message.id || "No ID"} | Created:{" "}
                        {message.createdAt
                          ? new Date(message.createdAt).toLocaleTimeString()
                          : "Unknown"}
                      </div>

                      {message.parts && message.parts.length > 0 ? (
                        message.parts.map((part: any, partIndex: number) =>
                          renderPart(part, partIndex)
                        )
                      ) : (
                        <div className="text-sm text-gray-500 italic">
                          No parts available
                        </div>
                      )}

                      {message.finishReason && (
                        <div className="mt-2">
                          <span className="text-sm font-medium text-gray-600">
                            Finish Reason:
                          </span>
                          <Badge variant="outline" className="ml-2">
                            {message.finishReason}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
