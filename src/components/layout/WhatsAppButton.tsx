
import React from "react";
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+923040717083";
  const message = "Hello! I'm interested in your products.";
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
