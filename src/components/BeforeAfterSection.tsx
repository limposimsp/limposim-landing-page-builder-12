import { motion } from "framer-motion";
import sofaAntes from "@/assets/sofa-antes.webp";
import sofaDepois from "@/assets/sofa-depois.webp";
import poltronaAntes from "@/assets/poltrona-antes.webp";
import poltronaDepois from "@/assets/poltrona-depois.webp";
import chaiseAntes from "@/assets/chaise-antes.webp";
import chaiseDepois from "@/assets/chaise-depois.webp";

const pairs = [
  { antes: sofaAntes, depois: sofaDepois, alt: "Sofá" },
  { antes: poltronaAntes, depois: poltronaDepois, alt: "Poltrona" },
  { antes: chaiseAntes, depois: chaiseDepois, alt: "Chaise" },
];

const BeforeAfterSection = () => (
  <section className="bg-section-green-light py-10 sm:py-14">
    <div className="section-container section-padding">
      <motion.div
        className="mx-auto mb-8 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-3 text-foreground">Resultados Reais</h2>
        <p className="mx-auto text-muted-foreground">
          Veja a diferença que a higienização profissional faz. Fotos reais dos nossos atendimentos.
        </p>
      </motion.div>
      <div className="grid gap-8">
        {pairs.map((pair, i) => (
          <motion.div
            key={pair.alt}
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0, delay: i * 0.1 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={pair.antes}
                alt={`${pair.alt} antes da higienização`}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <span className="absolute left-3 top-3 rounded-full bg-destructive px-3 py-1 text-xs font-semibold uppercase text-destructive-foreground">
                Antes
              </span>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={pair.depois}
                alt={`${pair.alt} depois da higienização`}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase text-primary-foreground">
                Depois
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
