import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[50%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      <div className="container-section py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose font-display text-2xl text-cream" aria-hidden="true">J</span>
              <span className="font-display text-3xl tracking-wider">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-cream/35">
              {siteConfig.tagline}. Portfólio de Publicidade e Propaganda — UNIFRAN, Universidade de Franca.
            </p>
            <div className="mt-6 flex gap-4">
              {siteConfig.linkedin && (<a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/[0.06] text-cream/40 ring-1 ring-cream/8 transition-all duration-300 hover:bg-rose/20 hover:text-rose hover:ring-rose/30" aria-label="LinkedIn (abre em nova aba)">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>)}
              {siteConfig.email && (<a href={`mailto:${siteConfig.email}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/[0.06] text-cream/40 ring-1 ring-cream/8 transition-all duration-300 hover:bg-gold/20 hover:text-gold hover:ring-gold/30" aria-label="Enviar e-mail">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </a>)}
            </div>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Seções</h2>
            <ul className="mt-5 space-y-2.5">
              {navItems.map((item) => (<li key={item.href}><a href={item.href} className="text-sm font-light text-cream/35 transition-colors hover:text-cream">{item.label}</a></li>))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Contato</h2>
            <ul className="mt-5 space-y-2.5 text-sm font-light">
              {siteConfig.email && (<li><a href={`mailto:${siteConfig.email}`} className="text-cream/35 transition-colors hover:text-cream">{siteConfig.email}</a></li>)}
              {siteConfig.linkedin && (<li><a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream/35 transition-colors hover:text-cream" aria-label="LinkedIn (abre em nova aba)">{siteConfig.linkedinHandle}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/6 pt-8 sm:flex-row">
          <p className="text-xs font-light text-cream/20">© {year} {siteConfig.name}. Todos os direitos reservados.</p>
          <a href="#hero" className="flex items-center gap-2 text-xs text-cream/20 transition-colors hover:text-cream/40">
            Voltar ao topo
            <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
