/**
 * Estudos de caso de cada projeto.
 *
 * Campos vazios ou ausentes NÃO aparecem no site — preencha só com informações verdadeiras.
 * O roteiro com as perguntas de cada projeto está em ROTEIRO-ESTUDOS-DE-CASO.md.
 */

export interface CaseStudy {
  /** Ex.: "Campanha publicitária", "Design", "Audiovisual" */
  category?: string;
  /** Ano ou semestre de realização. Ex.: "2024 · 5º semestre" */
  year?: string;
  /** Onde/por que o trabalho foi produzido (disciplina, cliente, voluntariado...) */
  context?: string;
  /** Problema, briefing ou objetivo */
  objective?: string;
  /** Público envolvido */
  audience?: string;
  /** Estratégia ou conceito central */
  concept?: string;
  /** Processo de criação e desenvolvimento */
  process?: string;
  /** Função e contribuição individual da Juliana */
  role?: string;
  /** Equipe e créditos */
  team?: string[];
  /** Peças e formatos produzidos */
  deliverables?: string[];
  /** Ferramentas utilizadas */
  tools?: string[];
  /** Resultados, aprendizados ou competências demonstradas */
  results?: string;
  /** Links relacionados (vídeo, apresentação, post...) */
  links?: { label: string; url: string }[];
}

// Trabalhos acadêmicos feitos em grupo na agência Amáli (Publicidade e Propaganda — UNIFRAN)
const amaliTeam = ["Agência Amáli — Amanda, Ananda e Juliana"];

const pascom: CaseStudy = {
  category: "Design · Projeto pessoal",
  context: "Voluntariado na PASCOM (Pastoral da Comunicação) da Paróquia São Benedito — Franca/SP.",
  role: "Toda a parte de design, da concepção visual à execução da peça final.",
  deliverables: ["Cartaz digital (1080 × 1350 px)"],
};

export const caseStudies: Record<string, CaseStudy> = {
  // ——— Audiovisual ———
  "video-1": { category: "Audiovisual", team: amaliTeam },
  "video-2": { category: "Audiovisual", team: amaliTeam },
  "video-short": { category: "Audiovisual", team: amaliTeam, deliverables: ["Vídeo vertical para redes sociais"] },
  "video-3": { category: "Audiovisual", team: amaliTeam },

  // ——— Campanhas ———
  "campanha-institucional-1": { category: "Campanha institucional · Branding", team: amaliTeam },
  "campanha-institucional-2": { category: "Campanha institucional", team: amaliTeam },
  "campanha-conscientizacao": { category: "Campanha de conscientização", team: amaliTeam, deliverables: ["Cartaz"] },
  "video-conscientizacao": {
    category: "Campanha de conscientização · Audiovisual",
    objective: "Conscientizar sobre a doação de sangue (Junho Vermelho).",
    team: amaliTeam,
  },
  "serra-canastra": { category: "Desenvolvimento web", team: amaliTeam, deliverables: ["Site institucional"] },

  // ——— Fotografia ———
  fotografia: { category: "Fotografia" },

  // ——— Rádio ———
  "crise-dos-20": {
    category: "Áudio · Podcast",
    concept: "Um espaço para discutir, com leveza e acolhimento, as mudanças e desafios da vida na casa dos 20 anos.",
    team: amaliTeam,
    deliverables: ["Podcast (episódios no Spotify)"],
  },
  "fors-radio": {
    category: "Áudio publicitário · Rádio",
    context: "Produções de áudio para rádio desenvolvidas para o cliente FORS.",
    team: amaliTeam,
    deliverables: ["Jingle", "Vinheta", "Teaser", "Testemunho", "Patrocínio", "Spot publicitário"],
  },

  // ——— TCC ———
  tcc: {
    category: "Trabalho de Conclusão de Curso · Branding",
    year: "2025",
    context: "TCC do curso de Publicidade e Propaganda — UNIFRAN.",
    objective:
      "A Ana B., marca de semijoias fundada em Franca (SP), enfrentava falta de coerência na comunicação e na identidade visual. O trabalho propôs reformular a identidade institucional e fortalecer o posicionamento da marca para ampliar reconhecimento e competitividade.",
    team: amaliTeam,
  },

  // ——— Trabalhos pessoais ———
  "novena-sao-benedito-2026": { ...pascom, year: "2026" },
  "novena-sao-benedito-2025": { ...pascom, year: "2025" },
  "cerco-de-jerico-2026": { ...pascom, year: "2026" },
  "manual-dos-padrinhos": {
    category: "Identidade visual · Projeto pessoal",
    role: "Toda a parte de design, da concepção visual à execução da peça final.",
    deliverables: ["Monograma", "Save the date", "Manual dos padrinhos com paleta de cores e orientações de traje"],
  },
  "convite-aniversario-infantil": {
    category: "Design · Projeto pessoal",
    role: "Toda a parte de design, da concepção visual à execução da peça final.",
    deliverables: ["Convite digital"],
  },
  "carrossel-consorcio": {
    category: "Design · Social media",
    context: "Conteúdo para a empresa Consórcio On.",
    role: "Toda a parte de design, da concepção visual à execução da peça final.",
    deliverables: ["Carrossel com 7 slides para Instagram (1080 × 1350 px)"],
  },
};

export function hasCaseStudy(study: CaseStudy | undefined): study is CaseStudy {
  if (!study) return false;
  // categoria e ano sozinhos não justificam abrir um estudo de caso
  return Object.entries(study).some(([key, v]) => key !== "category" && key !== "year" && (Array.isArray(v) ? v.length > 0 : Boolean(v)));
}
