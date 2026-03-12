import { motion } from "framer-motion";
import { Search, Shield, Wind, Brush, Droplets, Sparkles, Clock } from "lucide-react";

const steps = [
  { icon: Search, num: 1, title: "Identificação", desc: "Análise do tecido e das sujidades para escolher o tratamento adequado." },
  { icon: Shield, num: 2, title: "Preparação", desc: "Preparação e proteção do ambiente ao redor do sofá." },
  { icon: Wind, num: 3, title: "Aspiração", desc: "Aspiração profunda para retirada de sólidos, poeira e partículas." },
  { icon: Brush, num: 4, title: "Aplicação e Esfregação", desc: "Aplicação de produto com esfregação em escovas de cerdas macias para proteção das fibras." },
  { icon: Droplets, num: 5, title: "Enxágue e Extração", desc: "Enxágue e sucção com extratora para remoção de todos os resíduos." },
  { icon: Sparkles, num: 6, title: "Finalização", desc: "Aplicação de produto neutralizador e finalizador para proteção do tecido." },
  { icon: Clock, num: 7, title: "Secagem", desc: "Aguardar o tempo de secagem. Pronto! Seu sofá está renovado." },
];

interface HowItWorksSectionProps {
  onCTA: () => void;
}

const HowItWorksSection = ({ onCTA }: HowItWorksSectionProps) => (
  <section className="py-10 sm:py-14">
    <div className="section-container section-padding">
      <motion.div
        className="mx-auto mb-8 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-3 text-foreground">Como Funciona a Higienização</h2>
        <p className="mx-auto text-muted-foreground">
          Conheça o passo a passo do nosso processo profissional de higienização de sofá.
        </p>
      </motion.div>
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="relative flex items-start gap-4 rounded-2xl bg-card p-5 shadow-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0, delay: i * 0.06 }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                {s.num}
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <s.icon className="h-4 w-4 text-primary" />
                  <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
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

export default HowItWorksSection;
