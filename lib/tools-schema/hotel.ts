import { z } from 'zod';

export const hotelSchemas = {
  'search_hotels': {
    inputSchema: z.object({
      country: z.string().optional().describe('The name of the country to filter hotels'),
      city: z.string().optional().describe('The name of the city to filter hotels. If both country and city are provided, the search will prioritize the city'),
    }),
  },
  'get_hotel_by_id': {
    inputSchema: z.object({
      hotel_id: z.string().describe('The unique identifier of the hotel'),
    }),
  },
  'get_hotel_details_with_rooms': {
    inputSchema: z.object({
      hotel_id: z.string().describe('The unique identifier of the hotel'),
    }),
  },
} as const;
