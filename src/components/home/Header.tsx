import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";
import SideMenu from "./SideMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-brand-black/95 backdrop-blur transition-all duration-300 ${
          scrolled
            ? "border-b border-white/15 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]"
            : "border-b border-white/5"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 md:h-20 md:px-10">
          {/* Logo */}
          <a href="#home" aria-label="Advance Brasil - início" className="shrink-0">
            <img
              src="/advance-logo.png"
              alt="Advance Brasil - Comunicação Visual"
              className="h-10 w-10 object-contain md:h-12 md:w-12"
            />
          </a>

          {/* Ações */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Advance Brasil"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-brand-black sm:h-10 sm:w-10"
            >
              <Instagram size={16} className="sm:hidden" />
              <Instagram size={17} className="hidden sm:block" />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-red px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-brand-black sm:px-6 sm:py-3 sm:text-[11px] sm:tracking-[0.18em]"
            >
              <span className="hidden sm:inline">Solicite um orçamento</span>
              <span className="sm:hidden">Orçamento</span>
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-brand-black sm:h-10 sm:w-10"
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </header>

      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
