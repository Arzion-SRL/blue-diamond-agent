import React from "react";
import { Response } from "@/components/ai-elements/response";
import { escapeMarkdownChars } from "@/lib/utils";
import type { MessagePart, ToolPart } from "./types";
import { TOOL_REGISTRY, PRIORITY_TOOLS } from "./tool-config";
import {
  extractToolName,
  isToolPart,
  findToolsWithOutput,
  findToolsInLoadingOrErrorState,
} from "./tool-utils";

/**
 * Renders a single tool component
 */
function renderToolComponent(
  toolPart: ToolPart,
  sendMessage?: (message: any) => void
): React.ReactNode {
  const toolName = extractToolName(toolPart);
  if (!toolName) return null;

  const toolConfig = TOOL_REGISTRY[toolName];
  if (!toolConfig) return null;

  try {
    const Component = toolConfig.component;
    const data = toolConfig.extractData(toolPart.output);
    return <Component {...data} sendMessage={sendMessage} />;
  } catch (error) {
    return <div className="text-red-500">Error rendering tool: {toolName}</div>;
  }
}

/**
 * Renders loading or error states for tools
 */
function renderToolState(toolPart: ToolPart): React.ReactNode {
  const toolName = extractToolName(toolPart);
  if (!toolName) return null;

  const toolConfig = TOOL_REGISTRY[toolName];
  if (!toolConfig) return null;

  switch (toolPart.state) {
    case "input-available":
      return <div className="text-blue-500">{toolConfig.loadingMessage}</div>;
    case "output-error":
      return (
        <div className="text-red-500">
          {toolConfig.errorMessage(toolPart.errorText)}
        </div>
      );
    default:
      return null;
  }
}

/**
 * Main tool rendering logic
 */
export function renderTool(
  parts: MessagePart[],
  sendMessage?: (message: any) => void
): React.ReactNode | null {
  // First, look for priority tools with output
  const toolsWithOutput = findToolsWithOutput(parts, PRIORITY_TOOLS);

  if (toolsWithOutput.length > 0) {
    // Render the first (highest priority) tool with output
    return renderToolComponent(toolsWithOutput[0], sendMessage);
  }

  // Then look for tools in loading or error states
  const loadingOrErrorTools = findToolsInLoadingOrErrorState(parts);

  if (loadingOrErrorTools.length > 0) {
    // Render the first tool in loading/error state
    return renderToolState(loadingOrErrorTools[0]);
  }

  return null;
}

/**
 * Renders text parts as Response components
 */
export function renderTextParts(parts: MessagePart[]): React.ReactNode[] {
  return parts
    .filter((part) => part.type === "text" && part.text?.trim())
    .map((part, index) => (
      <Response key={`text-${index}`}>
        {escapeMarkdownChars(part.text || "")}
      </Response>
    ));
}

/**
 * Renders both text and tools together
 */
export function renderTextAndTools(
  parts: MessagePart[],
  sendMessage?: (message: any) => void
): React.ReactNode {
  const textComponents = renderTextParts(parts);
  const toolComponent = renderTool(parts, sendMessage);

  return (
    <div className="space-y-2">
      {textComponents}
      {toolComponent}
    </div>
  );
}
