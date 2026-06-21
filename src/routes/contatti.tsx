import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti e prenotazioni — Beauty Center Giulia Brescia" },
      { name: "description", content: "Prenota il tuo trattamento al Beauty Center Giulia. Via Trieste 14, Brescia. Telefono +39 030 123 4567." },
      { property: "og:title", content: "Contatti — Beauty Center Giulia" },
      { property: "og:description", content: "Prenota: Via Trieste 14, Brescia · +39 030 123 4567." },
    ],
  }),
  component: ContattiPage,
});

const ADDRESS = "Via Trieste 14, 25121 Brescia";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Beauty Center Giulia, " + ADDRESS)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

function ContattiPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-10 md:pt-16 pb-12">
        <Reveal>
          <span className="ornament-line ornament-line-before">Contatti</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl">
            Ti aspettiamo nel cuore <em className="italic text-[var(--rose-deep)]">di Brescia.</em>
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-20 grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="space-y-7">
            <ContactRow icon={MapPin} title="Indirizzo">
              {ADDRESS}
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="block mt-1 text-[var(--rose-deep)] hover:underline">
                Apri in Google Maps →
              </a>
            </ContactRow>
            <ContactRow icon={Phone} title="Telefono">
              <a href="tel:+390301234567" className="hover:text-[var(--rose-deep)]">+39 030 123 4567</a>
            </ContactRow>
            <ContactRow icon={Mail} title="Email">
              <a href="mailto:info@beautycentergiulia.it" className="hover:text-[var(--rose-deep)]">info@beautycentergiulia.it</a>
            </ContactRow>
            <ContactRow icon={Clock} title="Orari">
              Mar – Ven: 9.30 – 19.30
              <br />
              Sabato: 9.00 – 17.00
              <br />
              Dom & Lun: chiuso
            </ContactRow>
            <ContactRow icon={Instagram} title="Seguici">
              <a href="#" className="hover:text-[var(--rose-deep)]">@beautycenter.giulia</a>
            </ContactRow>
          </div>
        </Reveal>

        <Reveal className="md:col-span-3" delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent("Richiesta prenotazione");
              const body = encodeURIComponent(
                `Nome: ${data.get("name")}\nTelefono: ${data.get("phone")}\nTrattamento: ${data.get("service")}\n\nMessaggio:\n${data.get("message")}`,
              );
              window.location.href = `mailto:info@beautycentergiulia.it?subject=${subject}&body=${body}`;
            }}
            className="rounded-3xl bg-card border border-border/60 p-7 md:p-10 space-y-5"
          >
            <h2 className="text-3xl">Prenota un trattamento</h2>
            <p className="text-sm text-muted-foreground">Compila il form e ti ricontatteremo per confermare l'appuntamento.</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome" name="name" required />
              <Field label="Telefono" name="phone" type="tel" required />
            </div>
            <Field label="Trattamento di interesse" name="service" placeholder="Es. pulizia viso, manicure…" />
            <Field label="Messaggio" name="message" textarea />

            <button
              type="submit"
              className="w-full sm:w-auto rounded-full bg-primary px-8 py-3.5 text-sm tracking-wide text-primary-foreground hover:bg-[var(--rose-deep)] transition-colors"
            >
              Invia richiesta
            </button>
          </form>
        </Reveal>
      </section>

      <section className="pb-20">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-card">
              <iframe
                title="Mappa Beauty Center Giulia"
                src={MAPS_EMBED}
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-[var(--rose-deep)]">
        <Icon size={18} />
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--rose-deep)]">{title}</p>
        <div className="mt-1.5 text-foreground/90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
  required?: boolean;
}) {
  const baseCls =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--rose)] focus:border-transparent";
  return (
    <label className="block text-sm">
      <span className="text-foreground/80">
        {label}
        {required && <span className="text-[var(--rose-deep)]">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} required={required} rows={4} className={baseCls} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} required={required} className={baseCls} />
      )}
    </label>
  );
}
