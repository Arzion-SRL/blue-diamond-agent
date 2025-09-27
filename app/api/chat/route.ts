import { UIMessage, convertToModelMessages, stepCountIs, streamText } from "ai";
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { TRAVEL_ASSISTANT_SYSTEM_PROMPT } from "@/lib/prompts";
import { fetchHotelChainByName } from "@/lib/api/chains";
import { createMCPService } from "@/lib/mcp";

const openRouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY || "",
});

const HOTEL_CHAIN_NAME = "Royalton";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[]; } = await req.json();
    const MCP_SERVER_URL = process.env.MCP_SERVER_URL || "";

    const mcpService = createMCPService(MCP_SERVER_URL);
    await mcpService.createClient();

    const mcpTools = await mcpService.getFilteredTools();

    const hotelChain = await fetchHotelChainByName(HOTEL_CHAIN_NAME);
    if (!hotelChain) {
      throw new Error(`Hotel chain "${HOTEL_CHAIN_NAME}" not found`);
    }
    const result = streamText({
      model: openRouter("openai/gpt-4.1-nano"),
      system: TRAVEL_ASSISTANT_SYSTEM_PROMPT(hotelChain),
      messages: convertToModelMessages(messages),
      maxOutputTokens: 1000,
      tools: { ...mcpTools },
      stopWhen: stepCountIs(5),
      onFinish: async () => {
        await mcpService.closeClient();
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message, error.stack);
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}
