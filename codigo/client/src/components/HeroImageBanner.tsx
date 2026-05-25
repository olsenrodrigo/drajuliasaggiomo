import { motion } from "framer-motion";

export default function HeroImageBanner() {
  return (
    <div className="w-full bg-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
          style={{
            height: "440px",
            border: "1px solid rgba(201, 168, 124, 0.25)",
          }}
        >
          <img
            src="https://drajuliasaggiomo.com.br/imagens/cirurgias_combinadas/cirurgias_combinadas3.jpg"
            alt="Cirurgias combinadas — Dra. Júlia Saggiomo"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 42%" }}
          />
          {/* Overlay lateral esquerdo com texto */}
          <div
            className="absolute inset-y-0 left-0 w-1/2 flex flex-col justify-end p-8 sm:p-10"
            style={{
              background: "linear-gradient(to right, rgba(74, 55, 70, 0.72) 0%, transparent 100%)",
            }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: "rgba(201, 168, 124, 0.9)" }}
            >
              Excelência em Resultados
            </p>
            <h4
              className="text-xl sm:text-2xl font-bold leading-snug text-white"
            >
              Cirurgias combinadas<br />para resultados integrados
            </h4>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
