import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Play, MapPin, Clock, Phone, Wifi, Car } from "lucide-react";

const SECTIONS = {
  recepcao: [
    { src: "/imagens/o_instituto_saggiomo/recepcao.jpg", alt: "Recepção do Instituto Saggiomo" },
  ],
  salas: [
    { src: "/imagens/o_instituto_saggiomo/salaatendimento1.jpg", alt: "Sala de consulta 1" },
    { src: "/imagens/o_instituto_saggiomo/salaatendimento2.jpg", alt: "Sala de consulta 2" },
    { src: "/imagens/o_instituto_saggiomo/salaprocedimentos.jpg", alt: "Sala de procedimentos" },
  ],
  decoracao: [
    { src: "/imagens/o_instituto_saggiomo/decoracaocorredor.jpg", alt: "Corredor do Instituto" },
    { src: "/imagens/o_instituto_saggiomo/decoracaopbarts.jpg", alt: "Curadoria artística" },
    { src: "/imagens/o_instituto_saggiomo/decoracaoplanta.jpg", alt: "Área verde" },
    { src: "/imagens/o_instituto_saggiomo/decoracaotoillet.jpg", alt: "Área de toalete" },
  ],
  acao: [
    { src: "/imagens/o_instituto_saggiomo/drajuliaprocedimento.jpg", alt: "Dra. Júlia em procedimento" },
    { src: "/imagens/o_instituto_saggiomo/drajliaprocedimento2.jpg", alt: "Dra. Júlia em procedimento" },
    { src: "/imagens/o_instituto_saggiomo/draequipamento.jpg", alt: "Dra. Júlia com equipamento Fotona" },
  ],
};

