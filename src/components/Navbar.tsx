"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/blog" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/#contact-form" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (link: string) => {
    if (link === "/") {
      return pathname === "/";
    }

    if (link.includes("#")) {
      return false;
    }

    return pathname === link || pathname.startsWith(`${link}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <h2 className="text-xl font-bold text-slate-900">
            {siteConfig.name}
          </h2>
          <p className="text-xs text-slate-500">{siteConfig.tagline}</p>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          {navLinks.map((item) => {
            const isActive = isActiveLink(item.link);

            return (
              <Link
                key={item.name}
                href={item.link}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <Link
          href="/#contact-form"
          className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 md:inline-block"
        >
          Let’s Talk
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-slate-300 px-3 py-2 text-slate-700 md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => {
              const isActive = isActiveLink(item.link);

              return (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/#contact-form"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}