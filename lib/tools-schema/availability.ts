import { z } from 'zod';

export const availabilitySchemas = {
  'search_availability': {
    inputSchema: z.object({
      check_in_date: z.string().describe('The check-in date in YYYY-MM-DD format'),
      check_out_date: z.string().describe('The check-out date in YYYY-MM-DD format'),
      guests: z.number().int().positive().describe('The number of guests to accommodate'),
      min_rooms: z.number().int().positive().describe('The minimum number of rooms required'),
      hotel_id: z.string().uuid().optional().describe('The ID of the specific hotel to search within'),
      room_id: z.string().uuid().optional().describe('The ID of the specific room type to search for'),
    }),
  },
  'get_room_calendar': {
    inputSchema: z.object({
      room_id: z.string().describe('The unique identifier of the room'),
      check_in_date: z.string().describe('The start date for the calendar in YYYY-MM-DD format'),
      check_out_date: z.string().describe('The end date for the calendar in YYYY-MM-DD format'),
    }),
  },
} as const;
