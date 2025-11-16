import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16">
      <motion.div
      initial={{ opacity: 0, x: 80 }}           // mulai dari kiri (x negatif)
      whileInView={{ opacity: 1, x: 0 }}         // bergerak ke posisi normal
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-5xl mx-auto px-6 py-16"
      >
        <h3 className="text-2xl font-bold text-[#F87B1B] mb-4">About Me</h3>
        <p className="text-gray-300 leading-relaxed">
          I am Salman Alfarisi Nasution, a fresh graduate from Universitas
          Komputer Indonesia. I enjoy building interactive websites, processing
          data, and analyzing systems to solve real-world problems. My focus
          areas include web programming, data analysis, and business system
          analysis.
        </p>
      </motion.div>
    </section>
  );
}
