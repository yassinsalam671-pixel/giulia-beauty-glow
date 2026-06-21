import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import facialImg from "@/assets/facial.jpg";
import nailsImg from "@/assets/nails.jpg";
import bodyImg from "@/assets/body.jpg";
import browsImg from "@/assets/brows.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi e trattamenti — Beauty Center Giulia Brescia" },
      { name: "description", content: "Tutti i trattamenti del Beauty Center Giulia: viso, corpo, unghie e sopracciglia. Estetica professionale a Brescia." },
      { property: "og:title", content: "Servizi e trattamenti — Beauty Center Giulia" },
      { property: "og:description", content: "Trattamenti viso, corpo, unghie e sopracciglia a Brescia." },
      { property: "og:image", content: facialImg },
    ],
  }),
  component: ServiziPage,
});

const sections = [
  {
    title: "Trattamenti viso",
    img: facialImg,
    intro: "Protocolli su misura per restituire luminosità, idratazione ed elasticità alla pelle.",
    items: [
      { name: "Pulizia viso profonda", price: "€ 60", time: "60 min" },
      { name: "Trattamento idratante", price: "€ 70", time: "60 min" },
      { name: "Anti-age rigenerante", price: "€ 95", time: "75 min" },
      { name: "Peeling rinnovatore", price: "€ 80", time: "50 min" },
    ],
  },
  {
    title: "Trattamenti corpo",
    img: bodyImg,
    intro: "Massaggi e rituali pensati per rilassare, modellare e lasciarti rigenerata.",
    items: [
      { name: "Massaggio rilassante", price: "€ 65", time: "50 min" },
      { name: "Linfodrenante", price: "€ 75", time: "60 min" },
      { name: "Rituale sensoriale", price: "€ 110", time: "90 min" },
      { name: "Scrub corpo", price: "€ 55", time: "40 min" },
    ],
  },
  {
    title: "Unghie",
    img: nailsImg,
    intro: "Mani e piedi curati nel dettaglio, con finiture impeccabili.",
    items: [
      { name: "Manicure classica", price: "€ 25", time: "30 min" },
      { name: "Semipermanente", price: "€ 35", time: "45 min" },
      { name: "Ricostruzione gel", price: "€ 55", time: "90 min" },
      { name: "Pedicure estetica", price: "€ 40", time: "50 min" },
    ],
  },
  {
    title: "Sopracciglia & sguardo",
    img: browsImg,
    intro: "Design su misura per valorizzare ogni viso, con tecniche delicate e durature.",
    items: [
      { name: "Design sopracciglia", price: "€ 20", time: "20 min" },
      { name: "Tinta sopracciglia", price: "€ 18", time: "20 min" },
      { name: "Brow lamination", price: "€ 45", time: "45 min" },
      { name: "Laminazione ciglia", price: "€ 55", time: "60 min" },
    ],
  },
];

function ServiziPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-10 md:pt-16 pb-12">
        <Reveal>
          <span className="ornament-line ornament-line-before">Listino trattamenti</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl">
            Ogni trattamento, <em className="italic text-[var(--rose-deep)]">un piccolo rituale.</em>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Selezioniamo tecniche e prodotti professionali per offrirti risultati
            visibili in un'esperienza che ti rilassa dal primo istante.
          </p>
        </Reveal>
      </section>

      {sections.map((s, idx) => (
        <section key={s.title} className={`py-16 md:py-20 ${idx % 2 ? "bg-secondary/40" : ""}`}>
          <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal className={idx % 2 ? "md:order-2" : ""}>
              <div className="overflow-hidden rounded-3xl">
                <img src={s.img} alt={s.title} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <span className="ornament-line ornament-line-before">{`0${idx + 1}`}</span>
                <h2 className="mt-3 text-4xl md:text-5xl">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.intro}</p>
                <ul className="mt-8 divide-y divide-border/60 border-t border-border/60">
                  {s.items.map((it) => (
                    <li key={it.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-4">
                      <div className="min-w-0">
                        <p className="truncate text-base">{it.name}</p>
                        <p className="text-xs text-muted-foreground tracking-wide">{it.time}</p>
                      </div>
                      <span className="shrink-0 font-display text-lg text-[var(--rose-deep)]">{it.price}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contatti" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-[var(--rose-deep)] transition-colors">
                  Prenota questo rituale <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
