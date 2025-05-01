import React, { useState, useEffect, useRef } from "react";
import { X, MessageSquare } from "lucide-react";

const agents = [
  {
    name: "Muhammad Zakarya",
    role: "Head of Sales",
    phone: "+92348920661",
    image: "https://i.imgur.com/7k6x0Ga.png",
  },
  {
    name: "Zulqarnain",
    role: "Inventory Manager",
    phone: "+923177896472",
    image: "https://i.imgur.com/2D8x0Bj.png",
  },
  {
    name: "Al Sarih Organics",
    role: "Order Directly With Me!",
    phone: "+923040717083",
    image: "https://i.imgur.com/9BWaZpF.png",
  },
];

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bounce, setBounce] = useState(true);
  const panelRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setBounce(false), 4000); // stop bounce after 4s
    return () => clearTimeout(timer);
  }, []);

  const handleClickOutside = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const openChat = (phone) => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your products."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Panel */}
      <div
        ref={panelRef}
        className={`fixed bottom-24 right-4 w-[320px] z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-2xl rounded-2xl transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 animate-fade-in"
            : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        <div className="bg-gradient-to-r from-green-500 to-green-400 text-white rounded-t-2xl p-4 flex justify-between items-center">
          <h3 className="text-lg font-bold">Start a conversation!</h3>
          <button onClick={() => setIsOpen(false)} aria-label="Close">
            <X className="text-white w-5 h-5" />
          </button>
        </div>

        <div className="divide-y divide-gray-200">
          {agents.map((agent, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 cursor-pointer hover:bg-white/50 transition"
              onClick={() => openChat(agent.phone)}
            >
              <div className="relative w-14 h-14">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full rounded-full border"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="whatsapp"
                  className="w-5 h-5 absolute bottom-0 right-0 bg-white rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-600 text-sm">{agent.role}</p>
                <p className="text-black font-bold text-base">{agent.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500 py-3">
          Powered by <span className="font-medium">Al Sarih Organics</span>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp Panel"
        className={`fixed bottom-6 right-6 rounded-full p-4 z-50 shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-green-500 hover:bg-green-500 rotate-90"
            : `bg-green-500 hover:bg-green-600 ${
                bounce ? "animate-bounce" : ""
              }`
        }`}
      >
        {isOpen ? (
          <X className="text-white w-6 h-6 transition-transform duration-300" />
        ) : (
          <MessageSquare className="text-white w-6 h-6 transition-transform duration-300" />
        )}
      </button>
    </>
  );
};

export default WhatsAppButton;
