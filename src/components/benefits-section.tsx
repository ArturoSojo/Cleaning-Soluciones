import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, Users, Award, Clock, Shield, Leaf } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  {
    icon: CheckCircle,
    title: "Quality Guarantee",
    description: "100% satisfaction guaranteed or we repeat the service at no additional cost.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "A skilled team with extensive experience and ongoing training in modern cleaning methods.",
  },
  {
    icon: Award,
    title: "5+ Years of Experience",
    description: "Trusted by families across Orlando thanks to years of consistent service.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your calendar to deliver convenience and reliability.",
  },
  {
    icon: Shield,
    title: "Licensed and Insured",
    description: "Comprehensive protection for your peace of mind and the safety of your home.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use safe cleaning solutions for your family, pets, and the planet.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why choose Cleaning Soluciones LLC?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We stand out thanks to our commitment to excellence, reliability, and the complete satisfaction of every client.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758273238698-c98a45a8df9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTg0OTM3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern apartment after professional cleaning"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />

              {/* Floating stats */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600 text-sm">Satisfaction</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-blue-600 rounded-2xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24h</div>
                  <div className="text-blue-100 text-sm">Response</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
