import {
  ArrowUpRight,
  Globe,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Tata Steel Mining",
    category: "Website Development",
    desc: "A responsive, high-performance corporate website designed to enhance digital presence, showcase enterprise mining operations, and streamline B2B lead generation via integrated smart contact forms and direct WhatsApp channels.",
    icon: Globe,
    image: "/images/image17.png",
    tags: ["Angular", "Html", "Css", "Tailwind", "SEO"],
  },
  {
    title: "Healthcare Management System",
    category: "Web Application",
    desc: "An enterprise-grade hospital information system designed to automate patient onboarding, secure electronic health records, streamline medical billing, and optimize internal workflows for healthcare professionals.",
    icon: LayoutDashboard,
    image: "/images/image18.png",
    tags: ["Angular", "NodeJS", "NestJS", "PostgreSQL"],
  },
  {
    title: "Admin Dashboard",
    category: "Web Application",
    desc: "A comprehensive central command center using live data visualization, granular analytics, and role-based access control to monitor system health, track KPIs, and identify operational bottlenecks.",
    icon: LayoutDashboard,
    image: "/images/dashboard.png",
    tags: ["Angular", "ReactJs", "NodeJs", "NestJS", "PostgreSQL"],
  },
  {
    title: "Logistics Mobile App",
    category: "Mobile App",
    desc: "A cross-platform mobile application with real-time fleet tracking, instant push notifications, secure client authentication, and an interactive shipment management dashboard.",
    icon: Smartphone,
    image: "/images/image9.png",
    tags: ["React Native", "API", "Android/iOS"],
  },
  {
    title: "Phlebotomy Mobile App",
    category: "Mobile App",
    desc: "A healthcare application for field phlebotomists to manage home collection requests, optimize routes, track patient order statuses, and safely log sample data on the go.",
    icon: Smartphone,
    image: "/images/image13.png",
    tags: ["React Native", "API", "Android/iOS"],
  },
  {
    title: "Tracking Mobile App",
    category: "Mobile App",
    desc: "A hybrid geolocation mobile app providing real-time asset tracking, geofencing alerts, and comprehensive travel history logs with accurate coordinate tracking.",
    icon: Smartphone,
    image: "/images/image12.png",
    tags: ["React Native", "Ionic", "API", "Android/iOS"],
  },
  {
    title: "Feedback Management System",
    category: "Mobile / Web",
    desc: "A hybrid application designed to streamline user feedback collection and analysis with real-time dashboards, customizable forms, and CRM-ready workflows.",
    icon: LayoutDashboard,
    image: "/images/image14.png",
    tags: ["ReactJS", "NodeJS", "NestJS", "PostgreSQL"],
  },
];

export default function PortfolioDetailed() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={project.title}
                className={`group grid overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-2 ${
                  isReverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image Side */}
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 lg:min-h-[420px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-6 transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-6 top-6 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur-md">
                  Case Study 0{index + 1}
                </div>

                <div className="absolute bottom-6 left-6 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  {project.category}
                </div>
              </div>

                {/* Content Side */}
                <div className="relative flex flex-col justify-center p-8 md:p-10">
                  <div className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Featured Project
                  </p>

                  <h2 className="mt-4 pr-16 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
                    {project.title}
                  </h2>

                  <p className="mt-5 leading-8 text-slate-600">
                    {project.desc}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="/#contact-form"
                      className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
                    >
                      Discuss Similar Project
                      <ArrowUpRight size={16} />
                    </a>

                    <a
                      href="/services"
                      className="inline-flex rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
                    >
                      View Services
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}