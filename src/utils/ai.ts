import { createServerFn } from "@tanstack/react-start";
import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";

import getTools from "./ai-tools";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

// Define possible return types
type RawResponseData = {
  error: string;
};

const SYSTEM_PROMPT = `You are an AI for a music store.

There are products available for purchase. You can recommend a product to the user.
You can get a list of products by using the getProducts tool.

You also have access to a fulfillment server that can be used to purchase products.
You can get a list of products by using the getInventory tool.
You can purchase a product by using the purchase tool.

After purchasing a product tell the customer they've made a great choice and their order will be processed soon and they will be playing their new guitar in no time.
`;

export const genAIResponse = createServerFn({ method: "POST", response: "raw" })
  .validator(
    (d: {
      messages: Array<Message>;
      systemPrompt?: { value: string; enabled: boolean };
    }) => d
  )
  .handler(async ({ data }) => {
    const messages = data.messages
      .filter(
        (msg) =>
          msg.content.trim() !== "" &&
          !msg.content.startsWith("Sorry, I encountered an error")
      )
      .map((msg) => ({
        role: msg.role,
        content: msg.content.trim(),
      }));

    try {
      // Use a timeout promise to prevent long-running requests
      const timeoutDuration = 9000; // 9 seconds to stay under Vercel's 10s limit
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("AI response generation timed out")), timeoutDuration);
      });

      // Get tools with error handling already built in
      const tools = await getTools();

      // Create the AI response stream with a timeout
      const aiResponsePromise = streamText({
        model: anthropic("claude-3-5-sonnet-latest"),
        messages,
        system: SYSTEM_PROMPT,
        maxSteps: 8, // Reduced from 20 to limit resource usage
        tools,
      });

      // Race the AI response against the timeout
      const result = await Promise.race([aiResponsePromise, timeoutPromise]);
      return result.toDataStreamResponse();
    } catch (error) {
      console.error("AI response generation error:", error);
      
      if (error instanceof Error) {
        // Handle specific error types
        if (error.message.includes("rate limit")) {
          return { error: "Rate limit exceeded. Please try again in a moment." } as RawResponseData;
        } else if (error.message.includes("timed out")) {
          return { error: "The AI took too long to respond. Please try a simpler question." } as RawResponseData;
        } else if (error.message.includes("EMFILE")) {
          return { error: "Server resource limit reached. Please try again later." } as RawResponseData;
        }
      }
      
      // Generic error fallback
      return {
        error: error instanceof Error ? error.message : "Failed to get AI response",
      } as RawResponseData;
    }
  });
