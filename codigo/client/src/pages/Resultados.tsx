import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PROCEDURES_DATA, type Img, type ProcedureId } from "@/data/procedures";

export default function Resultados() {
  const { t, i18n } = useTranslation();
  const homePath = i18n.language === "pt" ? "/" : `/${i18n.language}`;
  const [activeId, setActiveId] = useState<ProcedureId>(PROCEDURES_DATA[0].id);
  const [lightbox, setLightbox] = useState<{ images: Img[]; index: number } | null>(null);

  const activeData = PROCEDURES_DATA.find(p => p.id === activeId)!;
  const activeLabel = t(`resultados.proc_${activeId}_label`);
  const activeDescription = t(`resultados.proc_${activeId}_desc`);

  const openLightbox = (index: number) => setLightbox({ images: activeData.images, index });
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

  const imageCount = activeData.images.length;
  const resultLabel = imageCount !== 1 ? t("resultados.results") : t("resultados.result");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F4EF" }}>

      {/* Header */}
      <header
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b"
        style={{ borderColor: "rgba(201, 168, 124, 0.2)" }}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href={homePath}
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "#6a363d" }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{t("resultados.backToSite")}</span>
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
          <span className="text-sm font-medium" style={{ color: "#6a363d" }}>{t("resultados.galleryBadge")}</span>
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#212529" }}
        >
          {t("resultados.galleryTitle")}
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#3C3C3C" }}>
          {t("resultados.galleryDesc")}
        </p>
      </motion.div>

      {/* Procedure tabs */}
      <div
        className="sticky top-16 z-30 bg-white/97 backdrop-blur-sm border-b py-3"
        style={{ borderColor: "rgba(201, 168, 124, 0.2)" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {PROCEDURES_DATA.map(p => (
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
                {t(`resultados.proc_${p.id}_label`)}
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
                  {activeLabel}
                </h2>
                <p className="text-base" style={{ color: "#3C3C3C" }}>{activeDescription}</p>
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(201,168,124,0.15)", color: "#C9A87C" }}>
                {imageCount} {resultLabel}
              </span>
            </div>

            {/* Masonry grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {activeData.images.map((img, i) => (
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
              aria-label={t("resultados.closeLabel")}
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
              aria-label={t("resultados.prevLabel")}
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
              aria-label={t("resultados.nextLabel")}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Procedure label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm opacity-60 pointer-events-none">
              {activeLabel}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer CTA */}
      <div className="rounded-3xl mx-4 md:mx-8 mb-16 p-12 text-center text-white" style={{ background: "linear-gradient(135deg, #C9A87C 0%, #6a363d 100%)" }}>
        <h3 className="text-3xl font-bold mb-4 text-white">
          {t("resultados.ctaTitle")}
        </h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#F8F4EF" }}>
          {t("resultados.ctaDesc")}
        </p>
        <a
          href="https://wa.me/5511930744540"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-white rounded-full font-semibold transition-colors cursor-pointer hover:bg-opacity-90"
          style={{ color: "#6a363d" }}
        >
          {t("resultados.ctaButton")}
        </a>
      </div>
    </div>
  );
}
