import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi siamo — Beauty Center Giulia Brescia" },
      { name: "description", content: "Scopri Giulia e la filosofia del Beauty Center: cura, ascolto e bellezza autentica nel centro di Brescia." },
      { property: "og:title", content: "Chi siamo — Beauty Center Giulia" },
      { property: "og:description", content: "La nostra storia e filosofia, nel cuore di Brescia." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: ChiSiamoPage,
});

function ChiSiamoPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-10 md:pt-16 pb-20 grid gap-12 md:grid-cols-2 md:items-center">
        <Reveal>
          <div>
            <span className="ornament-line ornament-line-before">La nostra storia</span>
            <h1 className="mt-4 font-display text-5xl md:text-6xl">
              Bellezza che <em className="italic text-[var(--rose-deep)]">ascolta.</em>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Il Beauty Center Giulia nasce nel 2014 dal desiderio di creare un
              luogo intimo dove le donne possano sentirsi davvero accolte. Niente
              fretta, niente pacchetti standard: solo trattamenti pensati per la
              tua pelle e per il tuo momento.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Giulia, fondatrice ed estetista qualificata, si forma costantemente
              presso le migliori scuole italiane di estetica per offrirti tecniche
              all'avanguardia con un tocco artigianale e umano.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img src={aboutImg} alt="Giulia, fondatrice del centro estetico" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-card border border-border rounded-2xl p-5 max-w-[220px] shadow-sm">
              <p className="font-display italic text-lg leading-snug">
                "La cura è il nostro linguaggio."
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--rose-deep)]">— Giulia</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl max-w-2xl">I nostri valori</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Ascolto", d: "Ogni trattamento inizia con una conversazione: capire prima di proporre." },
              { n: "02", t: "Qualità", d: "Lavoriamo con cosmetici professionali, cruelty-free e dermatologicamente testati." },
              { n: "03", t: "Riservatezza", d: "Pochi appuntamenti al giorno per garantirti un'esperienza esclusiva." },
            ].map((v, i) => (
              <Reveal key={v.n} delay={i * 110}>
                <div className="border-t border-border pt-6">
                  <span className="font-display text-3xl text-[var(--rose-deep)]">{v.n}</span>
                  <h3 className="mt-3 text-2xl">{v.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 md:px-10 py-20 text-center">
        <Reveal>
          <p className="font-display italic text-3xl md:text-4xl leading-snug">
            "Vogliamo che ogni donna esca dalla porta sentendosi un po' più
            sé stessa di quando è entrata."
          </p>
        </Reveal>
        <Reveal delay={120}>
          <Link to="/contatti" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground hover:bg-[var(--rose-deep)] transition-colors">
            Vieni a trovarci
          </Link>
        </Reveal>
      </section>
    </>
  );
}
