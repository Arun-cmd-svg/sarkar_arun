import {
  ArrowUpRight,
  Bot,
  Globe,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Business Website",
    category: "Website Development",
    desc: "A responsive business website designed to attract clients, explain services, and generate leads through contact forms and WhatsApp.",
    icon: Globe,
    image: "/images/business-website.png",
    tags: ["Next.js", "Tailwind", "SEO"],
  },
  {
    title: "Healthcare Management System",
    category: "Web Application",
    desc: "A web-based system for managing patients, billing, reports, users, and operational workflows.",
    icon: LayoutDashboard,
    image: "/images/healthcare-dashboard.png",
    tags: ["Angular", "NestJS", "PostgreSQL"],
  },
  {
    title: "AI Report Automation",
    category: "AI Automation",
    desc: "An AI-powered automation tool that helps generate structured reports and reduce manual repetitive work.",
    icon: Bot,
    image: "/images/ai-automation.png",
    tags: ["AI", "Automation", "API"],
  },
  {
    title: "Customer Mobile App",
    category: "Mobile App",
    desc: "A cross-platform mobile app for customers with login, dashboard, notifications, and service tracking.",
    icon: Smartphone,
    image: "/images/mobile-app.png",
    tags: ["React Native", "API", "Android/iOS"],
  },
];

export default function PortfolioDetailed() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden bg-slate-100">
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

            <div className="absolute right-6 top-6 rounded-2xl bg-white/90 p-3 text-blue-600 shadow-lg backdrop-blur-md">
                <Icon size={28} />
            </div>

            <div className="absolute bottom-6 left-6 right-6">
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                {project.category}
                </span>

                <h2 className="mt-4 max-w-md text-3xl font-bold text-white">
                {project.title}
                </h2>
            </div>
            </div>

                <div className="p-8">
                  <p className="leading-7 text-slate-600">{project.desc}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/#contact-form"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                  >
                    Discuss Similar Project
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}