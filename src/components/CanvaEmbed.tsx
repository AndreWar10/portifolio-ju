interface CanvaEmbedProps {
  title: string;
  embedUrl: string;
  viewUrl: string;
}

export function CanvaEmbed({ title, embedUrl, viewUrl }: CanvaEmbedProps) {
  return (
    <div className="space-y-3">
      <div className="relative w-full overflow-hidden rounded-lg bg-cream-dark">
        <div style={{ paddingTop: "56.25%" }}>
          <iframe
            title={title}
            src={embedUrl}
            loading="lazy"
            allowFullScreen
            allow="fullscreen"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
      <a
        href={viewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink/50 transition-colors hover:text-rose"
        aria-label={`${title} — abrir no Canva em nova aba`}
      >
        Abrir no Canva
        <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}
