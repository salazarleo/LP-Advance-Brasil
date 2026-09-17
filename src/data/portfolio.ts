export type PortfolioItem = {
  categoria: 'TOTENS' | 'FACHADAS' | 'LETREIROS' | 'REVESTIMENTOS' | 'LUMINOSOS'
  titulo: string
  imagem: string
}

export const portfolioItems: PortfolioItem[] = [
  { categoria: 'TOTENS', titulo: 'Totem corporativo', imagem: '/images/portfolio/totem-01.jpg' },
  { categoria: 'TOTENS', titulo: 'Totem de identificação', imagem: '/images/portfolio/totem-02.jpg' },
  { categoria: 'FACHADAS', titulo: 'Fachada comercial', imagem: '/images/portfolio/fachada-01.jpg' },
  { categoria: 'FACHADAS', titulo: 'Fachada corporativa', imagem: '/images/portfolio/fachada-02.jpg' },
  { categoria: 'LETREIROS', titulo: 'Letreiro externo', imagem: '/images/portfolio/letreiro-01.jpg' },
  { categoria: 'LETREIROS', titulo: 'Letreiro em relevo', imagem: '/images/portfolio/letreiro-02.jpg' },
  { categoria: 'REVESTIMENTOS', titulo: 'Revestimento comercial', imagem: '/images/portfolio/revestimento-01.jpg' },
  { categoria: 'REVESTIMENTOS', titulo: 'Revestimento de fachada', imagem: '/images/portfolio/revestimento-02.jpg' },
  { categoria: 'LUMINOSOS', titulo: 'Comunicação luminosa', imagem: '/images/portfolio/luminoso-01.jpg' },
  { categoria: 'LUMINOSOS', titulo: 'Placa luminosa', imagem: '/images/portfolio/luminoso-02.jpg' },
]
