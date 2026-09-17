import { Instagram, MessageCircle } from "lucide-react";
import { ADDRESS, INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-black py-14 text-white">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <a href="#home" aria-label="Advance Brasil - voltar ao topo">
            <img
              src="/advance-logo.png"
              alt="Advance Brasil - Comunicação Visual"
              className="h-12 w-12 object-contain md:h-14 md:w-14"
            />
          </a>

          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Advance Brasil"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-brand-black"
            >
              <Instagram size={16} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp da Advance Brasil"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-brand-black"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="max-w-md text-sm font-light leading-relaxed text-white/60">{ADDRESS}</p>
          <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-light text-white/40">
              © 2026 Advance Brasil. Todos os direitos reservados.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-light text-white/40 transition-colors hover:text-white"
            >
              Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
