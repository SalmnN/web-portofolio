import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 text-center py-6 text-gray-400">
      © {new Date().getFullYear()} Salman Alfarisi Nasution — Built with React + Tailwind
    </footer>
  );
}
