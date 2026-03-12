import { motion } from "framer-motion";
import { LOCATION } from "@/lib/config";

interface FinalCtaSectionProps {
  onCTA: () => void;
}

const FinalCtaSection = ({ onCTA }: FinalCtaSectionProps) => (
  <section className="bg-primary py-14 sm:py-20">
    <div className="section-container section-padding">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
      >
        <h2 className="mb-3 text-primary-foreground">
          Seu Sofá Limpo e Renovado Ainda Esta Semana
        </h2>
        <p className="mx-auto mb-6 text-primary-foreground/80">
          Orçamento rápido, sem compromisso, direto pelo WhatsApp.
          Atendimento em domicílio em {LOCATION.name}.
        </p>
        <button
          onClick={onCTA}
          className="rounded-full bg-primary-foreground px-8 py-4 text-lg font-semibold uppercase tracking-wide text-primary shadow-cta transition-all duration-200 hover:scale-105 hover:shadow-cta-hover active:scale-95"
        >
          Pedir Orçamento Grátis
        </button>
      </motion.div>
    </div>
  </section>
);

export default FinalCtaSection;
