/**
 * Dados centrais da ADVANCE BRASIL.
 * Edite telefone, redes sociais, endereço e links aqui — tudo no site
 * (header, hero, CTA, contato, footer, WhatsApp flutuante) usa estas constantes.
 */

export const COMPANY_NAME = "Advance Brasil";

export const WHATSAPP_PHONE = "(51) 98652-8671";

export const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento com a Advance Brasil.";

export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=5551986528671&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const INSTAGRAM_URL = "https://www.instagram.com/advancebrasil_/";

export const INSTAGRAM_HANDLE = "@advancebrasil_";

export const ADDRESS = "R. Palermo, 206 - Santa Isabel, Viamão - RS, 94480-775";

export const MAPS_URL =
  "https://www.google.com/maps/place/Advance+Brasil+-+Fachadas+e+Portas/data=!4m2!3m1!1s0x0:0x1901efa84f523e24?sa=X&ved=1t:2428&hl=pt-BR&ictx=111";

/** Categorias exibidas nos filtros do portfólio. */
export const PORTFOLIO_CATEGORIES = [
  "TODOS",
  "TOTENS",
  "FACHADAS",
  "LETREIROS",
  "REVESTIMENTOS",
  "LUMINOSOS",
] as const;
