import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL, MAPS_URL, WHATSAPP_PHONE, WHATSAPP_URL } from "@/lib/constants";
import Reveal from "./Reveal";
import Stagger from "./Stagger";

const contatos = [
  {
    icon: MessageCircle,
    label: "WHATSAPP",
    value: WHATSAPP_PHONE,
    href: WHATSAPP_URL,
  },
  {
    icon: Instagram,
    label: "INSTAGRAM",
    value: INSTAGRAM_HANDLE,
    href: INSTAGRAM_URL,
  },
  {
    icon: MapPin,
    label: "ENDEREÇO",
    value: ADDRESS,
    href: MAPS_URL,
  },
];

export default function Contato() {
  return (
    <section id="contato" className="bg-brand-light py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
        <Reveal variant="fade-up" duration={700}>
          <p className="kicker-line text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
            Contato
          </p>
        </Reveal>
        <Reveal variant="fade-up" delay={100} duration={800}>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold uppercase leading-tight text-brand-black md:text-4xl">
            Vamos conversar sobre seu projeto?
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={200} duration={800}>
          <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-neutral-600">
            Fale com a gente pelo WhatsApp, acompanhe nossos trabalhos no Instagram ou visite
            nosso endereço.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
          {contatos.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group block border border-black/10 bg-white p-7 transition-colors duration-300 hover:border-brand-black"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-black text-white transition-colors duration-300 group-hover:bg-brand-red">
                <c.icon size={18} />
              </span>
              <span className="mt-5 block text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gray">
                {c.label}
              </span>
              <span className="mt-2 block text-sm font-semibold leading-relaxed text-brand-black">
                {c.value}
              </span>
            </a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
