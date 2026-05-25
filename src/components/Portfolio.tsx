import { ArrowUpRight, Bot, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Healthcare Management System",
    category: "Web Application",
    desc: "A modern healthcare platform with patient management, billing, reports, and admin dashboard.",
    icon: Globe,
  },
  {
    title: "AI Report Automation",
    category: "AI Solution",
    desc: "An AI-powered workflow for generating smart reports and reducing manual work.",
    icon: Bot,
  },
  {
    title: "Business Mobile App",
    category: "React Native App",
    desc: "A responsive mobile application for business operations, tracking, and customer engagement.",
    icon: Smartphone,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-600">
              Portfolio
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              A few sample project ideas that represent the type of digital
              solutions I can build for clients.
            </p>
          </div>

          <button className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600">
            View All Projects
          </button>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-60 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-700 p-6">
                  <div className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white backdrop-blur-md">
                    <Icon size={28} />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/10 p-5 text-white backdrop-blur-md">
                    <p className="text-sm text-blue-100">{project.category}</p>
                    <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                  </div>

                  <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-blue-400/30 blur-2xl" />
                </div>

                <div className="p-6">
                  <p className="text-sm leading-6 text-slate-600">
                    {project.desc}
                  </p>

                  <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                    View Case Study
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}