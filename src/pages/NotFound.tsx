import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="mb-4 font-display text-4xl font-extrabold text-brand-black">404</h1>
        <p className="mb-4 text-lg text-neutral-600">Página não encontrada.</p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-black"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
