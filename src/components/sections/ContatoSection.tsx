import { FadeIn } from "@/components/FadeIn";
import { contactCta, siteConfig } from "@/lib/site";

export function ContatoSection() {
  return (
    <section id="contato" aria-labelledby="contato-heading" className="relative overflow-hidden bg-gradient-to-br from-rose-dark via-rose to-rose-light py-24 text-cream sm:py-32">
      <div className="pointer-events-none absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-cream/[0.12] blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-olive/[0.25] blur-[120px]" aria-hidden="true" />

      <div className="container-section relative text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-cream/60" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/80 sm:text-xs">Contato</span>
            <div className="h-px w-8 bg-cream/60" aria-hidden="true" />
          </div>
          <h2 id="contato-heading" className="mt-4 text-[clamp(2.6rem,7vw,5rem)] leading-[0.95] text-cream">{contactCta.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-relaxed text-cream/90 sm:text-base">{contactCta.text}</p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-[52px] w-full max-w-xs items-center justify-center gap-2 rounded-full bg-cream px-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-rose-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                Enviar e-mail
              </a>
            )}
            {siteConfig.linkedin && (
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] w-full max-w-xs items-center justify-center gap-2 rounded-full border-2 border-cream/60 px-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10 sm:w-auto"
                aria-label="LinkedIn (abre em nova aba)"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn
              </a>
            )}
          </div>
          {siteConfig.email && <p className="mt-6 text-sm font-light text-cream/80">{siteConfig.email}</p>}
        </FadeIn>
      </div>
    </section>
  );
}
