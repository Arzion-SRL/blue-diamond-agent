import { availabilitySchemas } from './availability';
import { bookingSchemas } from './booking';
import { destinationSchemas } from './destination';
import { hotelChainSchemas } from './hotel-chain';
import { hotelSchemas } from './hotel';
import { roomSchemas } from './room';

// Combine all tool schemas
export const toolSchemas = {
  ...availabilitySchemas,
  ...bookingSchemas,
  ...destinationSchemas,
  ...hotelChainSchemas,
  ...hotelSchemas,
  ...roomSchemas,
} as const;

// Type exports for TypeScript usage
export type ToolSchemas = typeof toolSchemas;
export type ToolName = keyof ToolSchemas;

// Helper function to get schema for a specific tool
export function getToolSchema(toolName: ToolName) {
  return toolSchemas[toolName];
}

// Helper function to validate tool input
export function validateToolInput(toolName: ToolName, input: unknown) {
  const schema = getToolSchema(toolName);
  return schema.inputSchema.parse(input);
}

// Helper function to safely validate tool input (returns result instead of throwing)
export function safeValidateToolInput(toolName: ToolName, input: unknown) {
  const schema = getToolSchema(toolName);
  return schema.inputSchema.safeParse(input);
}

// Export individual schema groups for specific use cases
export {
  availabilitySchemas,
  bookingSchemas,
  destinationSchemas,
  hotelChainSchemas,
  hotelSchemas,
  roomSchemas,
};
