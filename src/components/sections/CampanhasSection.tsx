import { CanvaEmbed } from "@/components/CanvaEmbed";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { CaseStudyButton } from "@/components/CaseStudy";
import { institucionalProjects, conscientizacaoProjects, webProject, type Project } from "@/lib/site";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 0.08} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_30px_-8px_rgba(114,99,49,0.1)] ring-1 ring-gold/10 transition-all duration-500 hover:shadow-[0_8px_40px_-8px_rgba(205,133,153,0.15)] hover:ring-rose/20">
        <div className="relative border-b border-gold/8 px-6 py-6 sm:px-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose via-gold to-olive opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
          <h3 className="text-xl text-ink sm:text-2xl">{project.title}</h3>
          <p className="mt-2 text-sm font-light text-ink/45">{project.description}</p>
          <CaseStudyButton id={project.id} title={project.title} className="mt-4" />
        </div>
        <div className="flex-1 p-3 sm:p-5">
          {project.type === "canva" && <CanvaEmbed title={project.title} embedUrl={project.embedUrl!} viewUrl={project.url} />}
          {project.type === "youtube" && <YouTubeEmbed title={project.title} embedUrl={project.embedUrl!} watchUrl={project.url} />}
        </div>
      </article>
    </FadeIn>
  );
}

function WebsiteShowcase() {
  return (
    <FadeIn>
      <article className="group overflow-hidden rounded-2xl bg-gradient-to-br from-olive-dark via-olive to-ink ring-1 ring-cream/10 transition-all duration-500 hover:ring-gold/20">
        <div className="grid lg:grid-cols-5">
          <div className="flex flex-col justify-center px-8 py-10 sm:px-12 lg:col-span-2 lg:py-14">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-cream/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-light">
              <svg aria-hidden="true" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
              Desenvolvimento Web
            </span>
            <h3 className="mt-5 text-3xl text-cream sm:text-4xl">{webProject.title}</h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-cream/50">{webProject.description}</p>
            <CaseStudyButton id={webProject.id} title={webProject.title} tone="dark" className="mt-5" />
            <a
              href={webProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-cream px-7 text-[13px] font-semibold uppercase tracking-wider text-olive shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              aria-label="Serra da Canastra — visitar site"
            >
              Visitar site
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>

          <div className="relative lg:col-span-3">
            <div className="mx-4 mb-4 overflow-hidden rounded-xl bg-ink shadow-2xl ring-1 ring-cream/10 lg:my-6 lg:ml-0 lg:mr-6">
              <div className="flex items-center gap-1.5 border-b border-cream/8 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-cream/15" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-cream/15" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-cream/15" aria-hidden="true" />
                <span className="ml-3 flex-1 rounded-md bg-cream/8 px-3 py-1 text-[10px] text-cream/30">serra-da-canastra.vercel.app</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <iframe
                  src="https://serra-da-canastra.vercel.app/"
                  title="Preview — Serra da Canastra"
                  className="h-[200%] w-[200%] origin-top-left scale-50 border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

function CategoryGroup({ label, number, projects }: { label: string; number: string; projects: Project[] }) {
  return (
    <div>
      <FadeIn>
        <div className="mb-8 flex items-center gap-4">
          <span className="font-display text-5xl text-rose/50 sm:text-6xl">{number}</span>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">{label}</h3>
            <div className="mt-1.5 h-px w-16 bg-gradient-to-r from-rose/40 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </FadeIn>
      <div className="grid auto-rows-fr gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export function CampanhasSection() {
  return (
    <section id="campanhas" aria-labelledby="campanhas-heading" className="relative overflow-hidden bg-gradient-to-b from-cream-dark via-cream to-cream py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute -left-48 bottom-20 h-[500px] w-[500px] rounded-full bg-rose/[0.06] blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-32 h-[300px] w-[300px] rounded-full bg-gold/[0.08] blur-[80px]" aria-hidden="true" />

      <div className="container-section relative">
        <SectionHeading headingId="campanhas-heading" eyebrow="Estratégia & criação" title="Campanhas" description="Do conceito à execução — campanhas institucionais, de conscientização e projetos digitais." accent="gold" />

        <div className="mt-16 space-y-20 lg:mt-20">
          <CategoryGroup label="Institucional" number="01" projects={institucionalProjects} />
          <CategoryGroup label="Conscientização" number="02" projects={conscientizacaoProjects} />
          <WebsiteShowcase />
        </div>
      </div>
    </section>
  );
}
