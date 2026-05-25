import {
  Bot,
  CheckCircle2,
  Code2,
  LayoutDashboard,
  Search,
  Smartphone,
} from "lucide-react";

const detailedServices = [
  {
    title: "Website Development",
    desc: "I build modern, fast, responsive websites for businesses, professionals, clinics, startups, and service providers.",
    icon: Code2,
    features: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "SEO-ready structure",
      "Responsive design",
    ],
  },
  {
    title: "Mobile App Development",
    desc: "I create cross-platform mobile apps for Android and iOS using modern technologies and clean UI.",
    icon: Smartphone,
    features: [
      "React Native apps",
      "Android & iOS support",
      "API integration",
      "User-friendly UI",
      "Production-ready builds",
    ],
  },
  {
    title: "AI Automation",
    desc: "I help businesses reduce manual work using AI tools, chatbots, automation workflows, and smart systems.",
    icon: Bot,
    features: [
      "AI chatbots",
      "Workflow automation",
      "Smart report generation",
      "Business process automation",
      "AI tool integration",
    ],
  },
  {
    title: "Admin Dashboards",
    desc: "I design and develop powerful dashboards for managing business operations, reports, analytics, and users.",
    icon: LayoutDashboard,
    features: [
      "Admin panels",
      "Analytics dashboards",
      "Role-based access",
      "Reports & charts",
      "Data management",
    ],
  },
  {
    title: "SEO & Blog Website",
    desc: "I create SEO-friendly blogs and content websites that help businesses attract organic traffic and leads.",
    icon: Search,
    features: [
      "Blog setup",
      "SEO structure",
      "Fast loading pages",
      "Content categories",
      "Google indexing setup",
    ],
  },
];

export default function ServicesDetailed() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">
          {detailedServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-blue-600">
                  <Icon size={30} />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.desc}
                </p>

                <div className="mt-6 grid gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-blue-600" />
                      <span className="text-sm font-medium text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="/#contact-form"
                  className="mt-8 inline-flex rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Discuss This Service
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}