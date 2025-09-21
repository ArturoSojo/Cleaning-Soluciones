import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "María González",
    location: "Orlando, FL",
    rating: 5,
    comment: "Excelente servicio! Mi apartamento quedó impecable. El equipo es muy profesional y puntual. Definitivamente los recomiendo.",
    avatar: "MG"
  },
  {
    name: "Robert Johnson",
    location: "Downtown Orlando",
    rating: 5,
    comment: "I've been using Cleaning Soluciones for 6 months now. They're reliable, thorough, and my house always smells amazing after they're done.",
    avatar: "RJ"
  },
  {
    name: "Carmen Rivera",
    location: "Lake Nona",
    rating: 5,
    comment: "Después de una renovación, necesitaba una limpieza profunda. Hicieron un trabajo increíble eliminando todo el polvo y dejando mi casa perfecta.",
    avatar: "CR"
  },
  {
    name: "Mike Davis",
    location: "Winter Park",
    rating: 5,
    comment: "Professional team, fair prices, and outstanding results. They pay attention to every detail. I wouldn't trust anyone else with my home.",
    avatar: "MD"
  },
  {
    name: "Ana Morales",
    location: "Dr. Phillips",
    rating: 5,
    comment: "Como madre trabajadora, este servicio me ha cambiado la vida. Llego a casa y todo está perfecto. Vale cada centavo.",
    avatar: "AM"
  },
  {
    name: "David Thompson",
    location: "College Park",
    rating: 5,
    comment: "They use eco-friendly products which is important to me with kids and pets. Great service and peace of mind.",
    avatar: "DT"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación. 
            Lee las experiencias reales de familias en Orlando.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 text-blue-200"
                  >
                    <Quote className="w-8 h-8" />
                  </motion.div>
                  
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-blue-600 text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
            <span className="font-semibold">4.9/5 estrellas</span>
            <span className="mx-2">•</span>
            <span>100+ reseñas verificadas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}