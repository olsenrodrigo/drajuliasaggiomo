import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FEATURED_RESULTS } from "@/data/procedures";

const AUTOPLAY_INTERVAL = 5000;

export default function ResultsCarousel() {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  // Avanço automático — pausa no hover/foco e respeita quem prefere menos movimento
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) emblaApi.scrollNext();
    }, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(timer);
  }, [emblaApi, isPaused]);

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-9"
        >
          <div>
            <div
              className="inline-block px-4 py-2 rounded-full mb-5"
              style={{ backgroundColor: "rgba(201, 168, 124, 0.15)" }}
            >
              <span className="text-sm font-medium" style={{ color: "#6a363d" }}>
                {t("resultsCarousel.badge")}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#212529" }}>
              {t("resultsCarousel.title")}
            </h3>
            <p className="mt-3 text-base md:text-lg max-w-xl" style={{ color: "#3C3C3C" }}>
              {t("resultsCarousel.subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label={t("resultados.prevLabel")}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-[#6a363d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ border: "1px solid rgba(201, 168, 124, 0.5)", color: "#6a363d" }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label={t("resultados.nextLabel")}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-[#6a363d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ border: "1px solid rgba(201, 168, 124, 0.5)", color: "#6a363d" }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carrossel */}
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="flex -ml-4 md:-ml-6">
            {FEATURED_RESULTS.map((item, index) => {
              const label = t(`resultados.proc_${item.id}_label`);
              return (
                <div
                  key={item.src}
                  className="pl-4 md:pl-6 flex-[0_0_86%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <Link
                    href="/resultados"
                    className="group block relative overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-xl"
                    style={{
                      border: "1px solid rgba(201, 168, 124, 0.3)",
                      backgroundColor: "#EFE7DE",
                    }}
                  >
                    <div className="aspect-square w-full overflow-hidden">
                      <img
                        src={item.src}
                        alt={`${label} — ${t("resultsCarousel.badge")}`}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                        loading={index < 3 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>

                    {/* Nome do procedimento sobre a foto */}
                    <div className="absolute top-0 inset-x-0 p-3 sm:p-4 pointer-events-none">
                      <span
                        className="inline-block max-w-full truncate rounded-full px-3.5 py-1.5 text-xs sm:text-[13px] font-semibold text-white backdrop-blur-md"
                        style={{
                          backgroundColor: "rgba(74, 55, 70, 0.85)",
                          border: "1px solid rgba(201, 168, 124, 0.45)",
                        }}
                      >
                        {label}
                      </span>
                    </div>

                    {/* Convite para a galeria completa */}
                    <div
                      className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(74, 55, 70, 0.88) 0%, rgba(74, 55, 70, 0) 55%)",
                      }}
                    >
                      <span className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-white">
                        {t("resultsCarousel.viewProcedure")}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navegação e atalho para a galeria */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            {FEATURED_RESULTS.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`${t("resultsCarousel.goTo")} ${index + 1}`}
                aria-current={index === selectedIndex}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: index === selectedIndex ? 22 : 8,
                  backgroundColor: index === selectedIndex ? "#6a363d" : "rgba(201, 168, 124, 0.45)",
                }}
              />
            ))}
          </div>

          <Link
            href="/resultados"
            className="group inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75"
            style={{ color: "#6a363d" }}
          >
            {t("resultsCarousel.viewAll")}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
