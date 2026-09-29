"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Lightbox, type LightboxImage } from "@/components/Lightbox";
import { CarouselShowcase } from "@/components/CarouselShowcase";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { CaseStudyButton } from "@/components/CaseStudy";
import { consorcioCarousel, personalProjects, type PersonalProject } from "@/lib/site";

function PersonalProjectCard({ project, index, onOpen, className = "", fade = true }: { project: PersonalProject; index: number; onOpen: () => void; className?: string; fade?: boolean }) {
  const [cover] = project.images;
  const wrapperClass = `h-full ${project.wide ? "sm:col-span-2" : ""} ${className}`;

  const card = (
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-cream/[0.06] ring-1 ring-cream/10 transition-all duration-500 hover:ring-rose/30">
        {cover && (
          <button
            type="button"
            onClick={onOpen}
            className={`relative block w-full cursor-zoom-in ${project.wide ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[4/5]"} overflow-hidden bg-cream/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold`}
            aria-label={`Ampliar ${project.title}`}
          >
            <Image
              src={cover}
              alt={`${project.title} — peça criada por Juliana`}
              fill
              className={`object-cover transition-transform duration-700 group-hover:scale-105 ${project.wide ? "object-center" : "object-top"}`}
              sizes={project.wide ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
            />
            <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-cream opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 8v6m-3-3h6m5 0a8 8 0 11-16 0 8 8 0 0116 0z" />
              </svg>
            </span>
          </button>
        )}
        <div className="flex flex-1 flex-col px-6 py-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">{project.context}</span>
          <h3 className="mt-2 text-2xl text-cream sm:text-3xl">{project.title}</h3>
          <p className="mt-3 text-sm font-light leading-relaxed text-cream/60">{project.description}</p>
          <CaseStudyButton id={project.id} title={project.title} tone="dark" className="mt-5" />
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-1.5 text-[13px] font-medium text-rose-light transition-colors hover:text-cream"
              aria-label={`${project.title} — abrir em nova aba`}
            >
              Ver projeto
              <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </article>
  );

  if (!fade) return <div className={wrapperClass}>{card}</div>;
  return <FadeIn delay={index * 0.1} className={wrapperClass}>{card}</FadeIn>;
}

function MobileSeriesCarousel({ projects, onOpen }: { projects: PersonalProject[]; onOpen: (project: PersonalProject) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[0] as HTMLElement | undefined;
    if (!slide) return;
    const step = slide.offsetWidth + 16;
    setActive(Math.min(Math.round(track.scrollLeft / step), projects.length - 1));
  };

  return (
    <FadeIn className="sm:hidden">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Peças da PASCOM"
      >
        {projects.map((project, index) => (
          <div key={project.id} className="w-[85%] shrink-0 snap-start">
            <PersonalProjectCard project={project} index={index} onOpen={() => onOpen(project)} fade={false} />
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-1.5" aria-hidden="true">
        {projects.map((p, i) => (
          <span key={p.id} className={`h-1 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-gold" : "w-2 bg-cream/25"}`} />
        ))}
      </div>
    </FadeIn>
  );
}

export function PessoaisSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const covers: LightboxImage[] = personalProjects
    .filter((p) => p.images.length > 0)
    .map((p) => ({ src: p.images[0], alt: `${p.title} — peça criada por Juliana`, caption: p.title }));
  const openProject = (project: PersonalProject) => setLightbox(covers.findIndex((c) => c.src === project.images[0]));
  const pascomProjects = personalProjects.filter((p) => p.series === "pascom");

  return (
    <section id="pessoais" aria-labelledby="pessoais-heading" className="relative overflow-hidden bg-gradient-to-br from-rose-dark/90 via-olive-dark to-ink py-24 text-cream sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute -right-20 top-10 h-[500px] w-[500px] rounded-full bg-rose/[0.15] blur-[150px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/[0.1] blur-[120px]" aria-hidden="true" />

      <div className="container-section relative">
        <div className="grid items-end gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <SectionHeading headingId="pessoais-heading"
              eyebrow="Por iniciativa própria"
              title="Trabalhos Pessoais"
              description="Além dos trabalhos acadêmicos, desenvolvi projetos pessoais relacionados à comunicação, ao design e à criação visual, por iniciativa própria e fora das atividades obrigatórias da graduação. Esses projetos demonstram competências desenvolvidas de forma autônoma e reforçam meu interesse genuíno em colocar em prática, fora da sala de aula, o que venho aprendendo no curso."
              light
              accent="rose"
            />
          </div>

          <FadeIn delay={0.15} className="lg:col-span-2">
            <div className="rounded-2xl bg-cream/[0.08] px-6 py-7 ring-1 ring-cream/10 backdrop-blur-sm sm:px-8">
              <span className="font-display text-4xl tracking-wider text-gold-light">PASCOM</span>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">Pastoral da Comunicação</p>
              <p className="mt-4 text-sm font-light leading-relaxed text-cream/70">
                Sou voluntária na Paróquia que participo, na pastoral PASCOM, criando as peças de divulgação das
                celebrações e eventos da comunidade.
              </p>
            </div>
          </FadeIn>
        </div>

        {personalProjects.length > 0 && (
          <>
          <FadeIn>
            <p className="mt-16 flex items-center gap-3 text-sm font-light text-cream/70 lg:mt-20">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Em todos os projetos a seguir, toda a parte de design — da concepção visual à execução da peça final — foi realizada por mim.
            </p>
          </FadeIn>
          {pascomProjects.length > 0 && (
            <div className="mt-8">
              <MobileSeriesCarousel projects={pascomProjects} onOpen={openProject} />
            </div>
          )}
          <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {personalProjects.map((project, index) => (
              <PersonalProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={() => openProject(project)}
                className={project.series ? "hidden sm:block" : ""}
              />
            ))}
          </div>
          </>
        )}

        <CarouselShowcase project={consorcioCarousel} />
      </div>

      {lightbox !== null && lightbox >= 0 && (
        <Lightbox images={covers} index={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
      )}
    </section>
  );
}
