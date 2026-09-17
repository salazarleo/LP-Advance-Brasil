/**
 * i18n desativado — este site é monolíngue em pt-BR.
 *
 * O import em main.tsx é mantido por compatibilidade com o contrato da plataforma,
 * mas nenhuma tradução é carregada, nenhum idioma é detectado e o atributo
 * lang="pt-BR" definido no index.html nunca é alterado em runtime.
 */
import i18n from "i18next";

export * from "./util";

export default i18n;
