import { WHATSAPP_URL } from "@/lib/constants";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-end overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-fachada.jpg"
          alt="Fachada comercial moderna com comunicação visual iluminada"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
      </div>

      {/* Conteúdo */}
      <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-16 pt-40 sm:px-6 md:pb-24 md:pt-48 md:px-10">
        <Reveal variant="fade-up" duration={700}>
          <p className="kicker-line text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Advance Brasil · Comunicação Visual
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={120} duration={800}>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Transformamos ideias em realidade
          </h1>
        </Reveal>

        <Reveal variant="fade-up" delay={240} duration={800}>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/80 md:text-lg">
            Projetos de comunicação visual sob medida que destacam sua marca, transmitem
            autoridade e valorizam o seu negócio.
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={360} duration={800}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-red px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-brand-black"
            >
              Solicite seu orçamento
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white hover:text-brand-black"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
