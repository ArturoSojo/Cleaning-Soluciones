import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Phone, Calendar, UserCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Contacto Inicial",
    description: "Llámanos o envía un mensaje. Te responderemos en menos de 24 horas con una cotización personalizada.",
    color: "from-blue-500 to-blue-600"
  },
  {
    step: "02",
    icon: Calendar,
    title: "Programación",
    description: "Coordinamos una fecha y hora que se adapte a tu horario. Somos flexibles con tus necesidades.",
    color: "from-blue-600 to-blue-700"
  },
  {
    step: "03",
    icon: UserCheck,
    title: "Evaluación",
    description: "Nuestro equipo evalúa tu espacio y confirma los detalles del servicio antes de comenzar.",
    color: "from-blue-700 to-blue-800"
  },
  {
    step: "04",
    icon: Sparkles,
    title: "Limpieza Profesional",
    description: "Ejecutamos el servicio con los más altos estándares de calidad usando productos profesionales.",
    color: "from-blue-800 to-blue-900"
  },
  {
    step: "05",
    icon: CheckCircle2,
    title: "Inspección Final",
    description: "Realizamos una inspección final contigo para asegurar tu completa satisfacción.",
    color: "from-green-600 to-green-700"
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y transparente que garantiza resultados excepcionales en cada servicio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758273705723-26ef454252ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHN1cHBsaWVzJTIwb3JnYW5pemVkfGVufDF8fHx8MTc1ODQ5MTAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Productos de limpieza organizados profesionalmente"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-green-500 rounded-2xl p-4 shadow-xl"
            >
              <CheckCircle2 className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`w-20 h-20 bg-gradient-to-br ${step.color} flex-shrink-0 flex items-center justify-center`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="p-6 flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-sm font-bold text-gray-400 mr-3">
                            {step.step}
                          </span>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ¿Listo para comenzar?
          </h3>
          <p className="text-gray-600 mb-6">
            Obtén tu cotización gratuita hoy mismo y descubre por qué somos la opción preferida en Orlando.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contactar Ahora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}