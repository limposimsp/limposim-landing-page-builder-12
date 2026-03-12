import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { LOCATION } from "@/lib/config";

interface LocalFocusSectionProps {
  onCTA: () => void;
}

const LocalFocusSection = ({ onCTA }: LocalFocusSectionProps) => (
  <section className="py-16 sm:py-24">
    <div className="section-container section-padding">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary/10 px-4 py-2">
          <MapPin className="h-5 w-5 text-primary" />
          <span className="font-medium text-primary">Foco Local</span>
        </div>
        <h2 className="mb-4 text-foreground">
          Higienização de Sofá em {LOCATION.name} e Região
        </h2>
        <p className="mx-auto mb-8 text-muted-foreground">
          Atendemos {LOCATION.name} e bairros próximos com agilidade. Por estarmos na região,
          conseguimos oferecer atendimento rápido e sem custos extras de deslocamento. Solicite
          seu orçamento e descubra como é fácil ter o sofá limpo sem sair de casa.
        </p>
        <button
          onClick={onCTA}
          className="rounded-full bg-primary px-8 py-4 text-lg font-semibold uppercase tracking-wide text-primary-foreground shadow-cta transition-all duration-200 hover:scale-105 hover:shadow-cta-hover active:scale-95"
        >
          Pedir Orçamento Grátis
        </button>
      </motion.div>
    </div>
  </section>
);

export default LocalFocusSection;
