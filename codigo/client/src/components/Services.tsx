import { motion } from "framer-motion";
import { CheckCircle2, Images, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    t("services.service1"),
    t("services.service2"),
    t("services.service3"),
    t("services.service4"),
    t("services.service5"),
  ];

  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#F8F4EF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(201, 168, 124, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#6a363d" }}>{t("services.badge")}</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            {t("services.title")}
          </h3>

          <p className="text-xl max-w-4xl mx-auto" style={{ color: "#3C3C3C" }}>
            {t("services.description")}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
              style={{ borderColor: "rgba(201, 168, 124, 0.15)" }}
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#C9A87C" }} />
              <span className="font-medium leading-snug" style={{ color: "#212529" }}>{service}</span>
            </motion.div>
          ))}
        </div>

        {/* Results showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-12"
        >
          <Link href="/resultados" className="block group">
            <div
              className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-shadow hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, rgba(106,54,61,0.04) 0%, rgba(201,168,124,0.12) 100%)",
                border: "1.5px solid rgba(201, 168, 124, 0.35)",
              }}
            >
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <Images className="w-5 h-5" style={{ color: "#C9A87C" }} />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "#C9A87C" }}
                  >
                    {t("services.galleryBadge")}
                  </span>
                </div>
                <h4
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: "#212529" }}
                >
                  {t("services.galleryTitle")}
                </h4>
                <p className="text-base max-w-md" style={{ color: "#3C3C3C" }}>
                  {t("services.galleryDescription")}
                </p>
              </div>
              <div
                className="flex-shrink-0 flex items-center gap-3 px-7 py-4 rounded-full font-semibold text-base text-white transition-all group-hover:shadow-md"
                style={{ background: "linear-gradient(135deg, #C9A87C 0%, #6a363d 100%)" }}
              >
                {t("services.galleryButton")}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #C9A87C 0%, #6a363d 100%)" }}
        >
          <h4 className="text-3xl font-bold mb-4 text-white">
            {t("services.ctaTitle")}
          </h4>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#F8F4EF" }}>
            {t("services.ctaDescription")}
          </p>
          <button
            className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#6a363d" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("services.ctaButton")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
