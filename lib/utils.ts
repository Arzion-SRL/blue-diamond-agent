import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Escapes problematic characters in text to prevent them from being misinterpreted 
 * by markdown parsers while preserving intentional markdown formatting.
 * 
 * Currently escaped characters:
 * - $ (math delimiters)
 * 
 * This function can be easily extended to handle other problematic characters in the future.
 */
export function escapeMarkdownChars(text: string): string {
  return text
    // Escape dollar signs (math delimiters) that aren't already escaped
    .replace(/(?<!\\)\$/g, '\\$');

  // Add more character escaping here as needed:
  // .replace(/(?<!\\)</g, '\\<')     // HTML tags
  // .replace(/(?<!\\)>/g, '\\>')     // HTML tags
  // .replace(/(?<!\\)\[/g, '\\[')    // Link brackets
  // .replace(/(?<!\\)\]/g, '\\]')    // Link brackets
}
