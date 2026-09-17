import { Instagram, MapPin } from "lucide-react";
import {
  INSTAGRAM_URL,
  MAPS_URL,
  WHATSAPP_URL,
} from "@/lib/constants";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section id="orcamento" className="bg-brand-black py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 text-center sm:px-6 md:px-10">

        <Reveal variant="fade-up" duration={800}>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
            Seu projeto começa com uma ideia.
          </h2>
        </Reveal>

        <Reveal variant="fade-up" delay={300} duration={800}>
          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-red px-10 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-brand-black"
            >
              Solicitar orçamento
            </a>
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={400} duration={800}>
          <p className="mt-8 text-xs font-light uppercase tracking-[0.2em] text-white">
            Acompanhe nossos trabalhos no Instagram ou visite nosso endereço.
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={500} duration={800}>
          <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center justify-center gap-8 text-left sm:flex-row sm:gap-20">

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-white"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors group-hover:border-brand-red group-hover:bg-brand-red">
                <Instagram size={17} />
              </span>

              <span className="text-sm font-medium text-white/90">
                @advancebrasil_
              </span>
            </a>

            {/* Endereço */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-white"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors group-hover:border-brand-red group-hover:bg-brand-red">
                <MapPin size={17} />
              </span>

              <span className="max-w-sm text-sm font-medium leading-relaxed text-white/90">
                R. Palermo, 206 - Santa Isabel, Viamão - RS, 94480-775
              </span>
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}