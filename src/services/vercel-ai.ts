import { CoreMessage, generateId, generateText, GenerateTextResult, tool, ToolSet } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { KEYS } from "../config/keys";
import Prompts from "./SystemPrompt.json"
import { AiTools, AiToolsType } from "./tools";

export const sendMessageToAI = async ({ messages }: { messages: CoreMessage[] }): Promise<GenerateTextResult<AiToolsType, never>> => {
    const google = createGoogleGenerativeAI({ apiKey: KEYS.GEMINI_API_KEY });
    const model = google("gemini-1.5-flash");

    const response = await generateText({
        model,
        system: Prompts.SystemPrompt,
        messages: messages,
        maxSteps: 5,
        tools: AiTools,
    })
    return response
}

export const getAIResponse = ({ response }: { response: GenerateTextResult<AiToolsType, never> }) => {
    const text = response.text
    return text
}
