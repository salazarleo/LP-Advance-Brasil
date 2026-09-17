import { Check } from "lucide-react";
import Reveal from "./Reveal";

const destaques = [
  "ATENDIMENTO PERSONALIZADO",
  "QUALIDADE E ACABAMENTO",
  "PROJETOS SOB MEDIDA",
];

const compromissos = [
  "Atendimento personalizado para cada necessidade",
  "Materiais de qualidade e acabamento cuidadoso",
  "Compromisso com cada etapa do projeto",
  "Soluções sob medida para o seu espaço",
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-16 md:px-10">
        {/* Imagem */}
        <Reveal variant="fade-left" duration={900}>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-brand-red/40" aria-hidden="true" />
            <img
              src="/images/about-instalacao.jpg"
              alt="Instalação de comunicação visual em fachada comercial"
              loading="lazy"
              className="relative aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Texto */}
        <div>
          <Reveal variant="fade-up" duration={700}>
            <p className="kicker-line text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
              Quem somos?
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={100} duration={800}>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight text-brand-black md:text-4xl">
              Comunicação visual que valoriza sua marca
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={200} duration={800}>
            <p className="mt-6 text-base font-light leading-relaxed text-neutral-600">
              A Advance Brasil atua no desenvolvimento de soluções em comunicação visual,
              unindo qualidade, acabamento e atenção aos detalhes para transformar projetos em
              resultados que valorizam cada negócio.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={300} duration={800}>
            <ul className="mt-8 space-y-3">
              {compromissos.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-red/30">
                    <Check size={11} className="text-brand-red" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fade-up" delay={400} duration={800}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {destaques.map((d) => (
                <div key={d} className="border-t-2 border-brand-black pt-4">
                  <span className="font-display text-[11px] font-bold uppercase leading-snug tracking-wider text-brand-black">
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
