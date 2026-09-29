"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { caseStudies, hasCaseStudy, type CaseStudy } from "@/lib/caseStudies";

const textFields: { key: keyof CaseStudy; label: string }[] = [
  { key: "context", label: "Contexto" },
  { key: "objective", label: "Problema, briefing ou objetivo" },
  { key: "audience", label: "Público" },
  { key: "concept", label: "Estratégia e conceito" },
  { key: "process", label: "Processo de criação" },
  { key: "role", label: "Minha função e contribuição" },
];

const listFields: { key: "team" | "deliverables" | "tools"; label: string }[] = [
  { key: "team", label: "Equipe e créditos" },
  { key: "deliverables", label: "Peças e formatos" },
  { key: "tools", label: "Ferramentas" },
];

function CaseStudyDialog({ title, study, onClose }: { title: string; study: CaseStudy; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      previousFocus?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={`Estudo de caso — ${title}`}>
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-cream text-ink shadow-2xl sm:rounded-3xl">
        <div className="flex items-start justify-between gap-4 border-b border-gold/15 px-6 pb-5 pt-6 sm:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rose">
              Estudo de caso{study.category ? ` · ${study.category}` : ""}
            </p>
            <h3 className="mt-2 text-3xl leading-none text-ink sm:text-4xl">{title}</h3>
            {study.year && <p className="mt-2 text-xs font-medium text-ink/50">{study.year}</p>}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="-mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-olive transition-colors hover:bg-olive/10"
            aria-label="Fechar estudo de caso"
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8">
          <dl className="space-y-6">
            {textFields.map(({ key, label }) => {
              const value = study[key];
              if (typeof value !== "string" || !value) return null;
              return (
                <div key={key}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">{label}</dt>
                  <dd className="mt-2 text-sm font-light leading-relaxed text-ink/70">{value}</dd>
                </div>
              );
            })}

            {listFields.map(({ key, label }) => {
              const items = study[key];
              if (!items?.length) return null;
              return (
                <div key={key}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">{label}</dt>
                  <dd className="mt-3">
                    <ul className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <li key={item} className="rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink/70 ring-1 ring-gold/20">{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              );
            })}

            {study.results && (
              <div className="rounded-2xl bg-cream-dark/70 px-5 py-5 ring-1 ring-gold/15">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-rose">Resultados e aprendizados</dt>
                <dd className="mt-2 text-sm font-light leading-relaxed text-ink/70">{study.results}</dd>
              </div>
            )}

            {study.links && study.links.length > 0 && (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">Links</dt>
                <dd className="mt-3 flex flex-wrap gap-3">
                  {study.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-rose transition-colors hover:text-rose-dark">
                      {link.label}
                      <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>,
    document.body
  );
}

interface CaseStudyButtonProps {
  id: string;
  title: string;
  /** "dark" para seções de fundo escuro, "light" para fundo claro */
  tone?: "dark" | "light";
  className?: string;
}

export function CaseStudyButton({ id, title, tone = "light", className = "" }: CaseStudyButtonProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const study = caseStudies[id];
  if (!hasCaseStudy(study)) return null;

  const toneClass =
    tone === "dark"
      ? "bg-cream/10 text-cream ring-cream/15 hover:bg-cream/20"
      : "bg-rose/10 text-rose-dark ring-rose/20 hover:bg-rose/15";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] ring-1 transition-colors ${toneClass} ${className}`}
        aria-haspopup="dialog"
      >
        <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Ver estudo de caso
      </button>
      {open && <CaseStudyDialog title={title} study={study} onClose={close} />}
    </>
  );
}
