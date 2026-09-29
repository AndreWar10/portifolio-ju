export const siteConfig = {
  name: "Juliana",
  fullName: "Juliana Eleutério",
  role: "Publicidade e Propaganda · Criação e Design",
  tagline: "Criatividade com propósito",
  description:
    "Portfólio de Juliana Eleutério — Publicidade e Propaganda, UNIFRAN Franca. Audiovisual, campanhas, fotografia, produção de rádio e TCC.",
  university: "UNIFRAN — Universidade de Franca",
  email: "jul.eleuterio@gmail.com",
  linkedin: "https://www.linkedin.com/in/juliana-eleuterio/",
  linkedinHandle: "in/juliana-eleuterio",
  aboutQuote:
    "Acredito que uma boa comunicação começa com uma boa ideia, mas ganha vida quando conseguimos transformá-la em algo que as pessoas realmente sintam e compreendam.",
  aboutText: `Sou Juliana Eleutério, estudante de Publicidade e Propaganda, apaixonada por criatividade, design e pela construção de ideias que tenham propósito. Gosto de transformar conceitos em imagens, campanhas e conteúdos que não apenas sejam visualmente bonitos, mas que também contem histórias e criem conexão.

Minha curiosidade me leva a experimentar diferentes áreas da comunicação, especialmente design gráfico, criação de conteúdo, social media, branding e desenvolvimento de campanhas. Sou comunicativa, criativa, comprometida e estou sempre buscando aprender algo novo e aprimorar meu olhar.

Quero construir uma trajetória profissional na área criativa, unindo estratégia, estética e comunicação para desenvolver projetos que façam sentido para marcas e para as pessoas.`,
} as const;

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Audiovisual", href: "#audiovisual" },
  { label: "Campanhas", href: "#campanhas" },
  { label: "Fotografia", href: "#fotografia" },
  { label: "Rádio", href: "#radio" },
  { label: "TCC", href: "#tcc" },
  { label: "Trabalhos Pessoais", href: "#pessoais" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
] as const;

export type ProjectCategory =
  | "audiovisual"
  | "institucional"
  | "conscientizacao"
  | "radio"
  | "tcc"
  | "web";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  type: "canva" | "youtube" | "spotify" | "website";
  url: string;
  embedUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "video-1",
    title: "Comercial Renata: Para cada emoção existe Renata",
    description:
      "Peça audiovisual desenvolvida no curso de Publicidade e Propaganda.",
    category: "audiovisual",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=CZbxBYgZKVY",
    embedUrl: "https://www.youtube.com/embed/CZbxBYgZKVY",
  },
  {
    id: "video-2",
    title: "Comercial Spotify",
    description:
      "Peça audiovisual publicitária produzida durante a graduação.",
    category: "audiovisual",
    type: "youtube",
    url: "https://youtu.be/leCmcUhEBP8",
    embedUrl: "https://www.youtube.com/embed/leCmcUhEBP8",
  },
  {
    id: "video-short",
    title: "FARM RIO",
    description:
      "Peça em formato vertical para redes sociais e plataformas de short-form.",
    category: "audiovisual",
    type: "youtube",
    url: "https://www.youtube.com/shorts/-s_cQnIVExY",
    embedUrl: "https://www.youtube.com/embed/-s_cQnIVExY",
  },
  {
    id: "video-3",
    title: "Comercial 51: uma boa ideia",
    description:
      "Produção audiovisual com direção criativa e storytelling.",
    category: "audiovisual",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=7rpqz5kJtlw",
    embedUrl: "https://www.youtube.com/embed/7rpqz5kJtlw",
  },
  {
    id: "campanha-institucional-1",
    title: "Rebranding Jurupinga",
    description:
      "Campanha institucional com estratégia de marca e posicionamento.",
    category: "institucional",
    type: "canva",
    url: "https://www.canva.com/design/DAGBQy1pHMI/iFu0Di9PxfZPSiQv2J6p-A/view",
    embedUrl:
      "https://www.canva.com/design/DAGBQy1pHMI/iFu0Di9PxfZPSiQv2J6p-A/view?embed",
    featured: true,
  },
  {
    id: "campanha-institucional-2",
    title: "Plano de Marketing Borelli",
    description:
      "Campanha institucional com foco em identidade visual e comunicação integrada.",
    category: "institucional",
    type: "canva",
    url: "https://www.canva.com/design/DAGTuyzzMik/m3X2oKBds_OM5aKiSXzQuA/view",
    embedUrl:
      "https://www.canva.com/design/DAGTuyzzMik/m3X2oKBds_OM5aKiSXzQuA/view?embed",
  },
  {
    id: "campanha-conscientizacao",
    title: "Campanha sobre violência contra a mulher",
    description:
      "Campanha de conscientização social produzida em cartaz, com abordagem criativa e impacto emocional.",
    category: "conscientizacao",
    type: "canva",
    url: "https://www.canva.com/design/DAHEJ7N-ZeM/SNP_8JMkGjaF5uIFog-wYg/view",
    embedUrl:
      "https://www.canva.com/design/DAHEJ7N-ZeM/SNP_8JMkGjaF5uIFog-wYg/view?embed",
    featured: true,
  },
  {
    id: "video-conscientizacao",
    title: "Campanha Junho Vermelho",
    description:
      "Peça audiovisual sobre conscientização e doação de sangue.",
    category: "conscientizacao",
    type: "youtube",
    url: "https://youtu.be/gaUUGwbXPUs",
    embedUrl: "https://www.youtube.com/embed/gaUUGwbXPUs",
  },
  {
    id: "serra-canastra",
    title: "Serra da Canastra",
    description:
      "Site institucional — natureza, cultura e sabores de Minas Gerais.",
    category: "web",
    type: "website",
    url: "https://serra-da-canastra.vercel.app/",
    featured: true,
  },
  {
    id: "crise-dos-20",
    title: "Crise dos 20",
    description:
      "Podcast sobre as mudanças e desafios da vida na casa dos 20 anos.",
    category: "radio",
    type: "spotify",
    url: "https://creators.spotify.com/pod/profile/amali3/",
    featured: true,
  },
  {
    id: "tcc",
    title: "Trabalho de Conclusão de Curso",
    description:
      "Apresentação do TCC — síntese do percurso acadêmico e profissional.",
    category: "tcc",
    type: "canva",
    url: "https://www.canva.com/design/DAG1P8gTBT8/9TfiKyEIJo1dCvp9p_6tkQ/view",
    embedUrl:
      "https://www.canva.com/design/DAG1P8gTBT8/9TfiKyEIJo1dCvp9p_6tkQ/view?embed",
    featured: true,
  },
];

