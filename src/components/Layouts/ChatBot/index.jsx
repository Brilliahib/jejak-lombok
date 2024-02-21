import React, { useState, useRef, useEffect } from "react";
import messagesData from "./messages.json";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
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
      setMessages([...messages, userMessage]);

      setIsBotTyping(true); // Set isBotTyping to true when sending a message
      setTimeout(() => {
        const botMessage = generateBotResponse(inputText);
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setIsBotTyping(false); // Set isBotTyping to false when bot has responded
      }, 1500);

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
    } else if (lowercaseInput.includes("lombok")) {
      botResponse = messagesData.lombok;
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
            className={`mb-2 gap-x-4 ${
              message.fromUser ? "justify-end" : "justify-start"
            } flex`}
          >
            <div className="flex flex-col">
              {" "}
              {/* Create a flex column for the message content */}
              <span
                className={`px-2 py-1 ${
                  message.fromUser
                    ? "bg-sky-700 text-white rounded-lg self-end"
                    : "bg-gray-300 text-gray-800 rounded-lg"
                }`}
              >
                {message.fromUser ? (
                  message.text
                ) : (
                  <TextAnimation text={message.text} />
                )}
              </span>
            </div>
          </div>
        ))}
        {isBotTyping && (
          <div className="flex justify-start mb-2">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span className="ml-2">Loli Bot is typing...</span>
          </div>
        )}
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
            className="px-4 py-2 font-semibold text-white bg-sky-700 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const TextAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 8);
    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

export default Chatbot;
