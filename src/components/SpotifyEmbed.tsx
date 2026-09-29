interface SpotifyEmbedProps {
  title: string;
  profileUrl: string;
}

export function SpotifyEmbed({ title, profileUrl }: SpotifyEmbedProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1DB954] text-white shadow-lg shadow-[#1DB954]/20" aria-hidden="true">
        <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.375-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
      </div>

      <h3 className="mt-6 font-display text-3xl text-olive sm:text-4xl">{title}</h3>
      <p className="mx-auto mt-3 max-w-xs text-sm font-light leading-relaxed text-ink/45">
        Um espaço para rir, extravasar e se sentir acolhida na jornada dos 20 anos.
      </p>

      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-[#1DB954] px-8 text-sm font-semibold text-white shadow-md shadow-[#1DB954]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1DB954]/30"
        aria-label={`${title} — ouvir no Spotify em nova aba`}
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.375-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
        Ouvir no Spotify
      </a>
    </div>
  );
}
