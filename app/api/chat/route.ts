import { UIMessage, convertToModelMessages, stepCountIs, streamText } from "ai";
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { experimental_createMCPClient as createMCPClient } from "ai";
import { TRAVEL_ASSISTANT_SYSTEM_PROMPT } from "@/lib/prompts";

const openRouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY || "",
});

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[]; } = await req.json();
    const MCP_SERVER_URL = process.env.MCP_SERVER_URL || "";

    const mcpClient = await createMCPClient({
      transport: {
        type: "sse",
        url: MCP_SERVER_URL,
      },
    });

    const mcpTools = await mcpClient.tools();
    const { checkout_booking, ...mcpToolWithoutCheckout } = mcpTools;


    const result = streamText({
      model: openRouter("openai/gpt-4.1-nano"),
      system: TRAVEL_ASSISTANT_SYSTEM_PROMPT,
      messages: convertToModelMessages(messages),
      maxOutputTokens: 1000,
      tools: { ...mcpToolWithoutCheckout },
      stopWhen: stepCountIs(5),
      onFinish: async () => {
        await mcpClient.close();
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
