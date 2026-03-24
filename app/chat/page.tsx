"use client";

import { useState } from "react";
import { FaPaperPlane, FaSmile } from "react-icons/fa";

type Message = {
  id: number;
  text: string;
  sender: "me" | "other";
  time: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey 👋 How are you?", sender: "other", time: "10:00 AM" },
    { id: 2, text: "I'm good! What about you?", sender: "me", time: "10:01 AM" },
    { id: 3, text: "Doing great 🚀", sender: "other", time: "10:02 AM" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">

      {/* ================= HEADER ================= */}
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-xs opacity-80">Online</p>
          </div>
        </div>
      </div>

      {/* ================= MESSAGES ================= */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow ${
                msg.sender === "me"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <span className="block text-[10px] mt-1 opacity-70 text-right">
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ================= INPUT SECTION ================= */}
      <div className="bg-white p-3 border-t flex items-center gap-3">
        <FaSmile className="text-gray-500 text-xl cursor-pointer" />

        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 bg-gray-100 rounded-full outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
