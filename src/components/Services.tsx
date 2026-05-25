import Image from "next/image";
import { Bot, Code2, LayoutDashboard, Smartphone } from "lucide-react";

const services = [
  {
    title: "Business Website",
    desc: "Modern, responsive business websites with clean UI and strong SEO foundation.",
    icon: Code2,
    image:  "/images/business-website.png",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform Android and iOS apps using React Native and scalable APIs.",
    icon: Smartphone,
    image: "/images/mobile-app.png",
  },
  {
    title: "AI Automation",
    desc: "AI chatbots, smart workflows, report automation, and business process tools.",
    icon: Bot,
    image:  "/images/ai-automation.png",
  },
  {
    title: "Admin Dashboards",
    desc: "Powerful dashboards for operations, analytics, finance, healthcare, and logistics.",
    icon: LayoutDashboard,
    image: "/images/healthcare-dashboard.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase text-blue-600">
            What I Do
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Services I Offer
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            I provide complete digital solutions from design to development,
            deployment, automation, and business growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-4 transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                    <Icon size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.desc}
                  </p>

                  <a
                    href="/services"
                    className="mt-5 inline-flex text-sm font-semibold text-blue-600"
                  >
                    Learn More →
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