import React from "react";
import { motion } from "framer-motion";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../assets/F1.jpg"; // Pastikan gambar ada di src/assets/

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* ==== Text + Buttons ==== */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-2/3"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hi, I’m <span className="text-[#F87B1B]">Salman</span>.
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          Fresh graduate from Universitas Komputer Indonesia with strong
          interest in web programming, data processing, and system analysis.
        </p>

        {/* ==== Ikon Sosial Media ==== */}
        <div className="flex items-center space-x-6 text-gray-400 text-2xl relative z-10">
          <a
            href="#contact"
            title="Email"
            className="hover:text-[#F87B1B] transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://wa.me/6283819249565"
            title="WhatsApp"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#25D366] transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.instagram.com/salmannst._"
            title="Instagram"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#E1306C] transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://github.com/SalmnN"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F87B1B] transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/salman-nst"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0A66C2] transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </motion.div>

      {/* ==== Foto Profil ==== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-48 h-48 rounded-full shadow-lg border-4 border-[#F87B1B] overflow-hidden flex items-center justify-center"
      >
        <img
          src={photo}
          alt="Salman Alfarisi"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
