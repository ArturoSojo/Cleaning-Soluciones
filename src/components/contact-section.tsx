import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            ¿Listo para un hogar impecable? Contáctanos hoy y recibe tu cotización gratuita.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Solicita tu Cotización</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre Completo</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Teléfono</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                        placeholder="(407) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de Servicio</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white"
                    >
                      <option value="" disabled>Selecciona un servicio</option>
                      <option value="casa" className="text-gray-800">Limpieza de Casa</option>
                      <option value="apartamento" className="text-gray-800">Limpieza de Apartamento</option>
                      <option value="profunda" className="text-gray-800">Limpieza Profunda</option>
                      <option value="regular" className="text-gray-800">Limpieza Regular</option>
                      <option value="express" className="text-gray-800">Limpieza Express</option>
                      <option value="construccion" className="text-gray-800">Post-Construcción</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                      placeholder="Cuéntanos sobre tu proyecto o necesidades específicas..."
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3"
                    >
                      Enviar Solicitud
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <a href="tel:+14077707272" className="text-blue-200 hover:text-white transition-colors">
                      +1 (407) 770-7272
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:cleaningsolucioness@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                      cleaningsolucioness@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-blue-200">
                      2802 Silkwood Circle apt 326<br />
                      Orlando, FL 32818
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Horarios</p>
                    <p className="text-blue-200">
                      Lun - Vie: 8:00 AM - 6:00 PM<br />
                      Sáb: 9:00 AM - 4:00 PM<br />
                      Dom: Disponible por cita
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758272422155-d898efd14f81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwaG9tZSUyMGNsZWFufGVufDF8fHx8MTc1ODQ5MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cliente satisfecho en hogar limpio"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/30 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-2">¡Respuesta en 24 horas!</h4>
                  <p className="text-blue-100">Te contactaremos pronto con tu cotización</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}