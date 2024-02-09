import Navbar from "../Elements/Navbar";
import Chatbot from "../Layouts/ChatBot";

const ChatBotPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-slate-900 px-8">
        <Chatbot />
      </div>
    </div>
  );
};

export default ChatBotPage;
