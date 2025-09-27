import { Hotels } from "@/components/tool-render/hotel";
import { Rooms } from "@/components/tool-render/rooms";
import { Booking } from "@/components/tool-render/booking";
import { BookingDetails } from "@/components/tool-render/booking-details";
// import { Destinations } from "@/components/tool-render/destinations";
import { Response } from "@/components/ai-elements/response";
import type { ChatStatus } from "ai";
import { escapeMarkdownChars } from "@/lib/utils";

// Base types for tools
export interface ToolConfig {
  component: React.ComponentType<any>;
  loadingMessage: string;
  errorMessage: (error?: string) => string;
  extractData: (output: any) => any;
  // Option to show text along with the tool (default: false for backward compatibility)
  showTextWithTool?: boolean;
}

// Available tools registry
export const TOOL_REGISTRY: Record<string, ToolConfig> = {
  // get_available_destinations: {
  //   component: Destinations,
  //   loadingMessage: "Loading available destinations...",
  //   errorMessage: (error) =>
  //     `Error loading destinations: ${error || "Unknown error"}`,
  //   extractData: (output) => ({
  //     destinations: output?.structuredContent?.content || [],
  //   }),
  //   showTextWithTool: true,
  // },

  search_hotels: {
    component: Hotels,
    loadingMessage: "Searching hotels...",
    errorMessage: (error) =>
      `Error searching hotels: ${error || "Unknown error"}`,
    extractData: (output) => ({
      hotels: output?.structuredContent?.content || [],
    }),
    showTextWithTool: true,
  },
  get_hotels_by_chain: {
    component: Hotels,
    loadingMessage: "Searching hotels...",
    errorMessage: (error) =>
      `Error searching hotels: ${error || "Unknown error"}`,
    extractData: (output) => ({
      hotels: output?.structuredContent?.content || [],
    }),
    showTextWithTool: true,
  },

  get_rooms_by_hotel_id: {
    component: Rooms,
    loadingMessage: "Loading available rooms...",
    errorMessage: (error) => `Error loading rooms: ${error || "Unknown error"}`,
    extractData: (output) => ({
      rooms: output?.structuredContent?.content || [],
    }),
    showTextWithTool: true,
  },

  get_hotel_details_with_rooms: {
    component: Rooms,
    loadingMessage: "Loading hotel details and rooms...",
    errorMessage: (error) =>
      `Error loading hotel details: ${error || "Unknown error"}`,
    extractData: (output) => ({
      rooms: output?.structuredContent?.content?.rooms || [],
    }),
    showTextWithTool: true,
  },

  create_booking: {
    component: Booking,
    loadingMessage: "Creating your booking...",
    errorMessage: (error) =>
      `Error creating booking: ${error || "Unknown error"}`,
    extractData: (output) => {
      // For errors, pass the entire structured content to handle status codes and request body
      if (
        output?.structuredContent?.status_code &&
        output?.structuredContent?.status_code !== 200 &&
        output?.structuredContent?.status_code !== 201
      ) {
        return {
          booking: {
            ...output.structuredContent,
            ...(output.structuredContent.content || {}),
          },
        };
      }
      // For successful bookings, use the original logic
      return {
        booking: output?.structuredContent?.content || output?.content || {},
      };
    },
    showTextWithTool: true,
  },

  get_booking_details: {
    component: BookingDetails,
    loadingMessage: "Processing your payment...",
    errorMessage: (error) =>
      `Error processing payment: ${error || "Unknown error"}`,
    extractData: (output) => ({
      bookingDetails:
        output?.structuredContent?.content || output?.content || {},
    }),
    showTextWithTool: true,
  },

  // To add more tools, simply add new entries here:
  // 'get_flights': {
  //   component: Flights,
  //   loadingMessage: 'Searching flights...',
  //   errorMessage: (error) => `Error searching flights: ${error || 'Unknown error'}`,
  //   extractData: (output) => ({ flights: output?.flights || [] })
  // },
};

export interface ToolPart {
  type: string;
  toolCallId?: string;
  state?: "input-available" | "output-available" | "output-error";
  input?: any;
  output?: any;
  errorText?: string;
}

export interface MessagePart {
  type: string;
  text?: string;
  [key: string]: any;
}

// Constants
const TOOL_PREFIX = "tool-";

// Helper function to extract tool name from tool type
const getToolNameFromType = (type: string): string | null => {
  if (type.startsWith(TOOL_PREFIX)) {
    return type.replace(TOOL_PREFIX, "");
  }
  return null;
};

