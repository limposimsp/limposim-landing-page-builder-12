import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import cleaningAction from "@/assets/cleaning-action.webp";
import { LOCATION } from "@/lib/config";

const AboutSection = () => (
  <section className="py-16 sm:py-24">
    <div className="section-container section-padding grid items-center gap-10 lg:grid-cols-2">
      <motion.img
        src={cleaningAction}
        alt="Equipe LimpoSim realizando higienização"
        className="w-full rounded-2xl object-cover shadow-card-hover"
        loading="lazy"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-4 text-foreground">Sobre a LimpoSim Higienização</h2>
        <p className="mb-4 text-muted-foreground">
          A LimpoSim é especializada em higienização de estofados com atendimento em domicílio
          em {LOCATION.name} e região. Utilizamos equipamentos profissionais e produtos adequados
          para devolver a aparência e o conforto do seu sofá.
        </p>
        <p className="mb-6 text-muted-foreground">
          Nosso processo é transparente: desde o orçamento pelo WhatsApp até a finalização do
          serviço na sua casa. Sem surpresas, sem complicação.
        </p>
        <div className="flex flex-col gap-3">
          {[
            "Atendimento profissional e pontual",
            "Processo claro e sem surpresas",
            "Cuidado com a casa do cliente",
            "Equipamentos especializados",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
