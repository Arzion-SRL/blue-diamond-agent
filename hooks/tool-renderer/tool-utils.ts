import type { ToolPart, MessagePart } from "./types";
import { TOOL_REGISTRY } from "./tool-config";

// Constants
const TOOL_PREFIX = "tool-";

/**
 * Extracts tool name from a message part
 * Handles both MCP tools (with "tool-" prefix) and regular tools
 */
export function extractToolName(part: any): string | null {
  // First check if type starts with "tool-" (MCP tools)
  if (part.type && part.type.startsWith(TOOL_PREFIX)) {
    return part.type.replace(TOOL_PREFIX, "");
  }

  // Fallback to toolName field (regular tools)
  if (part.toolName) {
    return part.toolName;
  }

  return null;
}

/**
 * Checks if a part is a valid tool part
 */
export function isToolPart(part: any): part is ToolPart {
  const toolName = extractToolName(part);
  return toolName !== null && "state" in part;
}

/**
 * Checks if a part is a text part with content
 */
export function isTextPart(part: MessagePart): boolean {
  return part.type === "text" && Boolean(part.text?.trim());
}

/**
 * Filters parts to get only text parts with content
 */
export function getTextParts(parts: MessagePart[]): MessagePart[] {
  return parts.filter(isTextPart);
}

/**
 * Checks if any part in the array is a tool part
 */
export function hasToolParts(parts: MessagePart[]): boolean {
  return parts.some(isToolPart);
}

/**
 * Checks if any tool in the parts should show text along with it
 */
export function shouldShowTextWithTool(parts: MessagePart[]): boolean {
  for (const part of parts) {
    const toolName = extractToolName(part);
    if (toolName && isToolPart(part)) {
      const toolConfig = TOOL_REGISTRY[toolName];
      if (toolConfig?.showTextWithTool) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Finds tools with available output, prioritizing certain tools
 */
export function findToolsWithOutput(
  parts: MessagePart[],
  priorityTools: readonly string[] = []
): ToolPart[] {
  const toolsWithOutput: ToolPart[] = [];

  for (const part of parts) {
    const toolName = extractToolName(part);
    if (toolName && isToolPart(part)) {
      const toolPart = part as ToolPart;
      if (toolPart.state === "output-available" && toolPart.output) {
        toolsWithOutput.push(toolPart);
      }
    }
  }

  // Sort by priority
  return toolsWithOutput.sort((a, b) => {
    const aName = extractToolName(a);
    const bName = extractToolName(b);
    const aPriority = aName ? priorityTools.indexOf(aName) : -1;
    const bPriority = bName ? priorityTools.indexOf(bName) : -1;

    // If both have priority, sort by priority order
    if (aPriority !== -1 && bPriority !== -1) {
      return aPriority - bPriority;
    }

    // Priority tools come first
    if (aPriority !== -1) return -1;
    if (bPriority !== -1) return 1;

    // No priority difference
    return 0;
  });
}

/**
 * Finds tools in loading or error states
 */
export function findToolsInLoadingOrErrorState(parts: MessagePart[]): ToolPart[] {
  const loadingOrErrorTools: ToolPart[] = [];

  for (const part of parts) {
    const toolName = extractToolName(part);
    if (toolName && isToolPart(part)) {
      const toolPart = part as ToolPart;
      const toolConfig = TOOL_REGISTRY[toolName];

      if (toolConfig && (toolPart.state === "input-available" || toolPart.state === "output-error")) {
        loadingOrErrorTools.push(toolPart);
      }
    }
  }

  return loadingOrErrorTools;
}
