import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  {
    code: "pt",
    path: "/",
    label: "Português",
    flag: (
      <svg width="24" height="16" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="480" fill="#009c3b" />
        <polygon points="320,39 609,240 320,441 31,240" fill="#ffdf00" />
        <circle cx="320" cy="240" r="95" fill="#002776" />
        <path d="M195,240 C195,240 257,195 320,210 C383,225 445,240 445,240 C445,240 383,275 320,260 C257,245 195,240 195,240 Z" fill="white" />
      </svg>
    ),
  },
  {
    code: "en",
    path: "/en",
    label: "English",
    flag: (
      <svg width="24" height="16" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="480" fill="#012169" />
        <path d="M0,0 L640,480 M640,0 L0,480" stroke="white" strokeWidth="60" />
        <path d="M0,0 L640,480 M640,0 L0,480" stroke="#C8102E" strokeWidth="40" />
        <path d="M320,0 V480 M0,240 H640" stroke="white" strokeWidth="100" />
        <path d="M320,0 V480 M0,240 H640" stroke="#C8102E" strokeWidth="60" />
      </svg>
    ),
  },
  {
    code: "it",
    path: "/it",
    label: "Italiano",
    flag: (
      <svg width="24" height="16" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="213.3" height="480" fill="#009246" />
        <rect x="213.3" width="213.4" height="480" fill="white" />
        <rect x="426.7" width="213.3" height="480" fill="#CE2B37" />
      </svg>
    ),
  },
  {
    code: "zh",
    path: "/zh",
    label: "中文",
    active: false, // Mandarin não contratado — manter estrutura para ativação futura
    flag: (
      <svg width="24" height="16" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="480" fill="#DE2910" />
        <g transform="translate(107,160)" fill="#FFDE00">
          <polygon points="0,-48 11,-15 46,-15 18,6 29,39 0,18 -29,39 -18,6 -46,-15 -11,-15" />
        </g>
        <g transform="translate(200,80)" fill="#FFDE00">
          <polygon points="0,-16 4,-5 15,-5 6,2 10,13 0,6 -10,13 -6,2 -15,-5 -4,-5" />
        </g>
        <g transform="translate(224,128)" fill="#FFDE00">
          <polygon points="0,-16 4,-5 15,-5 6,2 10,13 0,6 -10,13 -6,2 -15,-5 -4,-5" />
        </g>
        <g transform="translate(224,192)" fill="#FFDE00">
          <polygon points="0,-16 4,-5 15,-5 6,2 10,13 0,6 -10,13 -6,2 -15,-5 -4,-5" />
        </g>
        <g transform="translate(200,240)" fill="#FFDE00">
          <polygon points="0,-16 4,-5 15,-5 6,2 10,13 0,6 -10,13 -6,2 -15,-5 -4,-5" />
        </g>
      </svg>
    ),
  },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (code: string, path: string) => {
    i18n.changeLanguage(code);
    setLocation(path);
    setIsOpen(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-all hover:bg-gray-50 cursor-pointer"
        style={{ borderColor: "rgba(91, 140, 155, 0.3)" }}
        aria-label="Select language"
      >
        <span className="flex-shrink-0 rounded overflow-hidden shadow-sm">{currentLang.flag}</span>
        <span className="text-xs font-medium hidden sm:inline" style={{ color: "#494949" }}>
          {currentLang.code.toUpperCase()}
        </span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M1 1L5 5L9 1" stroke="#494949" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border overflow-hidden z-50"
            style={{ borderColor: "rgba(91, 140, 155, 0.2)", minWidth: "160px" }}
          >
            {languages.filter((l) => l.active !== false).map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code, lang.path)}
                className="flex items-center gap-3 w-full px-4 py-3 text-left transition-colors hover:bg-gray-50 cursor-pointer"
                style={{
                  backgroundColor: lang.code === i18n.language ? "rgba(91, 140, 155, 0.08)" : "transparent",
                }}
              >
                <span className="flex-shrink-0 rounded overflow-hidden shadow-sm">{lang.flag}</span>
                <span
                  className="text-sm font-medium"
                  style={{ color: lang.code === i18n.language ? "#C9A87C" : "#494949" }}
                >
                  {lang.label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
