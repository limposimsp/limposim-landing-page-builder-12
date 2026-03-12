import { Phone, Instagram, Facebook, MapPin } from "lucide-react";
import logo from "@/assets/logo-limposim.png";
import { LOCATION } from "@/lib/config";

interface SiteHeaderProps {
  onCTA: () => void;
}

const SiteHeader = ({ onCTA }: SiteHeaderProps) => (
  <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-md">
    <div className="section-container section-padding flex h-16 items-center justify-between sm:h-20">
      <img src={logo} alt="LimpoSim Higienização" className="h-12 w-auto sm:h-16" />
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <a href={LOCATION.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
            <Instagram className="h-4 w-4" />
          </a>
          <a href={LOCATION.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
            <Facebook className="h-4 w-4" />
          </a>
          <a href={LOCATION.gmb} target="_blank" rel="noopener noreferrer" aria-label="Google Meu Negócio" className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
            <MapPin className="h-4 w-4" />
          </a>
        </div>
        <a
          href={LOCATION.phoneLink}
          className="flex items-center gap-1.5 text-sm font-medium text-foreground sm:text-base"
        >
          <Phone className="h-4 w-4 text-primary" />
          <span className="hidden sm:inline">{LOCATION.phone}</span>
        </a>
        <button
          onClick={onCTA}
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-cta transition-all duration-200 hover:scale-105 hover:shadow-cta-hover active:scale-95 sm:px-6 sm:py-2.5 sm:text-base"
        >
          Orçamento
        </button>
      </div>
    </div>
  </header>
);

export default SiteHeader;
