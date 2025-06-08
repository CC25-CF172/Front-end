import React, { useState } from "react";
import Navbar from "./pages/components/Navbar";

const suggestions = [
  "What is stunting?",
  "Best foods for infant growth",
  "Normal growth patterns",
  "Interventions for stunting risk",
];

// Komponen pesan
const ChatMessage = ({ sender, text, options, onOptionClick }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
      <div
        className={`max-w-md p-4 rounded-xl shadow-md ${
          isUser
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-800 border border-gray-200"
        }`}
      >
        <p className="whitespace-pre-wrap">{text}</p>
        {options?.length > 0 && (
          <div className="mt-2 space-y-1">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => onOptionClick(opt)}
                className="block text-left text-sm text-blue-600 hover:underline"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hello! I'm StuntGuard Assistant. I can help answer questions about child growth, nutrition, and stunting prevention. What would you like to know?`,
      options: [
        "What is stunting?",
        "Nutrition tips for infants",
        "Growth milestones",
      ],
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    const userMessage = { sender: "user", text: messageText };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch(
        "https://stuntguard-api.vercel.app/api/v1/chatbot",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: messageText }),
        }
      );
      const data = await response.json();

      const botMessage = {
        sender: "bot",
        text: data.reply || "Sorry, I couldn't understand that.",
        options: data.options || [],
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "An error occurred. Please try again later.",
        },
      ]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(input);
    setInput("");
  };

  const handleSuggestionClick = (suggestion) => {
    setInput("");
    sendMessage(suggestion);
  };

  return (
    <>
      <Navbar />
      {/* HeroSection */}
      <section className="bg-gradient-to-r from-sky-500 via-sky-600 to-green-400 py-14 px-4 font-sans">
        <div className="w-full flex justify-center items-center mb-6">
          <div className="max-w-4xl px-10 text-center">
            <h1 className="text-4xl font-bold mb-2 text-white">
              StuntGuard Assistant
            </h1>
            <p className="text-md text-white mb-2">
              Ask questions about child growth, nutrition, and stunting
              prevention. Get instant <br />
              guidance and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Area */}
      <div className="bg-white flex flex-col max-w-4xl mx-auto p-4 rounded-lg shadow-inner overflow-hidden mt-12">
        <div className="flex-1 overflow-y-auto space-y-2">
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              text={msg.text}
              options={msg.options}
              onOptionClick={handleSuggestionClick}
            />
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="flex mt-4 border-t pt-4 gap-2 bg-white"
        >
          <input
            type="text"
            placeholder="Type your question here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            type="submit"
            className="bg-sky-600 text-white px-4 rounded-lg hover:bg-sky-700"
          >
            Send
          </button>
        </form>

        {/* Suggestions */}
        <div className="mt-4 max-w-4xl text-left w-full">
          <p className="text-sm font-medium mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => handleSuggestionClick(s)}
                className="bg-gray-100 hover:bg-gray-200 text-sm px-3 py-1 rounded-full"
              >
                {s}
              </button>
            ))}
          </div>
          <p className="text-sm mt-4 text-gray-500 text-center">
            Note: This chatbot provides general information only and is not a
            substitute for professional medical advice.
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatbotPage;
