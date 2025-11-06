import React from "react";

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-[#0e1525]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-[#F87B1B]">Salman Alfarisi Nasution</h1>
        <nav className="space-x-6 text-gray-300">
          {["About", "Experience", "Education", "Skills"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#F87B1B] transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
