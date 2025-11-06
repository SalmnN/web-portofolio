import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold text-[#F87B1B] mb-6">Work Experience</h3>
      <div className="space-y-6">
        <div className="bg-[#10182b] p-6 rounded-lg border border-gray-800 hover:border-[#F87B1B] transition">
          <h4 className="font-semibold text-white">
            PT. EJPEACE KARYA INDONESIA — Magang
          </h4>
          <p className="text-sm text-gray-400">Aug 2024 - Aug 2025</p>
          <p className="mt-2 text-gray-300">
            Developed Infini Apparel commercial website including UI design,
            payment integration, and responsive optimization.
          </p>
        </div>

        <div className="bg-[#10182b] p-6 rounded-lg border border-gray-800 hover:border-[#F87B1B] transition">
          <h4 className="font-semibold text-white">
            PT. Revolusi Cita Edukasi — Project Leader
          </h4>
          <p className="text-sm text-gray-400">Oct 2023 - Dec 2023</p>
          <p className="mt-2 text-gray-300">
            Led development of COSPACE Hotel Program using JavaScript and
            Express.js.
          </p>
        </div>
      </div>
    </section>
  );
}
