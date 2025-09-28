import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              <img src="/cleaning.png" alt="Logo" className="w-10 h-10" />
            </div>
            <span className="text-xl font-bold text-gray-800">
              Cleaning Soluciones
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Services
            </a>
            <a
              href="#"
              onClick={() => scrollToSection("benefits")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Benefits
            </a>
            <a
              href="#"
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+14077707272" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">(407) 770-7272</span>
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-blue-100 bg-white"
          >
            <div className="py-4 space-y-4">
              <a
                href="#"
                onClick={() => scrollToSection("hero")}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => scrollToSection("services")}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Services
              </a>
              <a
                href="#"
                onClick={() => scrollToSection("benefits")}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Benefits
              </a>
              <a
                href="#"
                onClick={() => scrollToSection("testimonials")}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => scrollToSection("contact")}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Contact
              </a>
              <div className="px-4 py-2 space-y-3">
                <a href="tel:+14077707272" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-semibold">(407) 770-7272</span>
                </a>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Free Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
