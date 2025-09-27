import type { MessagePart } from "./tool-renderer/types";
import {
  hasToolParts,
  shouldShowTextWithTool,
} from "./tool-renderer/tool-utils";
import {
  renderTool,
  renderTextAndTools,
  renderTextParts,
} from "./tool-renderer/tool-renderer";

export function useToolRenderer(sendMessage?: (message: any) => void) {
  // Create render functions bound with sendMessage
  const boundRenderTool = (parts: MessagePart[]) =>
    renderTool(parts, sendMessage);
  const boundRenderTextAndTools = (parts: MessagePart[]) =>
    renderTextAndTools(parts, sendMessage);

  // Smart render function that chooses the appropriate rendering strategy
  const renderContent = (parts: MessagePart[]): React.ReactNode => {
    if (hasToolParts(parts)) {
      // Always render text and tools together for better UX
      return boundRenderTextAndTools(parts);
    }

    // Fallback to text content only
    const textComponents = renderTextParts(parts);

    // Return null if no content to prevent empty message containers
    return textComponents.length > 0 ? textComponents : null;
  };

  return {
    renderTool: boundRenderTool,
    renderTextAndTools: boundRenderTextAndTools,
    hasTool: hasToolParts,
    shouldShowTextWithTool,
    renderContent,
  };
}