export const audiovisualProjects = projects.filter(
  (p) => p.category === "audiovisual"
);
export const institucionalProjects = projects.filter(
  (p) => p.category === "institucional"
);
export const conscientizacaoProjects = projects.filter(
  (p) => p.category === "conscientizacao"
);
export const webProject = projects.find((p) => p.id === "serra-canastra")!;
export const radioProject = projects.find((p) => p.id === "crise-dos-20")!;
export const tccProject = projects.find((p) => p.id === "tcc")!;

export interface PersonalProject {
  id: string;
  title: string;
  context: string;
  description: string;
  images: string[];
  url?: string;
  /** Peça horizontal: o card ocupa duas colunas */
  wide?: boolean;
  /** Série de peças agrupadas em carrossel no mobile */
  series?: "pascom";
}

// Projetos pessoais — todo o design, da concepção visual à peça final, feito pela Juliana
export const personalProjects: PersonalProject[] = [
  {
    id: "novena-sao-benedito-2026",
    title: "Novena de São Benedito 2026",
    context: "PASCOM · Paróquia São Benedito",
    series: "pascom",
    description:
      "Cartaz de divulgação da novena com o tema “Com São Benedito celebrando o Ano Jubilar Franciscano” — tipografia editorial em destaque, composição com os celebrantes e informações das missas.",
    images: ["/images/pessoais/novena-sao-benedito-2026.webp"],
  },
  {
    id: "novena-sao-benedito-2025",
    title: "Novena de São Benedito 2025",
    context: "PASCOM · Paróquia São Benedito",
    series: "pascom",
    description:
      "Cartaz da novena com o tema “Com São Benedito somos discípulos e peregrinos de esperança” — paleta clara e acolhedora, com a imagem do santo como ponto focal.",
    images: ["/images/pessoais/novena-sao-benedito-2025.webp"],
  },
  {
    id: "cerco-de-jerico-2026",
    title: "17º Cerco de Jericó",
    context: "PASCOM · Paróquia São Benedito",
    series: "pascom",
    description:
      "Cartaz do Cerco de Jericó 2026 — “Eu e minha casa serviremos ao Senhor” (Js 24,15). Tratamento em preto e branco dos celebrantes em contraste com o ostensório dourado.",
    images: ["/images/pessoais/cerco-de-jerico-2026.webp"],
  },
  {
    id: "manual-dos-padrinhos",
    title: "Identidade Visual de Casamento",
    context: "Casamento · Manual dos Padrinhos",
    description:
      "Identidade visual para casamento com monograma, save the date e manual dos padrinhos — florais em aquarela, caligrafia e paleta em tons de pink que orienta os trajes de madrinhas e padrinhos.",
    images: ["/images/pessoais/manual-dos-padrinhos.webp"],
  },
  {
    id: "convite-aniversario-infantil",
    title: "Convite de Aniversário Infantil",
    context: "Aniversário · Convite digital",
    description:
      "Convite para a festa conjunta de dois irmãos, unindo os temas Frozen e Homem-Aranha em uma única peça — cada lado com tipografia e universo visual próprios, conectados pelo cartão central com as informações da festa.",
    images: ["/images/pessoais/convite-aniversario-infantil.jpg"],
    wide: true,
  },
];

