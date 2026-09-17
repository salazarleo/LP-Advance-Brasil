import Reveal from "./Reveal";
import Stagger from "./Stagger";

const etapas = [
  {
    numero: "01",
    titulo: "Atendimento",
    texto: "Entendemos sua necessidade, espaço e objetivo.",
  },
  {
    numero: "02",
    titulo: "Projeto",
    texto: "Desenvolvemos a solução visual adequada para sua marca.",
  },
  {
    numero: "03",
    titulo: "Produção",
    texto: "Transformamos o projeto em uma peça com qualidade e acabamento.",
  },
  {
    numero: "04",
    titulo: "Instalação",
    texto: "Realizamos a instalação para entregar o projeto completo.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-brand-light py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
        <Reveal variant="fade-up" duration={700}>
          <p className="kicker-line text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
            Processo
          </p>
        </Reveal>
        <Reveal variant="fade-up" delay={100} duration={800}>
          <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight text-brand-black md:text-4xl">
            Como funciona
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={200} duration={800}>
          <p className="mt-4 max-w-xl text-base font-light text-neutral-600">
            Do primeiro contato à instalação, cuidamos de cada etapa do seu projeto.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
          {etapas.map((etapa) => (
            <div key={etapa.numero} className="border-t border-black/10 pt-6">
              <span className="font-display text-5xl font-extrabold leading-none text-brand-red md:text-6xl">
                {etapa.numero}
              </span>
              <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-black">
                {etapa.titulo}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-neutral-600">
                {etapa.texto}
              </p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