export default function Instituto() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title = "Instituto Saggiomo — Dra. Júlia Saggiomo";
    return () => { document.title = "Dra. Júlia Saggiomo — Cirurgia Plástica"; };
  }, []);

  const playVideo = () => {
    videoRef.current?.play()
      .then(() => setVideoPlaying(true))
      .catch(() => {});
  };

  return (
    <div className="min-h-screen bg-white">

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
          <img
            src="/imagens/o_instituto_saggiomo/institutologo.png"
            alt="Instituto Saggiomo"
            className="h-10 w-auto"
            style={{
              filter: "invert(74%) sepia(24%) saturate(600%) hue-rotate(352deg) brightness(88%) contrast(90%)",
            }}
          />
          <div style={{ width: 96 }} />
        </div>
      </header>

      {/* Video Hero */}
      <section className="relative overflow-hidden" style={{ height: "72vh", minHeight: 480 }}>
        <video
          ref={videoRef}
          src="/imagens/o_instituto_saggiomo/o_instituto_saggiomo1.mov"
          poster="/imagens/o_instituto_saggiomo/recepcao.jpg"
          preload="none"
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={() => setVideoPlaying(false)}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)" }}
        />

        {!videoPlaying && (
          <button
            onClick={playVideo}
            className="absolute inset-0 flex flex-col items-center justify-center gap-5 focus:outline-none"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                border: "2px solid rgba(255,255,255,0.8)",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(4px)",
              }}
            >
              <Play className="w-8 h-8 fill-white text-white ml-1" />
            </motion.div>
            <span className="text-white text-xs tracking-[0.2em] uppercase font-light">
              Assista ao Instituto
            </span>
          </button>
        )}

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-16 text-center text-white pointer-events-none">
          <h1
            className="text-6xl md:text-8xl"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              letterSpacing: "0.04em",
              textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            }}
          >
            Instituto Saggiomo
          </h1>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-20" style={{ backgroundColor: "#F8F4EF" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "rgba(201, 168, 124, 0.15)" }}
            >
              <span className="text-sm font-medium" style={{ color: "#6a363d" }}>Nossa Filosofia</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ color: "#212529" }}
            >
              Mais do que uma clínica
            </h2>
            <p className="text-xl leading-relaxed mb-6" style={{ color: "#3C3C3C" }}>
              O Instituto Saggiomo é uma clínica conceito, disruptiva e pensada para ser um espaço de cuidado, confiança e
              transformação. Cada detalhe do ambiente foi projetado para proporcionar tranquilidade, conforto e um toque
              refinado de arte — para que a paciente desfrute plenamente de toda a sua jornada.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#3C3C3C" }}>
              Localizado no coração de Vila Cordeiro, em São Paulo, o Instituto ocupa um dos endereços comerciais mais
              prestigiados da cidade — o <strong>Capital Corporate Offices</strong> na Av. Dr. Chucri Zaidan, referência
              em sofisticação e excelência na zona sul paulistana.
            </p>
            <blockquote
              className="mt-12 p-7 rounded-2xl border-l-4 text-left"
              style={{ borderColor: "#C9A87C", backgroundColor: "rgba(201, 168, 124, 0.07)" }}
            >
              <p
                className="text-xl italic font-medium leading-relaxed"
                style={{ color: "#6a363d", fontFamily: "Cormorant Garamond, serif" }}
              >
                "Acredito que a verdadeira beleza está na harmonia e na confiança que cada paciente conquista ao se sentir
                bem consigo mesmo."
              </p>
              <footer className="mt-4 text-sm font-semibold tracking-wider" style={{ color: "#C9A87C" }}>
                — Dra. Júlia Saggiomo
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Ambiente com Toque de Arte",
                desc: "Cada espaço foi projetado com curadoria artística exclusiva — uma atmosfera que transmite serenidade e sofisticação, desde o primeiro passo na recepção até o pós-procedimento.",
              },
              {
                num: "02",
                title: "Tecnologia Certificada",
                desc: "Equipamentos de última geração e protocolos atualizados, incluindo o sistema Laser Fotona certificado — para resultados precisos, seguros e duradouros em cirurgias e tratamentos.",
              },
              {
                num: "03",
                title: "Atendimento Personalizado",
                desc: "Cada paciente é única. A jornada é inteiramente personalizada, da consulta inicial ao acompanhamento pós-procedimento, com escuta ativa e decisão sempre compartilhada.",
              },
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="p-8 rounded-2xl border"
                style={{ borderColor: "rgba(201, 168, 124, 0.2)", backgroundColor: "#FDFAF7" }}
              >
                <div
                  className="text-3xl font-bold mb-5"
                  style={{ color: "rgba(201,168,124,0.4)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {d.num}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#212529" }}>{d.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recepção */}
      <section className="py-16" style={{ backgroundColor: "#F8F4EF" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: "#212529" }}
              >
                A Recepção
              </h2>
              <p style={{ color: "#3C3C3C" }}>
                O primeiro contato com o Instituto — um ambiente que acolhe com elegância e serenidade.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="/imagens/o_instituto_saggiomo/recepcao.jpg"
                alt="Recepção do Instituto Saggiomo"
                className="w-full object-cover"
                style={{ height: "52vh", minHeight: 320 }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Salas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: "#212529" }}
              >
                Salas de Consulta e Procedimentos
              </h2>
              <p style={{ color: "#3C3C3C" }}>
                Ambientes projetados para o máximo de conforto, privacidade e eficiência clínica.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-4">
              {SECTIONS.salas.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-sm group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ambientação */}
      <section className="py-16" style={{ backgroundColor: "#F8F4EF" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: "#212529" }}
              >
                Ambientação &amp; Arte
              </h2>
              <p style={{ color: "#3C3C3C" }}>
                Cada detalhe pensado para proporcionar uma experiência sensorial única — arte, natureza e sofisticação integradas.
              </p>
            </motion.div>
            <div className="columns-2 lg:columns-4 gap-4">
              {SECTIONS.decoracao.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="break-inside-avoid mb-4 rounded-2xl overflow-hidden shadow-sm"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full block"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dra. em Ação */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: "#212529" }}
              >
                Dra. Júlia em Ação
              </h2>
              <p style={{ color: "#3C3C3C" }}>
                Excelência técnica e cuidado humanizado em cada atendimento — da consulta ao pós-operatório.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-4">
              {SECTIONS.acao.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-sm group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Informações + Mapa */}
      <section className="py-20" style={{ backgroundColor: "#F8F4EF" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-10 text-center"
              style={{ color: "#212529" }}
            >
              Visite o Instituto
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,168,124,0.15)" }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "#C9A87C" }} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: "#212529" }}>Endereço</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>
                      Av. Dr. Chucri Zaidan, 1550 — Conj. 1817/1818<br />
                      Vila Cordeiro, São Paulo/SP<br />
                      CEP 04711-130
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,168,124,0.15)" }}
                  >
                    <Clock className="w-5 h-5" style={{ color: "#C9A87C" }} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: "#212529" }}>Horários</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,168,124,0.15)" }}
                  >
                    <Phone className="w-5 h-5" style={{ color: "#C9A87C" }} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: "#212529" }}>Contato</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>
                      WhatsApp: (11) 93074-4540<br />
                      contato@institutosaggiomo.com.br
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-6 pt-2 text-sm font-medium"
                  style={{ color: "#6a363d" }}
                >
                  <span className="flex items-center gap-2">
                    <Wifi className="w-4 h-4" style={{ color: "#C9A87C" }} />
                    Wi-Fi gratuito
                  </span>
                  <span className="flex items-center gap-2">
                    <Car className="w-4 h-4" style={{ color: "#C9A87C" }} />
                    Estacionamento
                  </span>
                </div>

                <div className="pt-4">
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{ color: "#C9A87C" }}
                  >
                    Atendimento Particular
                  </p>
                  <a
                    href="https://wa.me/5511930744540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-opacity hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #C9A87C 0%, #6a363d 100%)" }}
                  >
                    Agendar via WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-lg border"
                style={{ borderColor: "rgba(201, 168, 124, 0.15)", minHeight: 360 }}
              >
                <div style={{ position: "relative", height: "100%", minHeight: 360 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.40146717129!2d-46.704803824381294!3d-23.625789378755524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50dc5bbcedab%3A0x853e50aa504809b!2sAv.%20Dr.%20Chucri%20Zaidan%2C%201550%20-%20Vila%20Sao%20Francisco%20(Zona%20Sul)%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004711-130!5e0!3m2!1spt-BR!2sbr!4v1777469688486!5m2!1spt-BR!2sbr"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Instituto Saggiomo - Google Maps"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 text-center text-white"
            style={{ background: "linear-gradient(135deg, #C9A87C 0%, #6a363d 100%)" }}
          >
            <h2 className="text-4xl font-bold mb-5 text-white">
              Venha nos conhecer
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#F8F4EF" }}>
              Agende uma consulta e experiencie pessoalmente o ambiente único do Instituto Saggiomo —
              onde cada detalhe foi pensado para você.
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
          </motion.div>
        </div>
      </section>

    </div>
  );
}
