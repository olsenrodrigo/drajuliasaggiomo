import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

type Img = { src: string; alt: string };
type Procedure = { id: string; label: string; description: string; images: Img[] };

const PROCEDURES: Procedure[] = [
  {
    id: "blefaroplastia",
    label: "Blefaroplastia",
    description: "Remove excesso de pele, bolsas de gordura e músculo ao redor dos olhos — olhar mais jovem, descansado e natural. Pode ser complementada com Laser, Skinboosters ou transferência de gordura para resultados ainda mais impactantes. Pós-operatório indolor e recuperação rápida.",
    images: Array.from({ length: 12 }, (_, i) => ({
      src: `/imagens/blefaroplastia/blefaroplastia${i + 1}.jpg`,
      alt: `Resultado blefaroplastia ${i + 1}`,
    })),
  },
  {
    id: "lipoaspiracao",
    label: "Lipoaspiração & Lipoescultura",
    description: "Remove gordura localizada e remodela outras áreas com a gordura retirada — disponível do Soft Definition ao High Definition (HD). Pode ser associada à Abdominoplastia para refinamento ainda maior do contorno corporal.",
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
    label: "Abdominoplastia",
    description: "Remove excesso de pele e gordura do abdômen e corrige flacidez muscular e diástase — indicada após grandes perdas de peso ou gestação. Quando associada à Lipoaspiração ou Lipoescultura, os resultados de contorno e definição são ainda mais expressivos.",
    images: [
      { src: `/imagens/abdominoplastia/abdominoplastia1.jpg`, alt: "Resultado abdominoplastia 1" },
      { src: `/imagens/abdominoplastia/abdominoplastia2.jpg`, alt: "Resultado abdominoplastia 2" },
    ],
  },
  {
    id: "mamoplastia",
    label: "Mamoplastia & Mastopexia",
    description: "A mamoplastia aumenta ou reduz o volume das mamas melhorando proporção e autoestima. A mastopexia reposiciona e devolve firmeza aos seios, podendo ser associada a próteses. Cicatrizes posicionadas nas dobras naturais da pele com técnicas cada vez mais discretas.",
    images: Array.from({ length: 3 }, (_, i) => ({
      src: `/imagens/mamoplastia_mastopexia/mamoplastia_mastopexia${i + 1}.jpg`,
      alt: `Resultado mamoplastia ${i + 1}`,
    })),
  },
  {
    id: "lifting_facial",
    label: "Lifting Facial",
    description: "Técnica avançada que atua nas camadas mais profundas da face, reposicionando músculos e tecidos para resultado natural e duradouro. Trata a causa do envelhecimento facial — não apenas seus sinais. Procedimentos superficiais não alcançam os mesmos efeitos estruturais.",
    images: [
      { src: `/imagens/lifting_facial/lifting_facial1.jpg`, alt: "Resultado lifting facial 1" },
      { src: `/imagens/lifting_facial/lifting_facial2.jpg`, alt: "Resultado lifting facial 2" },
    ],
  },
  {
    id: "laser",
    label: "Laser & Tecnologias",
    description: "Tratamentos com Laser Fotona — o mais seguro e versátil do mundo. Protocolos incluem Fotona 6D (rejuvenescimento facial profundo), Smooth Eyes, IntimaLase, IncontiLase, Tight Sculpting e tratamento de flacidez corporal. Resultados visíveis com mínima recuperação.",
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
    label: "Lipo de Papada",
    description: "Definição do contorno facial com eliminação da gordura submentoniana.",
    images: [
      { src: `/imagens/lipo_de_papada/lipo_de_papada1.jpg`, alt: "Resultado lipo papada 1" },
      { src: `/imagens/lipo_de_papada/lipo_de_papada2.jpg`, alt: "Resultado lipo papada 2" },
      { src: `/imagens/lipo_de_papada/lipo_de_papada3.png`, alt: "Resultado lipo papada 3" },
    ],
  },
  {
    id: "fotobiomodulacao",
    label: "Fotobiomodulação",
    description: "Ciência aplicada à regeneração celular — atua no metabolismo mitocondrial modulando inflamação e dor. Indicada para dor crônica e aguda, cicatrização de feridas, fibrose pós-lipoaspiração, nódulos de bioestimuladores, lipedema e recuperação pós-operatória.",
    images: [
      { src: `/imagens/fotobiomodulacao/fotobiomodulacao1.jpg`, alt: "Resultado fotobiomodulação 1" },
      { src: `/imagens/fotobiomodulacao/fotobiomodulacao2.jpg`, alt: "Resultado fotobiomodulação 2" },
    ],
  },
  {
    id: "cirurgias_combinadas",
    label: "Cirurgias Combinadas",
    description: "Múltiplos procedimentos em um único ato cirúrgico com planejamento integrado.",
    images: Array.from({ length: 5 }, (_, i) => ({
      src: `/imagens/cirurgias_combinadas/cirurgias_combinadas${i + 1}.jpg`,
      alt: `Resultado cirurgias combinadas ${i + 1}`,
    })),
  },
  {
    id: "lipedema",
    label: "Lipedema",
    description: "Protocolo não cirúrgico e estratégico que atua na inflamação como raiz do problema. Combinação de reeducação alimentar anti-inflamatória, atividade física orientada e fotobiomodulação para redução de dor, inchaço, retenção de líquidos e melhora da qualidade de vida.",
    images: [
      { src: `/imagens/lipedema/lipedema1.jpg`, alt: "Resultado lipedema 1" },
    ],
  },
];

