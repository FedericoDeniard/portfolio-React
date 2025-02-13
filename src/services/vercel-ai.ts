import { CoreMessage, generateId, generateText, GenerateTextResult, ToolSet } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { KEYS } from "../config/keys";
import Prompts from "./SystemPrompt.json"

export const sendMessageToAI = async ({ messages }: { messages: CoreMessage[] }) => {
    const google = createGoogleGenerativeAI({ apiKey: KEYS.GEMINI_API_KEY });
    const model = google("gemini-1.5-flash");

    const response = await generateText({
        model,
        system: Prompts.SystemPrompt,
        messages: messages,
    })

    return response
}

export const getAIResponse = ({ response }: { response: GenerateTextResult<ToolSet, never> }) => {
    return response.text
}

export const createChat = () => {
    // TODO A cookie would be more secure
    let id = sessionStorage.getItem("ChatId");
    if (!id) {
        id = generateId();
        sessionStorage.setItem("ChatId", id);
    }
    return id;
}
