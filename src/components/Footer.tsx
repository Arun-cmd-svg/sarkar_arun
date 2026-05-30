import Link from "next/link";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/#contact-form" },
];

const services = [
  { name: "Website Development", link: "/services" },
  { name: "Mobile App Development", link: "/services" },
  { name: "AI Automation", link: "/services" },
  { name: "Admin Dashboard", link: "/services" },
  { name: "SEO Optimization", link: "/services" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/">
            <h2 className="text-2xl font-bold text-slate-900">
              {siteConfig.name}
            </h2>
          </Link>

          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
            I build modern websites, mobile apps, AI automation tools, and
            scalable digital solutions for growing businesses.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Quick Links</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="transition hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Services</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {services.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="transition hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
        <p>© 2026 {siteConfig.name}. All rights reserved.</p>

        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}