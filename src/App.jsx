import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Organization from "./components/Organization";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-gray-100 font-sans">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Organization />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
