import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { CaseStudyButton } from "@/components/CaseStudy";
import { radioProject } from "@/lib/site";

const audioTracks = [
  { file: "JingleEditado2.mp4", title: "Jingle", icon: "🎵" },
  { file: "VinhetaEditada.mp4", title: "Vinheta", icon: "📻" },
  { file: "TeaserEditado.mp4", title: "Teaser", icon: "🎬" },
  { file: "TestemunhoEditado.mp4", title: "Testemunho", icon: "🎙️" },
  { file: "PatrocinioEditado.mp4", title: "Patrocínio", icon: "📢" },
  { file: "1.mp4", title: "Spot Publicitário", icon: "🔊" },
];

function AudioCard({ track, index }: { track: typeof audioTracks[number]; index: number }) {
  return (
    <FadeIn delay={index * 0.08}>
      <div className="group flex items-center gap-4 rounded-xl bg-cream/[0.06] px-5 py-4 ring-1 ring-cream/8 transition-all duration-300 hover:bg-cream/[0.1] hover:ring-gold/20">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-rose/20 to-gold/20 text-lg">
          {track.icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-cream">{track.title}</p>
          <audio
            controls
            preload="none"
            className="mt-2 h-8 w-full [&::-webkit-media-controls-enclosure]:rounded-lg [&::-webkit-media-controls-enclosure]:bg-cream/10 [&::-webkit-media-controls-panel]:bg-transparent"
          >
            <source src={`/audios/${track.file}`} type="video/mp4" />
            Seu navegador não suporta áudio.
          </audio>
        </div>
      </div>
    </FadeIn>
  );
}

export function RadioSection() {
  return (
    <section id="radio" aria-labelledby="radio-heading" className="relative overflow-hidden bg-gradient-to-br from-olive-dark via-olive to-ink py-24 text-cream sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-rose/[0.12] blur-[150px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-gold/[0.1] blur-[100px]" aria-hidden="true" />

      <div className="container-section relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading headingId="radio-heading" eyebrow="Áudio publicitário" title="Produção de Rádio" description="O podcast Crise dos 20 é um espaço para discutir as mudanças e desafios da vida na casa dos 20 anos — com leveza, acolhimento e muita identificação." light accent="rose" />
          </div>

          <FadeIn delay={0.2} direction="right">
            <div className="flex flex-col items-center rounded-3xl bg-cream p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] ring-1 ring-cream/20 sm:p-10">
              <Image
                src="/images/crise-dos-20.png"
                alt="Capa do podcast Crise dos 20"
                width={200}
                height={200}
                className="h-40 w-40 rounded-2xl object-contain shadow-lg sm:h-48 sm:w-48"
              />
              <h3 className="mt-6 font-display text-3xl text-olive sm:text-4xl">{radioProject.title}</h3>
                            <p className="mx-auto mt-4 max-w-xs text-center text-sm font-light leading-relaxed text-ink/45">
                Um espaço para rir, extravasar e se sentir acolhida na jornada dos 20 anos.
              </p>
              <a
                href={radioProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-[#1DB954] px-8 text-sm font-semibold text-white shadow-md shadow-[#1DB954]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1DB954]/30"
                aria-label={`${radioProject.title} — ouvir no Spotify em nova aba`}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.375-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
                Ouvir no Spotify
              </a>
              <CaseStudyButton id={radioProject.id} title={radioProject.title} className="mt-4" />
            </div>
          </FadeIn>
        </div>

        <div className="mt-20 lg:mt-24">
          <FadeIn>
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-rose" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-light sm:text-xs">Cliente</span>
            </div>
            <h3 className="mt-4 font-display text-4xl text-cream sm:text-5xl">FORS</h3>
            <p className="mt-4 max-w-lg text-[15px] font-light leading-relaxed text-cream/45">
              Produções de áudio para rádio desenvolvidas para o cliente FORS — jingles, vinhetas, teasers, testemunhos e spots publicitários.
            </p>
            <CaseStudyButton id="fors-radio" title="Produções de rádio — FORS" tone="dark" className="mt-6" />
          </FadeIn>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audioTracks.map((track, index) => (
              <AudioCard key={track.file} track={track} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
