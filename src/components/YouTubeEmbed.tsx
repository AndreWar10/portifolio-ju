"use client";

import Image from "next/image";
import { useState } from "react";

interface YouTubeEmbedProps {
  title: string;
  embedUrl: string;
  watchUrl: string;
}

function getVideoId(embedUrl: string): string | null {
  const match = embedUrl.match(/\/embed\/([^?]+)/);
  return match ? match[1] : null;
}

export function YouTubeEmbed({ title, embedUrl, watchUrl }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const videoId = getVideoId(embedUrl);

  return (
    <div className="space-y-3">
      <div className="group relative aspect-video w-full overflow-hidden rounded-lg bg-ink">
        {playing ? (
          <iframe
            title={title}
            src={`${embedUrl}?autoplay=1`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="relative block h-full w-full cursor-pointer"
            aria-label={`Reproduzir ${title}`}
          >
            {videoId && (
              <Image
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            )}
            <div className="absolute inset-0 bg-ink/20 transition-colors duration-300 group-hover:bg-ink/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-xl shadow-black/30 transition-transform duration-300 group-hover:scale-110 sm:h-[72px] sm:w-[72px]">
                <svg className="ml-1 h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>
      <a
        href={watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink/50 transition-colors hover:text-rose"
        aria-label={`${title} — assistir no YouTube em nova aba`}
      >
        Assistir no YouTube
        <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}
