import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

interface TransformationCase {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
  duration: string;
  focus: string;
  results: string[];
}

const transformations: TransformationCase[] = [
  {
    id: "kitchen",
    title: "Cocina Familiar",
    description:
      "Eliminamos grasa, residuos y olores persistentes para devolverle a la cocina un aspecto impecable y seguro para preparar alimentos.",
    before: "/images/kitchen-before.svg",
    after: "/images/kitchen-after.svg",
    duration: "3 h",
    focus: "Desengrasado profundo",
    results: [
      "Electrodomésticos desinfectados",
      "Superficies sin grasa ni manchas",
      "Organización de encimeras y utensilios",
    ],
  },
  {
    id: "bathroom",
    title: "Baño Principal",
    description:
      "Removimos sarro y hongos de azulejos y cristales, dejando un baño fresco y desinfectado listo para el uso diario.",
    before: "/images/bathroom-before.svg",
    after: "/images/bathroom-after.svg",
    duration: "2.5 h",
    focus: "Desinfección de superficies",
    results: [
      "Mamparas transparentes",
      "Azulejos brillantes",
      "Ambiente libre de humedad",
    ],
  },
  {
    id: "livingroom",
    title: "Sala de Estar",
    description:
      "Aspiramos, desinfectamos y organizamos cada rincón para lograr una sala acogedora, libre de polvo y lista para recibir visitas.",
    before: "/images/livingroom-before.svg",
    after: "/images/livingroom-after.svg",
    duration: "2 h",
    focus: "Cuidado de tapicería",
    results: [
      "Alfombra renovada",
      "Tapicería sin manchas",
      "Aroma fresco y agradable",
    ],
  },
];

export function BeforeAfterSection() {
  return (
    <section id="results" className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">Resultados Reales</Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Antes y Después de Nuestras Limpiezas
          </h2>
          <p className="text-lg text-gray-600">
            Cada transformación refleja la dedicación de nuestro equipo y el cuidado con el que tratamos cada espacio.
            Mueve el control para ver la diferencia completa.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          {transformations.map((item, index) => (
            <BeforeAfterCard key={item.id} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BeforeAfterCardProps {
  data: TransformationCase;
  index: number;
}

function BeforeAfterCard({ data, index }: BeforeAfterCardProps) {
  const [position, setPosition] = useState(55);
  const sliderId = `before-after-slider-${data.id}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col"
    >
      <div className="relative h-80">
        <ImageWithFallback
          src={data.before}
          alt={`Antes de la limpieza en ${data.title}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <ImageWithFallback
            src={data.after}
            alt={`Después de la limpieza en ${data.title}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="absolute inset-y-0"
          style={{ left: `${position}%` }}
        >
          <div className="h-full w-1 bg-white shadow-[0_0_20px_rgba(37,99,235,0.45)]" />
        </div>
        <div className="absolute top-4 left-4 bg-white/85 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
          Antes
        </div>
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Después
        </div>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 accent-blue-600 cursor-pointer"
          aria-label={`Comparar el antes y después de ${data.title}`}
        />
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
            {data.focus}
          </Badge>
          <Badge className="bg-blue-600 text-white border-blue-600">{data.duration}</Badge>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{data.title}</h3>
        <p className="text-gray-600 mb-6 flex-1">{data.description}</p>
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
            Resultados Destacados
          </p>
          <ul className="space-y-2 text-gray-700">
            {data.results.map((result) => (
              <li key={result} className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
