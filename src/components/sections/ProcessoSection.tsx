import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { processSteps } from "@/lib/site";

export function ProcessoSection() {
  return (
    <section id="processo" aria-labelledby="processo-heading" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-rose/[0.07] blur-[120px]" aria-hidden="true" />

      <div className="container-section relative">
        <SectionHeading headingId="processo-heading"
          eyebrow="Como eu trabalho"
          title="Processo de trabalho"
          description="Do briefing à entrega: as etapas que sigo para transformar um problema em comunicação."
        />

        <FadeIn delay={0.1}>
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step, index) => (
              <li key={step.title} className="relative flex h-full flex-col rounded-2xl bg-white px-6 py-7 shadow-[0_4px_30px_-8px_rgba(114,99,49,0.1)] ring-1 ring-gold/10">
                <span className="font-display text-5xl text-rose/40">0{index + 1}</span>
                <h3 className="mt-3 text-xl tracking-wider text-olive">{step.title}</h3>
                <p className="mt-2 text-[13px] font-light leading-relaxed text-ink/55">{step.text}</p>
              </li>
          ))}
        </ol>
        </FadeIn>
      </div>
    </section>
  );
}
