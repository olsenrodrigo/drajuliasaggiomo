import { motion } from "framer-motion";
import { Palette, Microscope, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Locations() {
  const { t } = useTranslation();

  const features = [
    { icon: Palette,     text: t("locations.feature1") },
    { icon: Microscope,  text: t("locations.feature2") },
    { icon: Target,      text: t("locations.feature3") },
  ];

  return (
    <section id="locations" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(201, 168, 124, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#4A3746" }}>{t("locations.badge")}</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            {t("locations.title")}
          </h3>

          <p className="text-xl max-w-3xl mx-auto mb-6 text-left" style={{ color: "#3C3C3C" }}>
            {t("locations.description")}
          </p>

          <p className="text-base max-w-3xl mx-auto text-left italic px-5 py-4 rounded-2xl border-l-4" style={{ color: "#4A3746", borderColor: "#C9A87C", backgroundColor: "rgba(201, 168, 124, 0.06)" }}>
            {t("locations.description2")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border"
                  style={{ borderColor: "rgba(201, 168, 124, 0.15)" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F8F4EF" }}>
                    <feature.icon className="w-5 h-5" style={{ color: "#C9A87C" }} />
                  </div>
                  <span className="font-medium pt-2" style={{ color: "#212529" }}>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl border"
              style={{ borderColor: "rgba(201, 168, 124, 0.2)", backgroundColor: "rgba(248, 244, 239, 0.5)" }}
            >
              <div className="flex items-start gap-3 mb-4 min-w-0">
                <img src="/mandala.png" alt="" className="w-5 h-5 flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <p className="font-bold" style={{ color: "#212529" }}>{t("locations.addressLabel")}</p>
                  <a
                    href="https://www.google.com/maps/search/Av+Dr+Chucri+Zaidan+1550+cj+905+Vila+Cordeiro+São+Paulo+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline text-sm sm:text-base"
                    style={{ color: "#3C3C3C" }}
                  >
                    {t("locations.addressLine1")}<br />
                    {t("locations.addressLine2")}<br />
                    {t("locations.addressLine3")}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border"
            style={{ borderColor: "rgba(201, 168, 124, 0.15)" }}
          >
            <div style={{ position: "relative", minHeight: "480px" }}>
              <iframe
                src="https://maps.google.com/maps?q=Av+Dr+Chucri+Zaidan+1550+cj+905+Vila+Cordeiro+São+Paulo+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Consultório Dra. Júlia Saggiomo"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/Av+Dr+Chucri+Zaidan+1550+cj+905+Vila+Cordeiro+São+Paulo+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors hover:opacity-80 text-center"
              style={{ backgroundColor: "#F8F4EF", color: "#4A3746" }}
            >
              <img src="/mandala.png" alt="" className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">{t("locations.mapTitle")} — {t("locations.addressLine1")}</span>
              <span className="sm:hidden">Abrir no Google Maps</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
