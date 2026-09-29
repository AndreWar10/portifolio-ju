import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { CaseStudyButton } from "@/components/CaseStudy";
import { highlights } from "@/lib/site";

export function DestaquesSection() {
  return (
    <section id="destaques" aria-labelledby="destaques-heading" className="relative overflow-hidden bg-gradient-to-b from-cream-dark to-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />

      <div className="container-section relative">
        <SectionHeading headingId="destaques-heading"
          eyebrow="Seleção"
          title="Projetos em destaque"
          description="Os trabalhos que melhor representam minha trajetória — do branding acadêmico ao design para marcas e comunidades."
          accent="gold"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {highlights.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_30px_-8px_rgba(114,99,49,0.12)] ring-1 ring-gold/10 transition-all duration-500 hover:shadow-[0_8px_40px_-8px_rgba(205,133,153,0.2)] hover:ring-rose/20">
                <a href={item.href} className="relative block aspect-[4/5] overflow-hidden bg-cream-dark" aria-label={`${item.title} — ver na seção do portfólio`}>
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 font-display text-4xl text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">0{index + 1}</span>
                </a>
                <div className="flex flex-1 flex-col px-6 py-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rose">{item.category}</span>
                  <h3 className="mt-2 text-2xl text-ink sm:text-3xl">{item.title}</h3>
                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-5">
                    <CaseStudyButton id={item.id} title={item.title} />
                    <a href={item.href} className="text-[13px] font-medium text-ink/50 transition-colors hover:text-rose">
                      Ver no portfólio →
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
