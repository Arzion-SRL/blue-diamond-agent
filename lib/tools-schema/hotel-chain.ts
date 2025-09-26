import { z } from 'zod';

export const hotelChainSchemas = {
  'get_hotel_chains': {
    inputSchema: z.object({
      skip: z.number().int().min(0).optional().describe('Number of records to skip for pagination. Defaults to 0'),
      limit: z.number().int().positive().optional().describe('Maximum number of records to return. Defaults to 100'),
    }),
  },
  'get_hotel_chain_by_id': {
    inputSchema: z.object({
      hotel_chain_id: z.string().describe('The unique identifier of the hotel chain'),
    }),
  },
  'get_hotels_by_chain': {
    inputSchema: z.object({
      hotel_chain_id: z.string().describe('The unique identifier of the hotel chain'),
      skip: z.number().int().min(0).optional().describe('Number of records to skip for pagination. Defaults to 0'),
      limit: z.number().int().positive().optional().describe('Maximum number of records to return. Defaults to 100'),
    }),
  },
} as const;
