import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl">You Beauty</span>
            <span className="font-display italic text-[var(--rose-deep)] text-xl">Lab</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Un laboratorio di bellezza nel cuore di Brescia. Trattamenti dedicati
            al tuo benessere, in un ambiente accogliente e raffinato.
          </p>
          <div className="mt-6 flex gap-3">
            <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-accent transition-colors">
              <Instagram size={16} />
            </a>
            <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-accent transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-[var(--rose-deep)]">Naviga</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[var(--rose-deep)]">Home</Link></li>
            <li><Link to="/servizi" className="hover:text-[var(--rose-deep)]">Servizi</Link></li>
            <li><Link to="/chi-siamo" className="hover:text-[var(--rose-deep)]">Chi siamo</Link></li>
            <li><Link to="/contatti" className="hover:text-[var(--rose-deep)]">Contatti</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-[var(--rose-deep)]">Contatti</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={15} className="mt-0.5 shrink-0" /> Brescia (BS)</li>
            <li className="flex gap-2"><Phone size={15} className="mt-0.5 shrink-0" /> +39 391 398 5198</li>
            <li className="flex gap-2"><Mail size={15} className="mt-0.5 shrink-0" /> info@youbeautylab.it</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-5 md:px-10 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} You Beauty Lab. Tutti i diritti riservati.</span>
          <span>Centro estetico · Brescia</span>
        </div>
      </div>
      {/* Mobile spacing for fixed booking banner */}
      <div className="h-20 md:hidden" aria-hidden />
    </footer>
  );
}
