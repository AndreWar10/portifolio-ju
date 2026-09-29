"use client";

import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-cream/95 shadow-[0_4px_30px_rgba(42,38,24,0.06)] backdrop-blur-xl"
          : "bg-gradient-to-b from-ink/50 to-transparent"
      }`}
    >
      <div className="container-section flex items-center justify-between py-4 lg:py-5">
        <a href="#hero" className="group" aria-label={`${siteConfig.name} — voltar ao topo`}>
          <span className={`font-display text-3xl tracking-wider transition-colors duration-300 sm:text-4xl ${scrolled ? "text-olive" : "text-cream"}`}>
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                item.href === "#contato"
                  ? "ml-2 bg-rose text-cream shadow-[0_4px_16px_rgba(194,113,137,0.35)] hover:bg-rose-dark"
                  : scrolled
                  ? "text-ink/60 hover:bg-rose/8 hover:text-olive"
                  : "text-cream/80 hover:bg-cream/10 hover:text-cream"
              }`}
            >
              {item.label}
            </a>
          ))}
          {siteConfig.linkedin && (
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-2 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-olive/8 text-olive hover:bg-rose/10 hover:text-rose"
                : "bg-cream/10 text-cream/70 hover:bg-cream/15 hover:text-cream"
            }`}
            aria-label="LinkedIn (abre em nova aba)"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
          )}
        </nav>

        <MobileNav scrolled={scrolled} />
      </div>
    </header>
  );
}
