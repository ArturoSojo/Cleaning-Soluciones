import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const rawImages = [
  "Imagen de WhatsApp 2025-08-31 a las 14.56.42_08ac4758.jpg",
  "Imagen de WhatsApp 2025-08-31 a las 14.56.45_04e8b15e.jpg",
  "Imagen de WhatsApp 2025-08-31 a las 14.56.45_419a05f7.jpg",
  "Imagen de WhatsApp 2025-08-31 a las 14.56.47_b558db1e.jpg",
  "Imagen de WhatsApp 2025-08-31 a las 14.56.48_403658fa.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.19_19dcb10e.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.19_657cba54.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.20_4a1c86a4.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.20_ad5050bb.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.20_e5c6242f.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.20_ff84928b.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.21_3f840c32.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.21_8c73171a.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.21_9e5e4621.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.22_365aee15.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.22_629d1935.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.22_c371f031.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.23_3d2168e0.jpg",
  "Imagen de WhatsApp 2025-09-01 a las 14.03.23_7189bb5f.jpg",
];

const galleryImages = rawImages.map((fileName, index) => ({
  src: encodeURI(`/images/${fileName}`),
  alt: `Resultado de limpieza ${index + 1}`,
  label: `Limpieza profesional #${index + 1}`,
}));

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Nuestro Trabajo
          </span>
          <h2 className="mt-4 text-4xl font-bold text-gray-800">
            Galería de Limpiezas Realizadas
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Cada espacio es tratado con atención al detalle para entregar resultados impecables.
            Descubre algunos de los proyectos que hemos realizado recientemente.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg bg-white"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
