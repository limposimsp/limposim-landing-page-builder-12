import { motion } from "framer-motion";
import { Shield, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.png";
import { LOCATION } from "@/lib/config";

interface HeroSectionProps {
  onCTA: () => void;
}

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const HeroSection = ({ onCTA }: HeroSectionProps) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80 py-12 sm:py-16 lg:py-20">
    <div className="section-container section-padding grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <motion.div
        className="lg:col-span-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...spring, staggerChildren: 0.08 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm font-medium text-primary-foreground"
        >
          <MapPin className="h-4 w-4" />
          Atendimento em {LOCATION.name}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.08 }}
          className="mb-4 text-primary-foreground"
        >
          Higienização de Sofá em {LOCATION.name} com Atendimento em Domicílio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.16 }}
          className="mb-6 text-lg text-primary-foreground/85"
        >
          Elimine manchas, odores e a aparência de sofá encardido. Orçamento rápido e sem
          compromisso pelo WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.24 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={onCTA}
            className="rounded-full bg-primary-foreground px-8 py-4 text-lg font-semibold uppercase tracking-wide text-primary shadow-cta transition-all duration-200 hover:scale-105 hover:shadow-cta-hover active:scale-95"
          >
            Pedir Orçamento Grátis
          </button>
          <a
            href={LOCATION.phoneLink}
            className="flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-4 text-lg font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10"
          >
            <Phone className="h-5 w-5" />
            Ligar Agora
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...spring, delay: 0.32 }}
          className="mt-5 flex items-center gap-2 text-sm text-primary-foreground/75"
        >
          <Shield className="h-4 w-4" />
          Serviço profissional · Equipamentos especializados
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:col-span-7"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...spring, delay: 0.2 }}
      >
        <img
          src={heroImg}
          alt={`Profissional LimpoSim higienizando sofá em ${LOCATION.name}`}
          className="w-full rounded-2xl object-cover shadow-card-hover"
          loading="eager"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
