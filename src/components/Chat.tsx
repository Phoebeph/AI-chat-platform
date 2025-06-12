import * as React from "react";
import { LuBot, LuSendHorizontal } from "react-icons/lu";
import { useChatbot } from "../hooks/useChatbot";
// import Markdown from "react-markdown";

interface IChat {}

export const Chat: React.FunctionComponent<IChat> = () => {
  const [input, setInput] = React.useState("");
  const { messages, sendMessage } = useChatbot();
  const handleSend = () => {
    // e.preventDefault();
    if (input.trim()) {
      // sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-[80vh] bg-white">
      <h2 className="p-4 font-semibold text-lg text-center bg-blue-100 flex text-blue-800 justify-center gap-2">
        Nianrong Li's chatbot: ask me any questions about my resume{" "}
        <LuBot size={25}></LuBot>
      </h2>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs ${
              message.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 bg-gray-50">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleSend}
        ></input>
        <button
          onClick={handleSend}
          className="ml-2 p-2 text-white rounded-lg bg-blue-500 hover:bg-blue-700"
        >
          <LuSendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};
