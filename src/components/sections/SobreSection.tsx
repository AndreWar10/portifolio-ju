import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/site";

const values = [
  { num: "01", label: "Comunicativa", desc: "Ideias claras, conversa aberta e escuta atenta" },
  { num: "02", label: "Criativa", desc: "Conceitos que viram imagens, campanhas e histórias" },
  { num: "03", label: "Comprometida", desc: "Cuidado com cada etapa, do briefing à entrega" },
  { num: "04", label: "Curiosa", desc: "Sempre aprendendo algo novo e aprimorando o olhar" },
];

const areas = [
  {
    title: "Design",
    text: "Design gráfico e direção de arte — transformar conceitos em imagens que comunicam.",
  },
  {
    title: "Conteúdo",
    text: "Criação de conteúdo e social media, com histórias que geram conexão.",
  },
  {
    title: "Branding",
    text: "Construção de marca e desenvolvimento de campanhas, unindo estratégia e estética.",
  },
];

const skills = [
  "Design gráfico",
  "Direção de arte",
  "Criação de conteúdo",
  "Social media",
  "Branding",
  "Campanhas",
  "Redação publicitária",
  "Fotografia",
  "Audiovisual",
];

export function SobreSection() {
  return (
    <section id="sobre" aria-labelledby="sobre-heading" className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-cream-dark py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-rose/[0.08] blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/[0.1] blur-[100px]" aria-hidden="true" />

      <div className="container-section">
        <SectionHeading headingId="sobre-heading" eyebrow="Quem sou" title="Sobre mim" description="Um pouco de quem sou e do que guia cada projeto." />

        <div className="mt-16 grid items-start gap-16 lg:mt-20 lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-span-2">
            <FadeIn delay={0.05}>
              <blockquote className="relative border-l-2 border-rose pl-6">
                <p className="font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.15] tracking-wide text-olive">
                  &ldquo;{siteConfig.aboutQuote}&rdquo;
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-10 whitespace-pre-line text-[15px] font-light leading-[1.85] text-ink/60 sm:text-base">{siteConfig.aboutText}</p>
            </FadeIn>

          </div>

          <div className="lg:col-span-3">
            <FadeIn delay={0.25} direction="right">
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                {areas.map((a) => (
                  <div key={a.title} className="rounded-xl bg-white px-6 py-7 shadow-[0_20px_60px_-15px_rgba(114,99,49,0.15)] ring-1 ring-gold/10">
                    <h3 className="font-display text-2xl tracking-wider text-rose">{a.title}</h3>
                    <p className="mt-3 text-[13px] font-light leading-relaxed text-ink/50">{a.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="mt-8 rounded-2xl bg-cream-dark/60 px-6 py-7 ring-1 ring-gold/8 sm:px-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">Competências</h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <li key={skill} className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-ink/70 ring-1 ring-gold/15">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="mt-8 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-olive-dark to-olive px-6 py-6 text-cream sm:px-8">
                <span className="font-display text-4xl text-gold-light">PP</span>
                <div>
                  <p className="text-sm font-semibold">Publicidade e Propaganda</p>
                  <p className="mt-0.5 text-[13px] font-light text-cream/60">{siteConfig.university}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {values.map((v) => (
                  <div key={v.label} className="flex gap-4">
                    <span className="font-display text-3xl text-rose/50">{v.num}</span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-olive">{v.label}</p>
                      <p className="mt-1 text-[13px] font-light leading-relaxed text-ink/40">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
