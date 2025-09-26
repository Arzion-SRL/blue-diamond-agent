import { z } from 'zod';

export const bookingSchemas = {
  'get_booking_quote': {
    inputSchema: z.object({
      room_id: z.string().describe('The unique identifier of the room to quote'),
      check_in_date: z.string().describe('The check-in date in YYYY-MM-DD format'),
      check_out_date: z.string().describe('The check-out date in YYYY-MM-DD format'),
      guests: z.number().int().positive().describe('The number of guests for the booking'),
    }),
  },
  'create_booking': {
    inputSchema: z.object({
      hotel_id: z.string().describe('The unique identifier of the hotel'),
      room_id: z.string().describe('The unique identifier of the room'),
      check_in_date: z.string().describe('The check-in date in YYYY-MM-DD format'),
      check_out_date: z.string().describe('The check-out date in YYYY-MM-DD format'),
      guests: z.number().int().positive().describe('The number of guests for the booking'),
      status: z.string().optional().describe('Optional booking status'),
    }),
  },
  'checkout_booking': {
    inputSchema: z.object({
      booking_id: z.string().describe('The unique ID of the booking to confirm'),
      customer_email: z.string().email().describe('The email address of the customer'),
      customer_name: z.string().describe('The full name of the customer'),
    }),
  },
  'get_booking_details': {
    inputSchema: z.object({
      booking_id: z.string().describe('The unique identifier (UUID) of the booking to retrieve details for'),
    }),
  },
} as const;
