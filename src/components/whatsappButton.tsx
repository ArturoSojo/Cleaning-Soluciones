import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton () {
  const handleClick = () => {
    window.open("https://wa.me/14077707272", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg hover:scale-105 transition-transform"
      style={{
        backgroundColor: "#25D366",
        padding: "12px",
      }}
      aria-label="Contactar por WhatsApp"
    >
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </button>
  );
};

export default WhatsAppButton;
