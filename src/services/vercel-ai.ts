import { CoreMessage, generateId, generateText, GenerateTextResult, ToolSet } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { KEYS } from "../config/keys";

export const sendMessageToAI = async ({ messages }: { messages: CoreMessage[] }) => {
    const google = createGoogleGenerativeAI({ apiKey: KEYS.GEMINI_API_KEY });
    const model = google("gemini-1.5-flash");

    const response = await generateText({
        model,
        system: "You are a assistant that shows and answer questions about my projects. Recruiters are going to ask you questions about my projects. I'm a fullstack software developer looking for a job. You can get more information about my projects on the tools.",
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
