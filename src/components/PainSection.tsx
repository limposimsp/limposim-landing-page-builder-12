import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const pains = [
  "Sofá com aparência suja e encardida",
  "Manchas que não saem com pano úmido",
  "Odor desagradável mesmo após ventilar",
  "Uso diário acumulando sujeira invisível",
  "Sensação de ambiente mal cuidado",
  "Desconforto ao receber visitas em casa",
];

const PainSection = () => (
  <section className="py-10 sm:py-14">
    <div className="section-container section-padding">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-3 text-foreground">Você Reconhece Alguma Dessas Situações?</h2>
        <p className="mx-auto mb-8 text-muted-foreground">
          O uso diário do sofá acumula sujeira, ácaros e odores que afetam seu conforto e a
          aparência da sua casa.
        </p>
      </motion.div>
      <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
        {pains.map((pain, i) => (
          <motion.div
            key={pain}
            className="flex items-start gap-3 rounded-2xl bg-card p-4 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0, delay: i * 0.06 }}
          >
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <span className="text-foreground">{pain}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
