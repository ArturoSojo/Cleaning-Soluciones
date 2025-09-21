import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { BenefitsSection } from "./components/benefits-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { ProcessSection } from "./components/process-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import {WhatsAppButton} from "./components/whatsappButton";

export default function App() {
  return (
    <div className="min-h-screen">

      <Navigation />
      <main>
     
        <div id="hero">
          <HeroSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="benefits">
          <BenefitsSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="process">
          <ProcessSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
         
      </main>
      <Footer />
        <WhatsAppButton />
    </div>
  );
}