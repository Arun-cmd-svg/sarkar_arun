"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  Code2,
  LayoutDashboard,
  Smartphone,
  Activity,
  Truck,
  MessageSquareText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [

  {
    title: "Admin Dashboard Development",
    desc: "I create powerful admin dashboards with analytics, KPI tracking, role-based access, reports, charts, and real-time business monitoring features.",
    icon: LayoutDashboard,
    image: "/images/dashboard.png",
  },
  {
    title: "Logistics & Tracking Apps",
    desc: "I build mobile applications for logistics, shipment tracking, route updates, geolocation tracking, delivery status, and real-time operational visibility.",
    icon: Truck,
    image: "/images/image9.png",
  },
  
  {
    title: "Healthcare Mobile Apps",
    desc: "I develop healthcare mobile applications such as phlebotomy apps, home collection apps, patient workflow apps, sample tracking, and field staff management tools.",
    icon: Smartphone,
    image: "/images/image13.png",
  },
  {
    title: "Feedback Management System",
    desc: "I build web and mobile feedback systems with custom feedback forms, real-time analytics, satisfaction tracking, reporting, and CRM-ready integration.",
    icon: MessageSquareText,
    image: "/images/image14.png",
  },
    {
    title: "Business Website Development",
    desc: "I build modern, responsive, SEO-friendly corporate and business websites that improve digital presence and generate client leads through contact forms and WhatsApp integration.",
    icon: Code2,
    image: "/images/image17.png",
  },
    {
    title: "Healthcare Management System",
    desc: "I develop secure healthcare web applications for patient onboarding, billing, electronic health records, reporting, and internal operational workflow automation.",
    icon: Activity,
    image: "/images/image18.png",
  },
];

export default function Services() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.clientWidth * 0.85;

    sliderRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-600">
              What I Do
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900">
              Services I Offer
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              I provide complete digital solutions from design to development,
              deployment, automation, and business growth.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scrollSlider("left")}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-600 hover:text-blue-600"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => scrollSlider("right")}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm transition hover:bg-blue-700"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group min-w-full snap-start overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
              >
                <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
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