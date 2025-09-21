import { motion } from "motion/react";
import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Star } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Cleaning Soluciones LLC
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Tu empresa de confianza para servicios de limpieza profesional en Orlando, FL. 
              Comprometidos con la excelencia y tu satisfacción.
            </p>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-300">Calificación 4.9/5 estrellas</span>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Limpieza de Casas</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Limpieza de Apartamentos</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Limpieza Profunda</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Limpieza Regular</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Limpieza Express</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Post-Construcción</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+14077707272" className="hover:text-blue-400 transition-colors">
                  +1 (407) 770-7272
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:cleaningsolucioness@gmail.com" className="hover:text-blue-400 transition-colors">
                  cleaningsolucioness@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                <span>
                  2802 Silkwood Circle apt 326<br />
                  Orlando, FL 32818
                </span>
              </div>
            </div>
          </motion.div>

          {/* Areas & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Áreas de Servicio</h4>
            <ul className="space-y-2 text-gray-300 text-sm mb-6">
              <li>Orlando</li>
              <li>Winter Park</li>
              <li>Dr. Phillips</li>
              <li>Lake Nona</li>
              <li>College Park</li>
              <li>Downtown Orlando</li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-2">Horarios</h4>
            <div className="text-gray-300 text-sm">
              <p>Lun - Vie: 8:00 AM - 6:00 PM</p>
              <p>Sáb: 9:00 AM - 4:00 PM</p>
              <p>Dom: Por cita</p>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p>&copy; {currentYear} Cleaning Soluciones LLC. Todos los derechos reservados.</p>
            <div className="flex space-x-4">
              <span className="hover:text-blue-400 transition-colors cursor-pointer">Política de Privacidad</span>
              <span className="hover:text-blue-400 transition-colors cursor-pointer">Términos de Servicio</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs">Síguenos:</span>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Legal Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-gray-700"
        >
          <div className="text-xs text-gray-500 text-center space-y-2">
            <p>
              <strong>Licencia:</strong> Cleaning Soluciones LLC está debidamente licenciada y asegurada en el estado de Florida.
            </p>
            <p>
              <strong>Seguros:</strong> Contamos con seguro de responsabilidad civil y bonos para tu tranquilidad.
            </p>
            <p>
              <strong>Certificaciones:</strong> Personal capacitado en técnicas profesionales de limpieza y uso de productos eco-friendly.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}