export default function Resultados() {
  const [activeId, setActiveId] = useState(PROCEDURES[0].id);
  const [lightbox, setLightbox] = useState<{ images: Img[]; index: number } | null>(null);

  const active = PROCEDURES.find(p => p.id === activeId)!;

  const openLightbox = (index: number) => setLightbox({ images: active.images, index });
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImage = useCallback(() =>
    setLightbox(lb => lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : null), []);
  const nextImage = useCallback(() =>
    setLightbox(lb => lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : null), []);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightbox, closeLightbox, prevImage, nextImage]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title = "Galeria de Resultados — Dra. Júlia Saggiomo";
    return () => { document.title = "Dra. Júlia Saggiomo — Cirurgia Plástica"; };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F4EF" }}>

      {/* Header */}
      <header
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b"
        style={{ borderColor: "rgba(201, 168, 124, 0.2)" }}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "#6a363d" }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Voltar ao site</span>
          </Link>
          <img src="/logo_texto.png" alt="Dra. Júlia Saggiomo" className="h-8 w-auto" />
          <div style={{ width: 96 }} />
        </div>
      </header>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 pt-14 pb-10 text-center"
      >
        <div
          className="inline-block px-4 py-2 rounded-full mb-5"
          style={{ backgroundColor: "rgba(201, 168, 124, 0.15)" }}
        >
          <span className="text-sm font-medium" style={{ color: "#6a363d" }}>Galeria de Resultados</span>
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#212529" }}
        >
          Resultados dos Procedimentos
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#3C3C3C" }}>
          Transformações reais realizadas com técnica, segurança e cuidado personalizado.
        </p>
      </motion.div>

      {/* Procedure tabs */}
      <div
        className="sticky top-16 z-30 bg-white/97 backdrop-blur-sm border-b py-3"
        style={{ borderColor: "rgba(201, 168, 124, 0.2)" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {PROCEDURES.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap"
                style={{
                  backgroundColor: activeId === p.id ? "#6a363d" : "rgba(255,255,255,0.9)",
                  color: activeId === p.id ? "white" : "#494949",
                  border: `1px solid ${activeId === p.id ? "#6a363d" : "rgba(201, 168, 124, 0.35)"}`,
                  boxShadow: activeId === p.id ? "0 2px 8px rgba(106,54,61,0.25)" : "none",
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {/* Procedure header */}
            <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
              <div>
                <h2
                  className="text-3xl font-bold mb-1"
                  style={{ color: "#212529" }}
                >
                  {active.label}
                </h2>
                <p className="text-base" style={{ color: "#3C3C3C" }}>{active.description}</p>
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(201,168,124,0.15)", color: "#C9A87C" }}>
                {active.images.length} resultado{active.images.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Masonry grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {active.images.map((img, i) => (
                <motion.div
                  key={img.src}
                  className="break-inside-avoid mb-4 cursor-pointer group relative overflow-hidden rounded-2xl shadow-sm"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full block transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(106, 54, 61, 0.28)" }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5" style={{ color: "#6a363d" }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(8, 4, 5, 0.96)" }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
              style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
              onClick={closeLightbox}
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium px-4 py-1.5 rounded-full pointer-events-none"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              {lightbox.index + 1} / {lightbox.images.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-3 md:left-6 w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
              style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              key={lightbox.index}
              src={lightbox.images[lightbox.index].src}
              alt={lightbox.images[lightbox.index].alt}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-3 md:right-6 w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
              style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Próxima"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Procedure label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm opacity-60 pointer-events-none">
              {active.label}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer CTA */}
      <div className="rounded-3xl mx-4 md:mx-8 mb-16 p-12 text-center text-white" style={{ background: "linear-gradient(135deg, #C9A87C 0%, #6a363d 100%)" }}>
        <h3 className="text-3xl font-bold mb-4 text-white">
          Pronta para a sua transformação?
        </h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#F8F4EF" }}>
          Agende sua consulta e descubra o procedimento ideal para você — com segurança, naturalidade e cuidado personalizado.
        </p>
        <a
          href="https://wa.me/5511930744540"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-white rounded-full font-semibold transition-colors cursor-pointer hover:bg-opacity-90"
          style={{ color: "#6a363d" }}
        >
          Agendar Consulta via WhatsApp
        </a>
      </div>
    </div>
  );
}
