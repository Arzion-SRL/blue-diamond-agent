import type { ChatStatus } from "ai";

// Base types for tools
export interface ToolConfig {
  component: React.ComponentType<any>;
  loadingMessage: string;
  errorMessage: (error?: string) => string;
  extractData: (output: any) => any;
  showTextWithTool?: boolean;
}

export interface ToolPart {
  type: string;
  toolName?: string;
  state?: "input-available" | "output-available" | "output-error";
  output?: any;
  errorText?: string;
}

export interface MessagePart {
  type: string;
  text?: string;
  [key: string]: any;
}

export interface ToolRendererHookProps {
  sendMessage?: (message: any) => void;
  status?: ChatStatus;
}

export type ToolState = "input-available" | "output-available" | "output-error";

export const TOOL_STATES = {
  INPUT_AVAILABLE: "input-available" as const,
  OUTPUT_AVAILABLE: "output-available" as const,
  OUTPUT_ERROR: "output-error" as const,
} as const;
