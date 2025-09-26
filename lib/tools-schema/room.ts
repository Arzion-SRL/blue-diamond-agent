import { z } from 'zod';

export const roomSchemas = {
  'get_rooms_by_hotel_id': {
    inputSchema: z.object({
      hotel_id: z.string().uuid().describe('The unique UUID identifier of the hotel to get rooms for'),
    }),
  },
} as const;
