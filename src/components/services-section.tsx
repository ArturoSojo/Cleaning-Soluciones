import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Home, Building2, Sparkles, ShieldCheck, Clock, Star } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "House Cleaning",
    description: "Comprehensive cleaning for your home, covering every room, the kitchen, and each bathroom.",
    features: ["Vacuuming and mopping", "Bathroom sanitizing", "Complete kitchen care", "Bedrooms and living areas"],
  },
  {
    icon: Building2,
    title: "Apartment Cleaning",
    description: "Specialized care for Orlando apartments with solutions designed for compact spaces.",
    features: ["Tailored for smaller floor plans", "Efficient cleaning routines", "Furniture and surface care", "Organized finishing touches"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Detailed service that refreshes and disinfects your home from top to bottom.",
    features: ["Whole-home disinfection", "Interior window detailing", "Appliance cleaning", "Hard-to-reach areas"],
  },
  {
    icon: ShieldCheck,
    title: "Recurring Cleaning",
    description: "Keep your home consistently fresh with a schedule built around your lifestyle.",
    features: ["Flexible scheduling", "Trusted cleaning specialists", "Eco-friendly products", "Quality guarantee"],
  },
  {
    icon: Clock,
    title: "Express Cleaning",
    description: "Quick-turn service for same-day needs before events or surprise visits.",
    features: ["Rapid response", "Dedicated cleaning teams", "Reliable results", "Competitive pricing"],
  },
  {
    icon: Star,
    title: "Post-Construction Cleaning",
    description: "Remove dust and debris after renovations or new builds with precision.",
    features: ["Debris removal", "Specialized equipment", "Thorough surface care", "Move-in ready finish"],
  },
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a wide range of professional cleaning solutions tailored to every home in Orlando, FL.
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
