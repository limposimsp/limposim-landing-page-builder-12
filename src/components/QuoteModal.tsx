import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { LOCATION } from "@/lib/config";
import {
  fireGoogleAdsConversion,
  pushDataLayerEvent,
  sendLeadToWebhook,
} from "@/lib/tracking";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim() || name.length > 100) errs.name = "Informe seu nome";
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10)
      errs.phone = "Informe um celular válido";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "E-mail inválido";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    pushDataLayerEvent("form_submit", {
      lead_name: name,
      lead_phone: phone,
      lead_email: email || undefined,
      location: LOCATION.name,
    });

    fireGoogleAdsConversion();

    await sendLeadToWebhook({
      name,
      phone,
      email,
      source: "form_submit",
    });

    setSubmitted(true);
  };

  const openWhatsApp = async () => {
    pushDataLayerEvent("whatsapp_click", {
      lead_name: name,
      lead_phone: phone,
      lead_email: email || undefined,
      location: LOCATION.name,
    });

    await sendLeadToWebhook({
      name,
      phone,
      email,
      source: "whatsapp_click",
    });

    window.open(LOCATION.whatsappLink(name, phone), "_blank");
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      setEmail("");
    }, 300);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      setEmail("");
      setErrors({});
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            className="relative w-full max-w-md rounded-3xl bg-card p-8 shadow-card-hover"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          >
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <>
                <h3 className="mb-1 text-foreground">Pedir Orçamento Grátis</h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  Preencha e fale direto com nossa equipe pelo WhatsApp.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value.slice(0, 100))}
                      className="w-full rounded-lg border-0 bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Celular com DDD"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.slice(0, 20))}
                      className="w-full rounded-lg border-0 bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-mail (opcional)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value.slice(0, 255))}
                      className="w-full rounded-lg border-0 bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-8 py-4 text-lg font-semibold uppercase tracking-wide text-primary-foreground shadow-cta transition-all duration-200 hover:scale-105 hover:shadow-cta-hover active:scale-95"
                  >
                    Enviar e Falar no WhatsApp
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center py-6 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-accent" />
                <h3 className="mb-2 text-foreground">Dados Recebidos!</h3>
                <p className="mb-6 text-muted-foreground">
                  Clique abaixo para finalizar seu orçamento pelo WhatsApp.
                </p>
                <button
                  onClick={openWhatsApp}
                  className="w-full rounded-full bg-accent px-8 py-4 text-lg font-semibold uppercase tracking-wide text-accent-foreground shadow-cta transition-all duration-200 hover:scale-105 hover:shadow-cta-hover active:scale-95"
                >
                  Falar no WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
