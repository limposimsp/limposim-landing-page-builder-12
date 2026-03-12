import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Ana Paula M.", text: "Meu sofá ficou incrível! Parecia novo depois da higienização. Super recomendo.", rating: 5 },
  { name: "Carlos S.", text: "Atendimento rápido e profissional. Vieram no dia combinado e o resultado surpreendeu.", rating: 5 },
  { name: "Fernanda L.", text: "Tinha manchas que achei que nunca iam sair. A LimpoSim resolveu tudo! Excelente serviço.", rating: 5 },
  { name: "Roberto A.", text: "Muito prático. Pedi pelo WhatsApp e no mesmo dia já tinham agenda. Sofá ficou impecável.", rating: 5 },
  { name: "Mariana C.", text: "Equipe educada e cuidadosa. Protegeram todo o chão antes de começar. Nota 10!", rating: 5 },
  { name: "José R.", text: "Melhor investimento que fiz pra casa. O sofá tava encardido e voltou a ter cor original.", rating: 5 },
];

const ReviewsSection = () => (
  <section className="bg-secondary py-16 sm:py-24">
    <div className="section-container section-padding">
      <motion.div
        className="mx-auto mb-12 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-4 text-foreground">O Que Nossos Clientes Dizem</h2>
        <div className="mx-auto flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-muted-foreground">Avaliações reais de clientes atendidos</p>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            className="rounded-2xl bg-card p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0, delay: i * 0.06 }}
          >
            <div className="mb-3 flex gap-0.5">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mb-4 text-sm text-foreground leading-relaxed">"{r.text}"</p>
            <p className="text-sm font-medium text-muted-foreground">{r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
