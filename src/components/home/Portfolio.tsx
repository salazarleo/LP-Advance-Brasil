import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { portfolioItems, PortfolioItem } from "@/data/portfolio";
import { PORTFOLIO_CATEGORIES } from "@/lib/constants";
import Reveal from "./Reveal";
import Stagger from "./Stagger";

export default function Portfolio() {
  const [active, setActive] = useState<string>("TODOS");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered = useMemo(
    () =>
      active === "TODOS"
        ? portfolioItems
        : portfolioItems.filter((item) => item.categoria === active),
    [active]
  );

  return (
    <section id="portfolio" className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
        <Reveal variant="fade-up" duration={700}>
          <p className="kicker-line text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
            Trabalhos
          </p>
        </Reveal>
        <Reveal variant="fade-up" delay={100} duration={800}>
          <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight text-brand-black md:text-4xl">
            Nosso Portfólio
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={200} duration={800}>
          <p className="mt-4 max-w-xl text-base font-light text-neutral-600">
            Projetos desenvolvidos para destacar marcas, espaços e negócios.
          </p>
        </Reveal>

        {/* Filtros */}
        <Reveal variant="fade-up" delay={300} duration={800}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                  active === cat
                    ? "border-brand-black bg-brand-black text-white"
                    : "border-black/15 bg-transparent text-neutral-500 hover:border-brand-black hover:text-brand-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {filtered.map((item) => (
            <button
              key={item.imagem}
              onClick={() => setSelected(item)}
              aria-label={`Ver ${item.titulo}`}
              className="group relative block overflow-hidden bg-brand-light text-left"
            >
              <img
                src={item.imagem}
                alt={`${item.titulo} — ${item.categoria}`}
                loading="lazy"
                className={`aspect-[4/3] w-full object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                  item.categoria === "TOTENS" ? "object-contain" : "object-cover"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
                  {item.categoria}
                </span>
                <p className="mt-1 font-display text-sm font-bold uppercase tracking-wide text-white md:text-base">
                  {item.titulo}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl overflow-hidden border-0 bg-brand-black p-0 text-white">
          {selected && (
            <>
              <DialogTitle className="sr-only">{selected.titulo}</DialogTitle>
              <img
                src={selected.imagem}
                alt={`${selected.titulo} — ${selected.categoria}`}
                className={`aspect-[4/3] max-h-[70vh] w-full object-center ${
                  selected.categoria === "TOTENS" ? "object-contain" : "object-cover"
                }`}
              />
              <div className="flex items-end justify-between gap-4 px-6 py-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-red">
                    {selected.categoria}
                  </span>
                  <p className="mt-1 font-display text-lg font-bold uppercase tracking-wide text-white">
                    {selected.titulo}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
