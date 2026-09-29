import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  /** id do <h2>, usado pelo aria-labelledby da seção */
  headingId?: string;
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  accent?: "rose" | "gold";
}

export function SectionHeading({
  headingId,
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  accent = "rose",
}: SectionHeadingProps) {
  const center = align === "center";
  const lineColor = accent === "rose" ? "bg-rose" : "bg-gold";

  return (
    <FadeIn>
      <div className={`flex flex-col ${center ? "items-center text-center" : ""}`}>
        <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <div className={`h-px w-8 ${lineColor}`} aria-hidden="true" />
          <span
            className={`text-[11px] font-semibold uppercase tracking-[0.3em] sm:text-xs ${
              light
                ? accent === "rose" ? "text-rose-light" : "text-gold-light"
                : accent === "rose" ? "text-rose" : "text-gold"
            }`}
          >
            {eyebrow}
          </span>
        </div>

        <h2
          id={headingId}
          className={`mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-[1] ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`mt-5 max-w-xl text-[15px] font-light leading-relaxed sm:text-base ${
              light ? "text-cream/60" : "text-ink/50"
            } ${center ? "mx-auto" : ""}`}
          >
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
