import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold text-[#F87B1B] mb-4">
        Skills & Certificates
      </h3>
      <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
        <li className="bg-[#10182b] p-4 rounded-lg border border-gray-800">
          Web Programming (React, JavaScript)
        </li>
        <li className="bg-[#10182b] p-4 rounded-lg border border-gray-800">
          Data Processing (Python, Pandas)
        </li>
        <li className="bg-[#10182b] p-4 rounded-lg border border-gray-800">
          System Analysis & Design
        </li>
        <li className="bg-[#10182b] p-4 rounded-lg border border-gray-800">
          BNSP Certified Junior Web Programmer
        </li>
      </ul>
    </section>
  );
}
