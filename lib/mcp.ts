import { experimental_createMCPClient as createMCPClient } from "ai";
import { toolSchemas } from "@/lib/tools-schema";

export interface MCPClientConfig {
  serverUrl: string;
}

export class MCPService {
  private client: any = null;
  private config: MCPClientConfig;

  constructor(config: MCPClientConfig) {
    this.config = config;
  }

  /**
   * Create and configure the MCP client
   */
  async createClient() {
    if (!this.config.serverUrl) {
      throw new Error("MCP_SERVER_URL is required");
    }

    this.client = await createMCPClient({
      transport: {
        type: "sse",
        url: this.config.serverUrl,
      },
    });

    return this.client;
  }

  /**
   * Obtiene las herramientas MCP configuradas
   */
  async getTools() {
    if (!this.client) {
      await this.createClient();
    }

    const mcpTools = await this.client.tools({
      schemas: toolSchemas,
    });

    return mcpTools;
  }

  /**
   * Get the MCP tools excluding checkout_booking and search_hotels
   */
  async getFilteredTools() {
    const mcpTools = await this.getTools();
    const { checkout_booking, search_hotels, ...mcpToolWithoutCheckout } = mcpTools;

    return mcpToolWithoutCheckout;
  }

  /**
   * Close the MCP client connection
   */
  async closeClient() {
    if (this.client) {
      await this.client.close();
      this.client = null;
    }
  }

  /**
   * Check if the client is connected
   */
  isConnected(): boolean {
    return this.client !== null;
  }
}

/**
 * Utility function to create an instance of the MCP service
 */
export function createMCPService(serverUrl: string): MCPService {
  return new MCPService({ serverUrl });
}