export interface CarouselProject {
  id: string;
  title: string;
  context: string;
  description: string;
  slides: { src: string; alt: string }[];
}

const consorcioSlideAlts = [
  "Capa — Descubra os tipos de lance e contemplação no consórcio Gazin",
  "1. Lance Livre",
  "2. Sorteio",
  "3. Lance Fixo",
  "4. Troca Fácil",
  "Cada modalidade oferece uma possibilidade diferente",
  "Ainda ficou com dúvidas? Fale conosco",
];

export const consorcioCarousel: CarouselProject = {
  id: "carrossel-consorcio",
  title: "Tipos de lance e contemplação",
  context: "Consórcio On · Carrossel para Instagram",
  description:
    "Carrossel de conteúdo educativo para uma empresa de consórcio, explicando as modalidades de lance e contemplação. Identidade sóbria em preto, off-white e dourado, com objetos 3D metálicos como fio condutor visual e alternância de fundos claros e escuros para dar ritmo à leitura.",
  slides: consorcioSlideAlts.map((alt, i) => ({
    src: `/images/pessoais/consorcio/slide-${i + 1}.jpg`,
    alt: `Slide ${i + 1} — ${alt}`,
  })),
};

export interface Highlight {
  /** id do estudo de caso (ver caseStudies.ts) */
  id: string;
  title: string;
  category: string;
  image: string;
  /** Âncora da seção onde o projeto está */
  href: string;
}

// Projetos em destaque — a seleção é da Juliana; troque, reordene ou adicione à vontade
export const highlights: Highlight[] = [
  {
    id: "tcc",
    title: "Identidade de marca da Ana B.",
    category: "TCC · Branding",
    image: "/images/tcc-cover.png",
    href: "#tcc",
  },
  {
    id: "carrossel-consorcio",
    title: "Tipos de lance e contemplação",
    category: "Design · Social media",
    image: "/images/pessoais/consorcio/slide-1.jpg",
    href: "#pessoais",
  },
  {
    id: "novena-sao-benedito-2026",
    title: "Novena de São Benedito 2026",
    category: "Design · PASCOM",
    image: "/images/pessoais/novena-sao-benedito-2026.webp",
    href: "#pessoais",
  },
];

// Rascunho — a Juliana deve validar/reescrever com o jeito real dela de trabalhar
export const processSteps = [
  { title: "Briefing e imersão", text: "Entender o problema, o público e o objetivo antes de qualquer ideia." },
  { title: "Pesquisa e estratégia", text: "Buscar referências, analisar o cenário e definir o conceito que vai guiar o projeto." },
  { title: "Criação", text: "Transformar o conceito em ideias, rascunhos, direção de arte e texto." },
  { title: "Produção", text: "Executar as peças finais nos formatos e canais necessários." },
  { title: "Entrega e ajustes", text: "Apresentar, revisar a partir do feedback e entregar a versão final." },
];

export const contactCta = {
  title: "Vamos criar juntos?",
  // Rascunho — confirmar com a Juliana quais oportunidades ela busca
  text: "Estou aberta a oportunidades de estágio, emprego, trabalhos freelancer e parcerias nas áreas de design, criação de conteúdo, social media e branding.",
};
