import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Replace this with your actual WhatsApp number in international format without + or 00
  // Example: 1234567890
  const phoneNumber = "1234567890"; 
  const message = "Hello! I have a question about your products.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us!
        {/* Tooltip Arrow */}
        <span className="absolute top-1/2 -right-1 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
      </span>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}} />
    </a>
  );
};

export default WhatsAppButton;
