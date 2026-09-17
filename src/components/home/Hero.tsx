import { WHATSAPP_URL } from "@/lib/constants";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-brand-black text-white"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-fachada2.png"
          alt="Fachada comercial moderna com comunicação visual"
          className="h-full w-full object-cover object-[center_15%]"
        />

        {/* Escurecimento da imagem */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Escurecimento maior no lado esquerdo para melhorar a leitura */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-center px-4 pb-16 pt-28 sm:px-6 md:px-10">
        <div className="max-w-4xl">
          
          <Reveal variant="fade-up" duration={700}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              Advance Brasil · Comunicação Visual
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={120} duration={800}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.98] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Transformamos
              <br />
              ideias em realidade
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={240} duration={800}>
            <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-white/80 md:text-lg">
              Projetos de comunicação visual sob medida que destacam sua marca,
              transmitem autoridade e valorizam o seu negócio.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={360} duration={800}>
            <div className="mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-red px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-brand-black"
              >
                Solicite seu orçamento
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}