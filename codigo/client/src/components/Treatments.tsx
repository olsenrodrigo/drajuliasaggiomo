import { motion } from "framer-motion";
import { Zap, Shield, Heart, Sparkles, Activity, Scissors, Stethoscope, Leaf, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Treatments() {
  const { t } = useTranslation();

  const treatments = [
    { icon: Zap,          text: t("treatments.treatment1"),  desc: t("treatments.treatment1Desc") },
    { icon: Zap,          text: t("treatments.treatment2"),  desc: t("treatments.treatment2Desc") },
    { icon: Shield,       text: t("treatments.treatment3"),  desc: t("treatments.treatment3Desc") },
    { icon: Activity,     text: t("treatments.treatment4"),  desc: t("treatments.treatment4Desc") },
    { icon: Heart,        text: t("treatments.treatment5"),  desc: t("treatments.treatment5Desc") },
    { icon: Sparkles,     text: t("treatments.treatment6"),  desc: t("treatments.treatment6Desc") },
    { icon: Activity,     text: t("treatments.treatment7"),  desc: t("treatments.treatment7Desc") },
    { icon: Scissors,     text: t("treatments.treatment8"),  desc: t("treatments.treatment8Desc") },
    { icon: Stethoscope,  text: t("treatments.treatment9"),  desc: t("treatments.treatment9Desc") },
    { icon: Leaf,         text: t("treatments.treatment10"), desc: t("treatments.treatment10Desc") },
  ];

  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#F8F4EF" }}>
            <span className="text-sm font-medium" style={{ color: "#C9A87C" }}>{t("treatments.badge")}</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#212529" }}>
            {t("treatments.title")}
          </h3>
          <p className="text-xl md:text-2xl font-medium mb-6" style={{ color: "#C9A87C" }}>
            {t("treatments.titleSub")}
          </p>

          <p className="text-lg max-w-4xl mx-auto" style={{ color: "#3C3C3C" }}>
            {t("treatments.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {treatments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-lg border hover:shadow-xl transition-all"
              style={{ borderColor: "rgba(201, 168, 124, 0.15)" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5" style={{ backgroundColor: "#F8F4EF" }}>
                <item.icon className="w-5 h-5" style={{ color: "#C9A87C" }} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-sm leading-snug" style={{ color: "#212529" }}>{item.text}</span>
                <span className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 max-w-3xl mx-auto p-6 rounded-xl"
          style={{ backgroundColor: "rgba(201, 168, 124, 0.08)" }}
        >
          <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#C9A87C" }} />
          <p className="text-base" style={{ color: "#3C3C3C" }}>
            {t("treatments.note")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
