import React, { useState, useRef, useEffect } from "react";
import messagesData from "./messages.json";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const userMessage = { text: inputText, fromUser: true };
      const botMessage = generateBotResponse(inputText);

      setMessages([...messages, userMessage, botMessage]);
      setInputText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const generateBotResponse = (userInput) => {
    const lowercaseInput = userInput.toLowerCase();
    let botResponse = "";

    if (
      lowercaseInput.includes("halo") ||
      lowercaseInput.includes("hai") ||
      lowercaseInput.includes("assalamualaikum")
    ) {
      botResponse = messagesData.greeting;
    } else if (
      lowercaseInput.includes("destinasi") ||
      lowercaseInput.includes("wisata")
    ) {
      botResponse = messagesData.destinasi;
    } else if (lowercaseInput.includes("makanan")) {
      botResponse = messagesData.makanan;
    } else if (
      lowercaseInput.includes("daki") ||
      lowercaseInput.includes("gunung")
    ) {
      botResponse = messagesData.gunung;
    } else if (lowercaseInput.includes("pantai")) {
      botResponse = messagesData.pantai;
    } else {
      botResponse = messagesData.default;
    }

    return { text: botResponse, fromUser: false };
  };

  return (
    <div className="flex flex-col col-chat">
      <div
        className="flex flex-col flex-grow p-4 bg-gray-100 border rounded-lg overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.fromUser ? "justify-end" : "justify-start"
            } flex`}
          >
            <span
              className={`px-2 py-1 ${
                message.fromUser
                  ? "bg-blue-500 text-white rounded-lg rounded-lg"
                  : "bg-gray-300 text-gray-800 rounded-lg rounded-lg"
              } flex`}
            >
              {message.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t fixed bottom-0 left-0 right-0 lg:mx-40 rounded-lg mt-48">
        <div className="flex">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="flex-grow px-3 py-2 mr-2 bg-white border rounded-lg"
            placeholder="Ketik pesan..."
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
