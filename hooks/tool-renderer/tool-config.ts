import { Hotels } from "@/components/tool-render/hotel";
import { Rooms } from "@/components/tool-render/rooms";
import { Booking } from "@/components/tool-render/booking";
import { BookingDetails } from "@/components/tool-render/booking-details";
import { Destinations } from "@/components/tool-render/destinations";
import type { ToolConfig } from "./types";

// Available tools registry
export const TOOL_REGISTRY: Record<string, ToolConfig> = {
  get_available_destinations: {
    component: Destinations,
    loadingMessage: "Loading available destinations...",
    errorMessage: (error) =>
      `Error loading destinations: ${error || "Unknown error"}`,
    extractData: (output) => ({
      destinations: output?.structuredContent?.content || [],
    }),
    showTextWithTool: true,
  },

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
};

// Priority tools that should be rendered first
export const PRIORITY_TOOLS = [
  "get_hotel_details_with_rooms",
  "get_rooms_by_hotel_id",
] as const;

// Tool name constants for better maintainability
export const TOOL_NAMES = {
  GET_AVAILABLE_DESTINATIONS: "get_available_destinations",
  SEARCH_HOTELS: "search_hotels",
  GET_HOTELS_BY_CHAIN: "get_hotels_by_chain",
  GET_ROOMS_BY_HOTEL_ID: "get_rooms_by_hotel_id",
  GET_HOTEL_DETAILS_WITH_ROOMS: "get_hotel_details_with_rooms",
  CREATE_BOOKING: "create_booking",
  GET_BOOKING_DETAILS: "get_booking_details",
} as const;
