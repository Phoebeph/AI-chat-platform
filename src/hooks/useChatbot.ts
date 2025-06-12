import React from "react";
import OpenAI from "openai";

interface Message {
  text: string;
  sender: "user" | "bot";
}

export const useChatbot = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);

  const openai = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: "sk-321ff98263154cada4b5a4e88dc3037c",
    dangerouslyAllowBrowser: true,
  });

  const sendMessage = async (input: string) => {
    const newMessages: Message[] = [
      ...messages,
      { text: input, sender: "user" },
    ];

    setMessages(newMessages);

    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: input }],
        model: "deepseek-chat",
      });
      const botMessage = response.choices[0]?.message.content;

      setMessages([...newMessages, { text: botMessage, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching AI response", error);
    }
  };

  return { messages, sendMessage };
};
