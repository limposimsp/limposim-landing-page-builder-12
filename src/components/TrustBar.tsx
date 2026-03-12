import { motion } from "framer-motion";
import { Home, Clock, MapPin, Wrench, Sparkles } from "lucide-react";
import { LOCATION } from "@/lib/config";

const items = [
  { icon: Home, label: "Atendimento em Domicílio", desc: "Vamos até sua residência para execução do serviço" },
  { icon: Clock, label: "Orçamento Rápido", desc: "Orçamento pelo WhatsApp em poucos minutos" },
  { icon: MapPin, label: `Atendemos ${LOCATION.name}`, desc: `Atendemos no bairro de ${LOCATION.name} e região` },
  { icon: Wrench, label: "Serviço Profissional", desc: "Equipamentos profissionais e produtos certificados" },
  { icon: Sparkles, label: "Praticidade", desc: "Agenda flexível para não atrapalhar sua rotina" },
];

const TrustBar = () => (
  <section className="border-y border-border bg-section-green-light py-6 sm:py-8">
    <div className="section-container section-padding">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex flex-col items-center gap-2 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0, delay: i * 0.06 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">{item.label}</span>
            <span className="text-xs text-muted-foreground leading-tight">{item.desc}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
