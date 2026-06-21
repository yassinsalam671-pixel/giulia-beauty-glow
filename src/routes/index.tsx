import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Heart, Leaf, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import facialImg from "@/assets/facial.jpg";
import nailsImg from "@/assets/nails.jpg";
import bodyImg from "@/assets/body.jpg";
import browsImg from "@/assets/brows.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beauty Center Giulia — Centro estetico di lusso a Brescia" },
      { name: "description", content: "Trattamenti viso, corpo, unghie e sopracciglia in un ambiente elegante nel cuore di Brescia. Prenota il tuo momento di pura bellezza." },
      { property: "og:title", content: "Beauty Center Giulia — Centro estetico a Brescia" },
      { property: "og:description", content: "Trattamenti viso, corpo, unghie e sopracciglia. Brescia." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const services = [
  { title: "Viso", desc: "Pulizia profonda, peeling e trattamenti anti-età personalizzati.", img: facialImg },
  { title: "Corpo", desc: "Massaggi rilassanti, drenanti e rituali sensoriali.", img: bodyImg },
  { title: "Unghie", desc: "Manicure, pedicure e ricostruzione con finiture impeccabili.", img: nailsImg },
  { title: "Sopracciglia", desc: "Laminazione, design e tinta per uno sguardo definito.", img: browsImg },
];

const reviews = [
  { name: "Chiara M.", text: "Un'oasi di tranquillità. Giulia ha mani d'oro e un'attenzione ai dettagli rara. Esco sempre rigenerata.", rating: 5 },
  { name: "Federica L.", text: "Il miglior centro estetico di Brescia. Ambiente curatissimo, prodotti di qualità e personale gentile.", rating: 5 },
  { name: "Sara B.", text: "Mi affido a loro da due anni per viso e sopracciglia. Risultati sempre eccellenti.", rating: 5 },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Interno del centro estetico" width={1600} height={1200} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-32 md:pt-28 md:pb-40 min-h-[88vh] flex flex-col justify-center">
          <Reveal>
            <span className="ornament-line ornament-line-before">Brescia · dal 2014</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl md:leading-[1.02] text-foreground">
              La tua bellezza,
              <br />
              <em className="font-display italic text-[var(--rose-deep)]">curata con amore.</em>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
              Un rifugio raffinato dove ogni trattamento è un rituale. Affidati
              alle mani esperte di Giulia per scoprire la tua luce naturale.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contatti" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm tracking-wide text-primary-foreground hover:bg-[var(--rose-deep)] transition-colors">
                Prenota ora <ArrowRight size={16} />
              </Link>
              <Link to="/servizi" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 backdrop-blur px-7 py-3.5 text-sm tracking-wide text-foreground hover:bg-background transition-colors">
                Scopri i trattamenti
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Trattamenti su misura", text: "Ogni protocollo è studiato sulla base della tua pelle e dei tuoi obiettivi." },
            { icon: Leaf, title: "Cosmesi di qualità", text: "Selezioniamo brand professionali con ingredienti delicati ed efficaci." },
            { icon: Heart, title: "Esperienza intima", text: "Pochi appuntamenti al giorno, tempo dedicato solo a te." },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="flex flex-col items-start gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-[var(--rose-deep)]">
                  <v.icon size={20} />
                </span>
                <h3 className="text-2xl">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <Reveal>
              <div>
                <span className="ornament-line ornament-line-before">I nostri trattamenti</span>
                <h2 className="mt-4 text-4xl md:text-5xl">Rituali di bellezza</h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/servizi" className="text-sm tracking-wide text-[var(--rose-deep)] hover:underline">
                Vedi tutti i servizi →
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <article className="group overflow-hidden rounded-2xl bg-card border border-border/60">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="ornament-line ornament-line-before">Recensioni clienti</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Le parole di chi ci sceglie</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 110}>
              <figure className="h-full rounded-2xl border border-border/60 bg-card p-8 flex flex-col">
                <div className="flex gap-0.5 text-[var(--rose-deep)]">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 font-display italic text-xl leading-snug text-foreground/85">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 text-sm tracking-wide text-muted-foreground">— {r.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center">
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[var(--rose)] opacity-30 blur-3xl animate-float-slow" />
            <h2 className="font-display text-4xl md:text-5xl">Regalati un momento.</h2>
            <p className="mt-4 max-w-xl mx-auto text-primary-foreground/80">
              Prenota ora la tua prossima esperienza di bellezza al Beauty Center Giulia.
            </p>
            <Link to="/contatti" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm tracking-wide text-foreground hover:bg-accent transition-colors">
              Prenota il tuo trattamento <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
