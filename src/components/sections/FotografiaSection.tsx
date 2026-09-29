"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { CaseStudyButton } from "@/components/CaseStudy";

const photos = Array.from({ length: 24 }, (_, i) => `foto-${String(i + 1).padStart(2, "0")}.jpg`);

export function FotografiaSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section
      id="fotografia"
      aria-labelledby="fotografia-heading"
      className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-gold/[0.06] blur-[150px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-rose/[0.08] blur-[120px]" aria-hidden="true" />

      <div className="container-section relative">
        <SectionHeading headingId="fotografia-heading"
          eyebrow="Registro visual"
          title="Fotografia"
          description="Ensaios fotográficos autorais — direção de arte, composição e pós-produção."
          light
          accent="gold"
        />
        <CaseStudyButton id="fotografia" title="Fotografia" tone="dark" className="mt-6" />

        <div className="mt-16 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:mt-20 lg:gap-4">
          {photos.map((filename, index) => (
            <FadeIn key={filename} delay={Math.min(index * 0.03, 0.4)}>
              <button
                type="button"
                onClick={() => setLightbox(index)}
                className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-lg bg-cream/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                aria-label={`Abrir foto ${index + 1}`}
              >
                <Image
                  src={`/images/fotografia/${filename}`}
                  alt={`Fotografia ${index + 1} — ensaio fotográfico de Juliana`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizar foto"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream/70 transition-colors hover:bg-cream/20 hover:text-cream"
            aria-label="Fechar"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}
            className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream/70 transition-colors hover:bg-cream/20 hover:text-cream sm:left-6"
            aria-label="Foto anterior"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="relative max-h-[85vh] max-w-[90vw] sm:max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/fotografia/${photos[lightbox]}`}
              alt={`Fotografia ${lightbox + 1}`}
              width={1200}
              height={1600}
              className="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl"
              sizes="90vw"
              priority
            />
            <p className="mt-3 text-center text-xs font-medium text-cream/30">
              {lightbox + 1} / {photos.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
            className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream/70 transition-colors hover:bg-cream/20 hover:text-cream sm:right-6"
            aria-label="Próxima foto"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
