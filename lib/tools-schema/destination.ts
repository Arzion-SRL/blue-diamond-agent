import { z } from 'zod';

export const destinationSchemas = {
  'get_available_destinations': {
    inputSchema: z.object({
      hotel_chain_id: z.string().uuid().optional().describe('Optional UUID string to filter destinations by hotel chain'),
    }),
  },
} as const;
