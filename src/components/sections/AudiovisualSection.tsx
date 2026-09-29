import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { CaseStudyButton } from "@/components/CaseStudy";
import { audiovisualProjects } from "@/lib/site";

export function AudiovisualSection() {
  return (
    <section id="audiovisual" aria-labelledby="audiovisual-heading" className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-olive-dark/50 via-transparent to-rose/5" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-rose/[0.06] blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-[400px] w-[400px] rounded-full bg-gold/[0.05] blur-[100px]" aria-hidden="true" />

      <div className="container-section relative">
        <SectionHeading headingId="audiovisual-heading" eyebrow="Portfólio" title="Audiovisual" description="Produções em vídeo que exploram narrativa, direção de arte e comunicação visual." light accent="gold" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-20">
          {audiovisualProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-cream/[0.06] to-cream/[0.02] ring-1 ring-cream/8 transition-all duration-500 hover:ring-gold/20">
                <div className="border-b border-cream/8 px-6 py-5">
                  <h3 className="text-lg text-cream sm:text-xl">{project.title}</h3>
                  <p className="mt-1.5 text-[13px] font-light text-cream/40">{project.description}</p>
                  <CaseStudyButton id={project.id} title={project.title} tone="dark" className="mt-4" />
                </div>
                <div className="flex-1 p-3">
                  <YouTubeEmbed title={project.title} embedUrl={project.embedUrl!} watchUrl={project.url} />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
