import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl md:text-[28px] tracking-tight text-foreground">
            You Beauty
          </span>
          <span className="font-display italic text-[var(--rose-deep)] text-xl md:text-2xl">
            Lab
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-[var(--rose-deep)] transition-colors"
              activeProps={{ className: "text-[var(--rose-deep)]" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contatti"
            className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground tracking-wide hover:bg-[var(--rose-deep)] transition-colors"
          >
            Prenota ora
          </Link>
        </nav>

        <button
          aria-label="Apri menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/85 border-b border-border/40 last:border-0"
                activeProps={{ className: "text-[var(--rose-deep)]" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
