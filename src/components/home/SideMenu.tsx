import { X } from "lucide-react";

const menuLinks = [
  { label: "HOME", target: "home" },
  { label: "NOSSO PORTFÓLIO", target: "portfolio" },
  { label: "COMO FUNCIONA", target: "como-funciona" },
  { label: "FAÇA SEU ORÇAMENTO", target: "orcamento" },
];

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function SideMenu({ open, onClose }: SideMenuProps) {
  const goTo = (target: string) => {
    onClose();
    // Pequeno atraso para o menu começar a fechar antes do scroll
    window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      {/* Overlay — fecha ao clicar fora */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/60 transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* Painel lateral */}
      <aside
        className={`fixed inset-y-0 right-0 z-[70] flex w-[350px] max-w-[92vw] flex-col bg-brand-black text-white transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/70">
            Menu
          </span>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-brand-black"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-4">
          {menuLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => goTo(link.target)}
              className="group flex items-center justify-between border-b border-white/10 py-4 text-left"
            >
              <span className="font-display text-lg font-bold uppercase tracking-wide text-white/90 transition-colors group-hover:text-white">
                {link.label}
              </span>
              <span className="h-px w-6 bg-white/20 transition-all duration-300 group-hover:w-10 group-hover:bg-brand-red" />
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
