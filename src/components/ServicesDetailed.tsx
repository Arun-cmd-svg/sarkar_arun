import {
  Activity,
  CheckCircle2,
  Code2,
  Database,
  LayoutDashboard,
  MessageSquareText,
  Server,
  Smartphone,
  Truck,
} from "lucide-react";

const services = [
  {
    title: "Business Website Development",
    desc: "I create modern business websites, landing pages, portfolio websites, and SEO-friendly websites that help brands build trust and generate leads.",
    icon: Code2,
    deliverables: [
      "Corporate website",
      "Landing page",
      "Portfolio website",
      "SEO-ready structure",
      "Contact form",
      "WhatsApp integration",
    ],
    skills: ["Next.js", "React", "Angular", "Tailwind CSS", "SEO"],
  },
  {
    title: "Healthcare & LIMS Software",
    desc: "I build healthcare software modules such as patient management, billing, reports, sample tracking, and lab workflow automation.",
    icon: Activity,
    deliverables: [
      "Patient management",
      "Billing workflow",
      "Report system",
      "Sample tracking",
      "Role-based access",
      "Operational dashboard",
    ],
    skills: ["Angular", "NestJS", "PostgreSQL", "REST API", "Healthcare Flow"],
  },
  {
    title: "Admin Dashboard Development",
    desc: "I design and develop powerful admin dashboards with analytics, reports, charts, filters, user roles, and real-time business monitoring.",
    icon: LayoutDashboard,
    deliverables: [
      "Analytics dashboard",
      "Reports & charts",
      "User management",
      "Role permissions",
      "KPI tracking",
      "Data tables",
    ],
    skills: ["Angular", "React", "Charts", "API Integration", "UI/UX"],
  },
  {
    title: "Mobile App Development",
    desc: "I develop cross-platform mobile apps for healthcare, logistics, tracking, field staff, and business operations.",
    icon: Smartphone,
    deliverables: [
      "Android app",
      "iOS app",
      "API integration",
      "Push notifications",
      "User authentication",
      "App deployment support",
    ],
    skills: ["React Native", "Expo", "Ionic", "REST API", "Firebase"],
  },
  {
    title: "Logistics & Tracking Systems",
    desc: "I build logistics and tracking solutions with live location, delivery status, route updates, and operational visibility.",
    icon: Truck,
    deliverables: [
      "Live tracking",
      "Route management",
      "Delivery status",
      "ETA alerts",
      "Tracking dashboard",
      "Mobile tracking app",
    ],
    skills: ["React Native", "Maps API", "Geolocation", "Node.js", "API"],
  },
  {
    title: "Feedback Management System",
    desc: "I build feedback platforms where businesses can collect, analyze, and manage customer feedback using dashboards and reports.",
    icon: MessageSquareText,
    deliverables: [
      "Feedback forms",
      "Review tracking",
      "Satisfaction reports",
      "Analytics dashboard",
      "Action tracking",
      "CRM-ready workflow",
    ],
    skills: ["React", "Angular", "NestJS", "PostgreSQL", "Dashboard UI"],
  },
];

const knowledge = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["Angular", "React", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "REST APIs", "Authentication", "Email APIs"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "Query Design", "Data Modeling"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "Ionic", "Android/iOS Builds"],
  },
];

export default function ServicesDetailed() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        {/* Knowledge Section */}
        <div className="mb-16 rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase text-blue-600">
              My Technical Knowledge
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900">
              Skills & Technologies I Work With
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              I work across frontend, backend, mobile apps, databases, APIs,
              dashboards, and business automation systems.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {knowledge.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="grid overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl lg:grid-cols-[0.9fr_1.1fr]"
              >
                {/* Left */}
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 p-8 text-white md:p-10">
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400/30 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl" />

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-white backdrop-blur-md">
                      <Icon size={30} />
                    </div>

                    <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-blue-200">
                      Service 0{index + 1}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold leading-tight">
                      {service.title}
                    </h2>

                    <p className="mt-5 max-w-xl leading-7 text-blue-100">
                      {service.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 backdrop-blur-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="p-8 md:p-10">
                  <h3 className="text-xl font-bold text-slate-900">
                    What I Provide
                  </h3>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {service.deliverables.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <CheckCircle2
                          size={20}
                          className="shrink-0 text-blue-600"
                        />

                        <span className="text-sm font-semibold text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="/#contact-form"
                      className="inline-flex rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
                    >
                      Discuss This Service
                    </a>

                    <a
                      href="/portfolio"
                      className="inline-flex rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
                    >
                      View Related Work
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