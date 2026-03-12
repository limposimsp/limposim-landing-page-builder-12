import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-limposim.png";
import { LOCATION } from "@/lib/config";

const SiteFooter = () => (
  <footer className="border-t border-border bg-card">
    <div className="section-container section-padding py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <img src={logo} alt="LimpoSim Higienização" className="mb-4 h-12 w-12" />
          <p className="mb-4 text-sm text-muted-foreground max-w-sm">
            LimpoSim Higienização — serviço profissional de higienização de estofados com
            atendimento em domicílio em {LOCATION.name} e região.
          </p>
          <div className="space-y-2 text-sm text-foreground">
            <a href={LOCATION.phoneLink} className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4 text-primary" />
              {LOCATION.phone}
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{LOCATION.fullAddress}</span>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <a
              href={LOCATION.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={LOCATION.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={LOCATION.gmb}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Google Meu Negócio"
            >
              <MapPin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-card">
          <iframe
            src={LOCATION.mapEmbed}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização LimpoSim"
          />
        </div>
      </div>
    </div>
    <div className="border-t border-border py-4">
      <div className="section-container section-padding text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} LimpoSim Higienização. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default SiteFooter;
