import { motion } from "framer-motion";
import { Calendar, ArrowRight, User, Award, Star, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

interface HeroProps {
  scrollToSection?: (section: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const { t } = useTranslation();

  const goTo = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="hero" className="relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, #6a363d 0%, #7e464d 40%, #C9A87C 100%)"
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(74, 55, 70, 0.95), rgba(74, 55, 70, 0.7), rgba(74, 55, 70, 0.3))" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14 pt-24 sm:pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-snug">
              {t("hero.titleStart")}
              <span style={{ color: "#C9A87C" }}>
                {t("hero.titleHighlight")}
              </span>
            </h2>

            <p className="text-base sm:text-lg mb-2 leading-relaxed" style={{ color: "#F8F4EF" }}>
              {t("hero.subtitle")}
            </p>

            <p
              className="text-xs sm:text-sm mb-6 tracking-wide font-medium"
              style={{ color: "rgba(201, 168, 124, 0.95)" }}
            >
              {t("hero.credentials")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("contact")}
                className="group px-7 py-3.5 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer"
                style={{ background: "#C9A87C" }}
              >
                <Calendar size={18} />
                {t("hero.ctaSchedule")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("about")}
                className="px-7 py-3.5 backdrop-blur-sm text-white rounded-full font-medium border-2 transition-all flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <User size={18} />
                {t("hero.ctaSpecialist")}
              </motion.button>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t" style={{ borderColor: "rgba(201, 168, 124, 0.2)" }}>
            {[
              { value: t("hero.stat1Value"), label: t("hero.stat1Label"), icon: Award, suffix: "+" },
              { value: t("hero.stat2Value"), label: t("hero.stat2Label"), icon: Star, suffix: "" },
              { value: t("hero.stat3Value"), label: t("hero.stat3Label"), icon: Sparkles, suffix: "" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.12 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="flex flex-col items-center text-center px-1.5 sm:px-3 py-3 sm:py-4 rounded-2xl cursor-default overflow-hidden"
                  style={{
                    background: "#503646",
                    border: "1px solid rgba(201, 168, 124, 0.25)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                  }}
                >
                  {/* Linha 1: ícone — altura fixa para alinhar entre cards */}
                  <div className="h-6 sm:h-8 flex items-center justify-center">
                    <Icon size={18} className="opacity-80" style={{ color: "#C9A87C" }} />
                  </div>
                  {/* Linha 2: valor — altura fixa, fonte uniforme */}
                  <div className="h-10 sm:h-13 flex items-center justify-center mt-1">
                    <span
                      className="text-base sm:text-2xl md:text-3xl font-bold leading-none"
                      style={{ color: "#C9A87C", textShadow: "0 2px 10px rgba(201,168,124,0.35)", hyphens: "auto", wordBreak: "break-word" }}
                    >
                      {stat.value}{stat.suffix}
                    </span>
                  </div>
                  {/* Linha 3: divisor */}
                  <div className="w-5 h-px my-2 shrink-0" style={{ background: "rgba(201,168,124,0.45)" }} />
                  {/* Linha 4: label */}
                  <div className="text-[11px] sm:text-xs leading-snug font-medium" style={{ color: "rgba(248,244,239,0.85)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animated mandala decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 z-[5] hidden lg:block"
      >
        <img
          src="/mandala.png"
          alt=""
          className="w-[500px] h-[500px] animate-spin-slow"
          style={{ opacity: 0.15, filter: "brightness(1.5)" }}
        />
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[1]"
        style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
      />
    </div>
  );
}
