import { motion } from "framer-motion";
import { Sparkles, Home, Heart, Wrench, Clock, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Sparkles, title: "Aparência Renovada", desc: "Seu sofá com cara de novo, sem precisar trocar." },
  { icon: Heart, title: "Mais Conforto", desc: "Ambiente mais agradável para toda a família." },
  { icon: Home, title: "Casa Bem Cuidada", desc: "Impressione visitas com um lar limpo e acolhedor." },
  { icon: Wrench, title: "Atendimento em Domicílio", desc: "Vamos até você. Sem transportar o sofá." },
  { icon: Clock, title: "Praticidade Total", desc: "Processo rápido que se encaixa na sua rotina." },
  { icon: ShieldCheck, title: "Serviço Profissional", desc: "Equipamentos especializados e produtos adequados." },
];

const BenefitsSection = () => (
  <section className="bg-section-green-light py-10 sm:py-14">
    <div className="section-container section-padding">
      <motion.div
        className="mx-auto mb-8 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-3 text-foreground">Por Que Higienizar Seu Sofá?</h2>
        <p className="mx-auto text-muted-foreground">
          A higienização profissional vai além da limpeza superficial. Confira os benefícios:
        </p>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="rounded-2xl bg-card p-5 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0, delay: i * 0.06 }}
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <b.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-1 text-foreground">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
