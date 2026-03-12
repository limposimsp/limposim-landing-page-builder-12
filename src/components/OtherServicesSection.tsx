import { motion } from "framer-motion";
import { Armchair, BedDouble, Sofa } from "lucide-react";

const services = [
  { icon: Armchair, title: "Higienização de Cadeiras Estofadas", desc: "Cadeiras de escritório, sala de jantar e mais." },
  { icon: Sofa, title: "Higienização de Poltronas", desc: "Poltronas de todos os tamanhos e tecidos." },
  { icon: BedDouble, title: "Higienização de Colchão", desc: "Elimine ácaros, manchas e odores do seu colchão." },
];

interface OtherServicesSectionProps {
  onCTA: () => void;
}

const OtherServicesSection = ({ onCTA }: OtherServicesSectionProps) => (
  <section className="bg-section-green-light py-10 sm:py-14">
    <div className="section-container section-padding">
      <motion.div
        className="mx-auto mb-8 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-3 text-foreground">Outros Serviços</h2>
        <p className="mx-auto text-muted-foreground">
          Além de sofás, também higienizamos outros estofados com o mesmo cuidado profissional.
        </p>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="cursor-pointer rounded-2xl bg-card p-5 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
            onClick={onCTA}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0, delay: i * 0.08 }}
          >
            <s.icon className="mb-3 h-8 w-8 text-primary" />
            <h3 className="mb-1 text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OtherServicesSection;
