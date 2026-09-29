"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const reduced = useReducedMotion();

  const fade = reduced
    ? {}
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      <Image
        src="/images/capa.jpg"
        alt="Juliana sorrindo, com as mãos nos cabelos cacheados, blusa preta e colar dourado"
        fill
        priority
        quality={90}
        className="object-cover object-[47%_20%] lg:object-[50%_25%]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-rose/10 to-transparent" aria-hidden="true" />

      <div className="container-section relative z-10 pb-14 pt-40 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="max-w-2xl">
          <motion.div {...fade} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center gap-3">
            <div className="h-px w-8 bg-rose" aria-hidden="true" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-light sm:text-xs">
              {siteConfig.role}
            </p>
          </motion.div>

          <motion.h1
            {...fade}
            transition={{ duration: 0.8, delay: 0.4 }}
            id="hero-heading"
            className="mt-6 text-[clamp(4rem,12vw,9rem)] leading-[0.85] text-cream"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            {...fade}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-cream/75 text-balance sm:text-base"
          >
            {siteConfig.tagline}. Publicidade e Propaganda pela UNIFRAN — audiovisual,
            campanhas, fotografia e rádio.
          </motion.p>

          <motion.div
            {...fade}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-9 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
          >
            <a
              href="#sobre"
              className="group relative inline-flex h-[52px] items-center overflow-hidden rounded-full bg-rose px-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-cream shadow-[0_4px_24px_rgba(205,133,153,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(205,133,153,0.45)] sm:text-sm"
            >
              <span className="relative z-10">Sobre mim</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-dark to-rose opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="#audiovisual"
              className="inline-flex h-[52px] items-center rounded-full border-2 border-cream/25 px-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-cream/90 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold-light sm:text-sm"
            >
              Ver portfólio
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        {...(reduced ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 } })}
        transition={{ duration: 1, delay: 1.2 }}
        href="#sobre"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-gold/50 transition-colors hover:text-gold lg:flex"
        aria-label="Rolar para baixo"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.5em]">Scroll</span>
        <svg aria-hidden="true" className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
