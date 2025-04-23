import { experimental_createMCPClient, tool } from "ai";
import { z } from "zod";

import { fetchGuitars } from "./apis";

const MCP_ORDER_SERVER_URL = import.meta.env.VITE_MCP_ORDER_SERVER_URL || "http://localhost:8081";

// Define the type for MCP client
interface MCPClient {
  tools: () => Promise<Record<string, any>>;
}

// Create a safer MCP client with timeout handling
const createMCPClientSafe = async (): Promise<MCPClient> => {
  try {
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error("MCP connection timeout")), 5000);
    });
    
    const clientPromise = experimental_createMCPClient({
      transport: {
        type: "sse",
        url: `${MCP_ORDER_SERVER_URL}/sse`,
      },
      name: "Order Service",
    });
    
    return await Promise.race([clientPromise, timeoutPromise]);
  } catch (error) {
    console.error("Failed to connect to MCP server:", error);
    // Return a fallback client with mock tools
    return {
      tools: () => Promise.resolve({}),
    };
  }
};

const mcpClient = await createMCPClientSafe();

const getProducts = tool({
  description: "Get all products from the database",
  parameters: z.object({}),
  execute: async () => await fetchGuitars(),
});

const recommendGuitar = tool({
  description: "Use this tool to recommend a guitar to the user",
  parameters: z.object({
    id: z.string().describe("The id of the guitar to recommend"),
  }),
});

export default async function getTools() {
  try {
    const tools = await mcpClient.tools();
    return {
      ...tools,
      getProducts,
      recommendGuitar,
    };
  } catch (error) {
    console.error("Failed to get MCP tools:", error);
    // Return only local tools when MCP connection fails
    return {
      getProducts,
      recommendGuitar,
    };
  }
}
