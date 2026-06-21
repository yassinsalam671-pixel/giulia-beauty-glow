import { Link } from "@tanstack/react-router";
import { CalendarHeart } from "lucide-react";

export function MobileBookingBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border/60 bg-background/95 backdrop-blur-md px-4 py-3 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)]">
      <Link
        to="/contatti"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-medium tracking-wide text-primary-foreground"
      >
        <CalendarHeart size={18} />
        Prenota il tuo trattamento
      </Link>
    </div>
  );
}
