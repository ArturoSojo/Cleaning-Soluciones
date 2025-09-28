import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WhatsAppButton() {
  const whatsappNumber = "14077707272";
  const message = "Hello! I would love more information about your cleaning services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 2,
      }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -10, 10, -5, 0],
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact via WhatsApp"
    >
      <ImageWithFallback
        src="/whatsapp.png"
        alt="WhatsApp"
        className="w-10 h-10 group-hover:scale-110 transition-transform duration-200"
      />

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-400"
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none"
      >
        Chat with us!
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800" />
      </motion.div>
    </motion.button>
  );
}
