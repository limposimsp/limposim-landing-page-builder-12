import { motion } from "framer-motion";
import { ClipboardList, MessageSquare, Home, CheckCircle } from "lucide-react";
import { LOCATION } from "@/lib/config";

const steps = [
  { icon: ClipboardList, title: "Solicite seu Orçamento", desc: "Clique no botão e preencha o formulário rápido." },
  { icon: MessageSquare, title: "Fale com a Equipe", desc: "Você será redirecionado para nosso WhatsApp." },
  { icon: Home, title: `Receba em ${LOCATION.name}`, desc: "Vamos até sua casa no dia e horário combinados." },
  { icon: CheckCircle, title: "Sofá Renovado", desc: "Aproveite seu sofá limpo, sem manchas e sem odores." },
];

interface HowItWorksSectionProps {
  onCTA: () => void;
}

const HowItWorksSection = ({ onCTA }: HowItWorksSectionProps) => (
  <section className="py-16 sm:py-24">
    <div className="section-container section-padding">
      <motion.div
        className="mx-auto mb-12 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-4 text-foreground">Como Funciona</h2>
        <p className="mx-auto text-muted-foreground">
          Em 4 passos simples, seu sofá fica como novo.
        </p>
      </motion.div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            className="relative flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0, delay: i * 0.08 }}
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
              {i + 1}
            </div>
            <s.icon className="mb-3 h-6 w-6 text-primary" />
            <h3 className="mb-2 text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-12 text-center"
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
