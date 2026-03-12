import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LOCATION } from "@/lib/config";

const faqs = [
  {
    q: "Como funciona a higienização de sofá?",
    a: "Utilizamos equipamentos profissionais de extração e injeção que aplicam produto específico no tecido e removem toda a sujeira, manchas e odores. O processo é feito no conforto da sua casa.",
  },
  {
    q: `Vocês atendem em ${LOCATION.name}?`,
    a: `Sim! Estamos localizados na região e atendemos ${LOCATION.name} e bairros próximos com agilidade, sem custos extras de deslocamento.`,
  },
  {
    q: "Como solicitar um orçamento?",
    a: "Basta clicar no botão 'Pedir Orçamento Grátis', preencher o formulário rápido com seu nome e celular, e você será redirecionado para nosso WhatsApp para finalizar o orçamento.",
  },
  {
    q: "Quais tipos de sofá podem ser atendidos?",
    a: "Atendemos sofás de tecido (suede, veludo, linho, chenille e outros), sofás retráteis e reclináveis, sofás-cama e poltronas. Consulte-nos sobre materiais específicos.",
  },
  {
    q: "Quanto tempo leva o atendimento?",
    a: "O tempo varia conforme o tamanho e condição do sofá. Em média, o processo leva de 40 minutos a 1h30 para um sofá de 3 lugares.",
  },
  {
    q: "Em quanto tempo o sofá pode voltar a ser usado?",
    a: "Após a higienização, o sofá precisa de 4 a 8 horas para secar completamente, dependendo da ventilação do ambiente. Recomendamos deixar janelas abertas.",
  },
  {
    q: "Como funciona o redirecionamento para o WhatsApp?",
    a: "Ao preencher o formulário, seus dados são enviados automaticamente junto com uma mensagem para o nosso WhatsApp. Assim, nossa equipe já recebe suas informações para agilizar o orçamento.",
  },
  {
    q: "O atendimento é realmente em domicílio?",
    a: "Sim, 100%. Levamos todos os equipamentos e produtos necessários até a sua casa. Você não precisa transportar o sofá. É só agendar e aguardar a equipe.",
  },
];

const FaqSection = () => (
  <section className="py-10 sm:py-14">
    <div className="section-container section-padding">
      <motion.div
        className="mx-auto mb-8 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-3 text-foreground">Perguntas Frequentes</h2>
        <p className="mx-auto text-muted-foreground">
          Tire suas dúvidas sobre nosso serviço de higienização.
        </p>
      </motion.div>
      <motion.div
        className="mx-auto max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-2xl border-0 bg-card px-5 shadow-card"
            >
              <AccordionTrigger className="py-4 text-left font-medium text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;
