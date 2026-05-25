"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/#about" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/#contact-form" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home">
          <h2 className="text-xl font-bold text-slate-900">
            {siteConfig.name}
          </h2>
          <p className="text-xs text-slate-500">{siteConfig.tagline}</p>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 md:inline-block"
        >
          Let’s Talk
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-slate-300 px-3 py-2 text-slate-700 md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}