import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PainSection from "@/components/PainSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocalFocusSection from "@/components/LocalFocusSection";
import OtherServicesSection from "@/components/OtherServicesSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import SiteFooter from "@/components/SiteFooter";
import QuoteModal from "@/components/QuoteModal";
import { LOCATION } from "@/lib/config";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como funciona a higienização de sofá?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Utilizamos equipamentos profissionais de extração e injeção que aplicam produto específico no tecido e removem toda a sujeira, manchas e odores. O processo é feito no conforto da sua casa.",
      },
    },
    {
      "@type": "Question",
      name: `Vocês atendem em ${LOCATION.name}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Sim! Estamos localizados na região e atendemos ${LOCATION.name} e bairros próximos com agilidade, sem custos extras de deslocamento.`,
      },
    },
    {
      "@type": "Question",
      name: "Como solicitar um orçamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basta clicar no botão 'Pedir Orçamento Grátis', preencher o formulário rápido e você será redirecionado para nosso WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "O atendimento é realmente em domicílio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, 100%. Levamos todos os equipamentos e produtos necessários até a sua casa.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LimpoSim Higienização",
  image: "",
  telephone: "+55 11 94050-2665",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Brook Taylor, 814",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
    postalCode: "",
  },
  url: typeof window !== "undefined" ? window.location.href : "",
  sameAs: [LOCATION.instagram, LOCATION.facebook, LOCATION.gmb],
  areaServed: {
    "@type": "Place",
    name: `${LOCATION.name}, São Paulo`,
  },
  priceRange: "$$",
};

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <Helmet>
        <title>Higienização de Sofá em Itaquera | LimpoSim - Atendimento em Domicílio</title>
        <meta
          name="description"
          content="Higienização profissional de sofá em Itaquera com atendimento em domicílio. Elimine manchas e odores. Orçamento grátis pelo WhatsApp. LimpoSim Higienização."
        />
        <link rel="canonical" href={typeof window !== "undefined" ? window.location.href : ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SiteHeader onCTA={openModal} />
      <main>
        <HeroSection onCTA={openModal} />
        <TrustBar />
        <PainSection />
        <BenefitsSection />
        <HowItWorksSection onCTA={openModal} />
        <BeforeAfterSection />
        <AboutSection />
        <ReviewsSection />
        <LocalFocusSection onCTA={openModal} />
        <OtherServicesSection onCTA={openModal} />
        <FaqSection />
        <FinalCtaSection onCTA={openModal} />
      </main>
      <SiteFooter />
      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Index;
