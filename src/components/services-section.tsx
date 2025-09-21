import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Home, Building2, Sparkles, ShieldCheck, Clock, Star } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Limpieza de Casas",
    description: "Servicio completo de limpieza para tu hogar, incluyendo todas las habitaciones, cocina y baños.",
    features: ["Aspirado y trapeado", "Limpieza de baños", "Cocina completa", "Dormitorios y salas"]
  },
  {
    icon: Building2,
    title: "Limpieza de Apartamentos",
    description: "Especialistas en apartamentos de Orlando, adaptándonos a espacios más compactos.",
    features: ["Optimizado para espacios pequeños", "Limpieza eficiente", "Cuidado de muebles", "Organización incluida"]
  },
  {
    icon: Sparkles,
    title: "Limpieza Profunda",
    description: "Servicio intensivo que deja tu hogar completamente renovado y desinfectado.",
    features: ["Desinfección completa", "Limpieza de ventanas", "Electrodomésticos", "Áreas difíciles"]
  },
  {
    icon: ShieldCheck,
    title: "Limpieza Regular",
    description: "Mantén tu hogar siempre limpio con nuestro servicio de limpieza programada.",
    features: ["Horarios flexibles", "Personal capacitado", "Productos eco-friendly", "Garantía de calidad"]
  },
  {
    icon: Clock,
    title: "Limpieza Express",
    description: "Servicio rápido para emergencias o eventos especiales en el mismo día.",
    features: ["Disponibilidad rápida", "Equipos especializados", "Resultados garantizados", "Precios competitivos"]
  },
  {
    icon: Star,
    title: "Limpieza Post-Construcción",
    description: "Eliminamos todo el polvo y residuos después de remodelaciones o construcciones.",
    features: ["Remoción de escombros", "Limpieza especializada", "Equipos profesionales", "Resultado impecable"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios de limpieza profesional para satisfacer 
            todas tus necesidades en Orlando, FL.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}