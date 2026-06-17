import { motion } from "framer-motion";
import { Palette, Microscope, Target, ArrowRight } from "lucide-react";
import { Link } from "wouter";
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
            <span className="text-sm font-medium" style={{ color: "#6a363d" }}>{t("locations.badge")}</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            {t("locations.title")}
          </h3>

          <p className="text-xl max-w-3xl mx-auto mb-6 text-left" style={{ color: "#3C3C3C" }}>
            {t("locations.description")}
          </p>

          <p className="text-base max-w-3xl mx-auto text-left italic px-5 py-4 rounded-2xl border-l-4" style={{ color: "#6a363d", borderColor: "#C9A87C", backgroundColor: "rgba(201, 168, 124, 0.06)" }}>
            {t("locations.description2")}
          </p>
        </motion.div>

        {/* Photo preview strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto mb-8"
        >
          {[
            { src: "/imagens/o_instituto_saggiomo/recepcao.jpg", alt: "Recepção" },
            { src: "/imagens/o_instituto_saggiomo/salaatendimento1.jpg", alt: "Sala de consulta" },
            { src: "/imagens/o_instituto_saggiomo/decoracaocorredor.jpg", alt: "Ambientação" },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden shadow-sm aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Instituto link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Link
            href="/instituto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #C9A87C 0%, #6a363d 100%)" }}
          >
            {t("locations.knowButton")}
            <ArrowRight className="w-4 h-4" />
          </Link>
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
                    href="https://www.google.com/maps?q=Av.+Dr.+Chucri+Zaidan,+1550+-+1817+-+Vila+S%C3%A3o+Francisco,+S%C3%A3o+Paulo+-+SP,+04711-130&ftid=0x94ce50cee7115555:0xa48fe3a1518e83d4"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.40146717129!2d-46.704803824381294!3d-23.625789378755524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50dc5bbcedab%3A0x853e50aa504809b!2sAv.%20Dr.%20Chucri%20Zaidan%2C%201550%20-%20Vila%20Sao%20Francisco%20(Zona%20Sul)%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004711-130!5e0!3m2!1spt-BR!2sbr!4v1777469688486!5m2!1spt-BR!2sbr"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Consultório Dra. Júlia Saggiomo"
              />
            </div>
            <a
              href="https://www.google.com/maps?q=Av.+Dr.+Chucri+Zaidan,+1550+-+1817+-+Vila+S%C3%A3o+Francisco,+S%C3%A3o+Paulo+-+SP,+04711-130&ftid=0x94ce50cee7115555:0xa48fe3a1518e83d4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors hover:opacity-80 text-center"
              style={{ backgroundColor: "#F8F4EF", color: "#6a363d" }}
            >
              <img src="/mandala.png" alt="" className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">{t("locations.mapTitle")} — {t("locations.addressLine1")}</span>
              <span className="sm:hidden">{t("locations.openMaps")}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