export function useToolRenderer(
  sendMessage?: (message: any) => void,
  status?: ChatStatus
) {
  const renderTool = (parts: MessagePart[]): React.ReactNode | null => {
    // Look for tools with available output (priority)
    // First, prioritize get_hotel_details_with_rooms over search_hotels
    const priorityTools = [
      "get_hotel_details_with_rooms",
      "get_rooms_by_hotel_id",
    ];

    // Check for priority tools first
    for (const priorityTool of priorityTools) {
      for (const part of parts) {
        const toolName = getToolNameFromType(part.type);
        if (toolName) {
          const toolPart = part as ToolPart;

          if (toolName === priorityTool) {
            const toolConfig = TOOL_REGISTRY[toolName];

            if (
              toolConfig &&
              toolPart.state === "output-available" &&
              toolPart.output
            ) {
              try {
                const Component = toolConfig.component;
                const data = toolConfig.extractData(toolPart.output);

                // Render tool immediately without any delays
                return <Component {...data} sendMessage={sendMessage} />;
              } catch (error) {
                return <div>Error rendering tool: {toolName}</div>;
              }
            }
          }
        }
      }
    }

    // Then check for other tools
    for (const part of parts) {
      const toolName = getToolNameFromType(part.type);
      if (toolName) {
        const toolPart = part as ToolPart;
        const toolConfig = TOOL_REGISTRY[toolName];

        // Skip priority tools as they were already checked
        if (priorityTools.includes(toolName)) {
          continue;
        }

        if (
          toolConfig &&
          toolPart.state === "output-available" &&
          toolPart.output
        ) {
          try {
            const Component = toolConfig.component;
            const data = toolConfig.extractData(toolPart.output);

            // Render tool immediately without any delays
            return <Component {...data} sendMessage={sendMessage} />;
          } catch (error) {
            return <div>Error rendering tool: {toolName}</div>;
          }
        }
      }
    }

    // Look for tools in loading or error states
    for (const part of parts) {
      const toolName = getToolNameFromType(part.type);
      if (toolName) {
        const toolPart = part as ToolPart;
        const toolConfig = TOOL_REGISTRY[toolName];

        if (toolConfig) {
          switch (toolPart.state) {
            case "input-available":
              return <div>{toolConfig.loadingMessage}</div>;
            case "output-error":
              return <div>{toolConfig.errorMessage(toolPart.errorText)}</div>;
          }
        }
      }
    }

    return null;
  };

  // New function to render both text and tools
  const renderTextAndTools = (parts: MessagePart[]): React.ReactNode => {
    const textParts = parts.filter(
      (part) => part.type === "text" && part.text && part.text.trim()
    );
    const toolContent = renderTool(parts);

    // Render text first, then tools
    // Show tool content only after streaming is complete
    // This ensures tools render AFTER the text stream finishes
    return (
      <div className="space-y-2">
        {textParts.map((part, index) => (
          <Response key={`text-${index}`}>
            {escapeMarkdownChars(part.text || "")}
          </Response>
        ))}
        {toolContent}
      </div>
    );
  };

  // Check if there are any tools in the parts
  const hasTool = (parts: MessagePart[]): boolean => {
    return parts.some((part) => getToolNameFromType(part.type) !== null);
  };

  // Check if any tool in the message should show text along with it
  const shouldShowTextWithTool = (parts: MessagePart[]): boolean => {
    for (const part of parts) {
      const toolName = getToolNameFromType(part.type);
      if (toolName) {
        const toolConfig = TOOL_REGISTRY[toolName];

        if (toolConfig?.showTextWithTool) {
          return true;
        }
      }
    }
    return false;
  };

  // Smart render function that chooses the appropriate rendering strategy
  const renderContent = (parts: MessagePart[]): React.ReactNode => {
    if (hasTool(parts)) {
      // Always render text and tools together for better UX
      return renderTextAndTools(parts);
    }

    // Fallback to text content only, but only render if there's actual text content
    const textParts = parts
      .filter((part) => part.type === "text" && part.text && part.text.trim())
      .map((part, index) => (
        <Response key={`text-${index}`}>
          {escapeMarkdownChars(part.text || "")}
        </Response>
      ));

    // Return null if no content to prevent empty message containers
    return textParts.length > 0 ? textParts : null;
  };

  return {
    renderTool,
    renderTextAndTools,
    hasTool,
    shouldShowTextWithTool,
    renderContent,
  };
}
