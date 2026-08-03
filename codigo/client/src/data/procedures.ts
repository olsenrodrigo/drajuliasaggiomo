export type Img = { src: string; alt: string };

export type ProcedureId =
  | "blefaroplastia"
  | "lipoaspiracao"
  | "abdominoplastia"
  | "mamoplastia"
  | "lifting_facial"
  | "laser"
  | "lipo_papada"
  | "fotobiomodulacao"
  | "cirurgias_combinadas"
  | "lipedema";

export type ProcedureData = { id: ProcedureId; images: Img[] };

export const PROCEDURES_DATA: ProcedureData[] = [
  {
    id: "blefaroplastia",
    images: Array.from({ length: 12 }, (_, i) => ({
      src: `/imagens/blefaroplastia/blefaroplastia${i + 1}.jpg`,
      alt: `Resultado blefaroplastia ${i + 1}`,
    })),
  },
  {
    id: "lipoaspiracao",
    images: [
      ...Array.from({ length: 4 }, (_, i) => ({
        src: `/imagens/lipoaspiracao_lipoescultura/lipoaspiracao_lipoescultura${i + 1}.jpg`,
        alt: `Resultado lipoaspiração ${i + 1}`,
      })),
      { src: `/imagens/lipoaspiracao_lipoescultura/lipoaspiracao_lipoescultura6.png`, alt: "Resultado lipoaspiração 5" },
    ],
  },
  {
    id: "abdominoplastia",
    images: [
      { src: `/imagens/abdominoplastia/abdominoplastia1.jpg`, alt: "Resultado abdominoplastia 1" },
      { src: `/imagens/abdominoplastia/abdominoplastia2.jpg`, alt: "Resultado abdominoplastia 2" },
    ],
  },
  {
    id: "mamoplastia",
    images: Array.from({ length: 3 }, (_, i) => ({
      src: `/imagens/mamoplastia_mastopexia/mamoplastia_mastopexia${i + 1}.jpg`,
      alt: `Resultado mamoplastia ${i + 1}`,
    })),
  },
  {
    id: "lifting_facial",
    images: [
      { src: `/imagens/lifting_facial/lifting_facial1.jpg`, alt: "Resultado lifting facial 1" },
      { src: `/imagens/lifting_facial/lifting_facial2.jpg`, alt: "Resultado lifting facial 2" },
    ],
  },
  {
    id: "laser",
    images: [
      ...Array.from({ length: 8 }, (_, i) => ({
        src: `/imagens/laser/laser${i + 1}.jpg`,
        alt: `Resultado laser ${i + 1}`,
      })),
      { src: `/imagens/laser/laser9.png`, alt: "Resultado laser 9" },
      { src: `/imagens/laser/laser10.jpg`, alt: "Resultado laser 10" },
    ],
  },
  {
    id: "lipo_papada",
    images: [
      { src: `/imagens/lipo_de_papada/lipo_de_papada1.jpg`, alt: "Resultado lipo papada 1" },
      { src: `/imagens/lipo_de_papada/lipo_de_papada2.jpg`, alt: "Resultado lipo papada 2" },
      { src: `/imagens/lipo_de_papada/lipo_de_papada3.png`, alt: "Resultado lipo papada 3" },
    ],
  },
  {
    id: "fotobiomodulacao",
    images: [
      { src: `/imagens/fotobiomodulacao/fotobiomodulacao1.jpg`, alt: "Resultado fotobiomodulação 1" },
      { src: `/imagens/fotobiomodulacao/fotobiomodulacao2.jpg`, alt: "Resultado fotobiomodulação 2" },
    ],
  },
  {
    id: "cirurgias_combinadas",
    images: Array.from({ length: 5 }, (_, i) => ({
      src: `/imagens/cirurgias_combinadas/cirurgias_combinadas${i + 1}.jpg`,
      alt: `Resultado cirurgias combinadas ${i + 1}`,
    })),
  },
  {
    id: "lipedema",
    images: [
      { src: `/imagens/lipedema/lipedema1.jpg`, alt: "Resultado lipedema 1" },
    ],
  },
];

export type FeaturedResult = { id: ProcedureId; src: string; alt: string };

/** Pega uma foto da própria galeria para não haver divergência entre a home e /resultados. */
function pick(id: ProcedureId, index = 0): FeaturedResult {
  const procedure = PROCEDURES_DATA.find((p) => p.id === id)!;
  const image = procedure.images[index] ?? procedure.images[0];
  return { id, src: image.src, alt: image.alt };
}

/** Destaques exibidos no carrossel da home — um resultado por procedimento, alternando rosto e corpo. */
export const FEATURED_RESULTS: FeaturedResult[] = [
  pick("blefaroplastia", 4),
  pick("lipoaspiracao", 2),
  pick("lifting_facial"),
  pick("abdominoplastia"),
  pick("laser"),
  pick("mamoplastia", 2),
  pick("lipo_papada"),
  pick("cirurgias_combinadas", 2),
  pick("fotobiomodulacao"),
  pick("lipedema"),
];
