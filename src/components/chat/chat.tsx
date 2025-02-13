import { useTranslation } from "react-i18next";
import "./chat.css";
import { useState } from "react";
import { getAIResponse, sendMessageToAI } from "../../services/vercel-ai";
import { set } from "react-hook-form";
import { CoreMessage, CoreUserMessage } from "ai";
export const Chat = () => {
  const { t } = useTranslation();

  const [userMessage, setUserMessage] = useState<Message>();
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const [waitingResponse, setWaitingResponse] = useState<boolean>(false);

  type Message = {
    role: "user" | "assistant" | "system";
    content: string;
    time: Date | undefined;
  };

  const handleSetUserMessage = (message: string) => {
    setUserMessage({ role: "user", content: message, time: new Date() });
  };

  const handleSendUserMessage = async () => {
    if (userMessage) {
      setWaitingResponse(true);
      const updatedChatHistory = [
        ...chatHistory,
        { ...userMessage, time: new Date() },
      ];
      setChatHistory(updatedChatHistory);
      const messages: CoreMessage[] = updatedChatHistory.map((message) => {
        return {
          role: message.role,
          content: message.content,
        };
      });
      const response = await sendMessageToAI({
        messages: messages,
      });
      const message = getAIResponse({ response });
      setUserMessage({ role: "user", content: "", time: undefined });
      setChatHistory([
        ...updatedChatHistory,
        { role: "assistant", content: message, time: new Date() },
      ]);
      setWaitingResponse(false);
    }
  };

  return (
    <div className="chat-container">
      <h1>Chat</h1>
      <div className="chat">
        {chatHistory.map((message, index) => {
          return (
            <>
              <div className={`chat-message ${message.role}`} key={index}>
                <div className="chat-message-content">{message.content}</div>
                <div className="chat-message-time" key={`time-${index}`}>
                  {message.time && message.time.toLocaleTimeString()}
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="chat-inputs">
        <input
          type="text"
          className="chat-input"
          placeholder={t("BODY-REQUIRED")}
          value={userMessage?.content || ""}
          onChange={(e) => handleSetUserMessage(e.target.value)}
        ></input>
        <button
          className="chat-send"
          disabled={userMessage === undefined || waitingResponse}
          onClick={() => {
            handleSendUserMessage();
          }}
        >
          {t("SEND")}
        </button>
      </div>
    </div>
  );
};
