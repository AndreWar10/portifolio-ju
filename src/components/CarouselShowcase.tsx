"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";
import { Lightbox } from "./Lightbox";
import { CaseStudyButton } from "./CaseStudy";
import type { CarouselProject } from "@/lib/site";

export function CarouselShowcase({ project }: { project: CarouselProject }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const total = project.slides.length;

  const scrollToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    const first = (track.children[0] as HTMLElement).offsetLeft;
    track.scrollTo({ left: slide.offsetLeft - first, behavior: "smooth" });
  }, []);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const first = slides[0]?.offsetLeft ?? 0;
    let closest = 0;
    slides.forEach((slide, i) => {
      const distance = Math.abs(slide.offsetLeft - first - track.scrollLeft);
      if (distance < Math.abs(slides[closest].offsetLeft - first - track.scrollLeft)) closest = i;
    });
    setActive(closest);
  };

  const lightboxImages = project.slides.map((s, i) => ({ ...s, caption: `${project.title} — slide ${i + 1}` }));

  return (
    <>
    <FadeIn>
      <article className="mt-16 overflow-hidden rounded-2xl bg-cream/[0.06] ring-1 ring-cream/10 lg:mt-20">
        <div className="grid lg:grid-cols-3">
          <div className="flex flex-col justify-center px-6 py-8 sm:px-10 lg:py-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">{project.context}</span>
            <h3 className="mt-2 text-3xl text-cream sm:text-4xl">{project.title}</h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-cream/60">{project.description}</p>
            <CaseStudyButton id={project.id} title={project.title} tone="dark" className="mt-5" />

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSlide(Math.max(active - 1, 0))}
                disabled={active === 0}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream/80 transition-colors hover:bg-cream/20 hover:text-cream disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Slide anterior"
              >
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                type="button"
                onClick={() => scrollToSlide(Math.min(active + 1, total - 1))}
                disabled={active === total - 1}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream/80 transition-colors hover:bg-cream/20 hover:text-cream disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Próximo slide"
              >
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
              <span className="ml-2 text-xs font-medium tabular-nums text-cream/50" aria-live="polite">
                {active + 1} / {total}
              </span>
            </div>

            <div className="mt-5 flex gap-1.5" aria-hidden="true">
              {project.slides.map((s, i) => (
                <span key={s.src} className={`h-1 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-gold" : "w-2 bg-cream/20"}`} />
              ))}
            </div>
          </div>

          <div className="relative min-w-0 lg:col-span-2">
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-8 pt-2 [scrollbar-width:none] sm:px-10 lg:py-10 lg:pl-0 [&::-webkit-scrollbar]:hidden"
              role="region"
              aria-roledescription="carrossel"
              aria-label={project.title}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") { e.preventDefault(); scrollToSlide(Math.max(active - 1, 0)); }
                if (e.key === "ArrowRight") { e.preventDefault(); scrollToSlide(Math.min(active + 1, total - 1)); }
              }}
            >
              {project.slides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group relative aspect-[4/5] w-[78%] shrink-0 cursor-zoom-in snap-start overflow-hidden rounded-xl bg-cream/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] ring-1 ring-cream/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:w-[45%] lg:w-[42%]"
                  aria-label={`Ampliar ${slide.alt}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 28vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>
    </FadeIn>

    {lightbox !== null && (
      <Lightbox images={lightboxImages} index={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
    )}
    </>
  );
}
