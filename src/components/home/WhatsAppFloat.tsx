import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-105 md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <MessageCircle size={26} className="md:h-7 md:w-7" />
      <span className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap rounded-full bg-brand-black px-4 py-2 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
        Fale conosco
      </span>
    </a>
  );
}
