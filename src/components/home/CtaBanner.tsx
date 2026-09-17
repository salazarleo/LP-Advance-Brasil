import { WHATSAPP_URL } from "@/lib/constants";
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

        <Reveal variant="fade-up" delay={150} duration={800}>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/70">
            Conte para nós o que você precisa e descubra como podemos transformar sua ideia em
            comunicação visual.
          </p>
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
          <p className="mt-6 text-xs font-light uppercase tracking-[0.2em] text-white/50">
            Atendimento rápido pelo WhatsApp.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
