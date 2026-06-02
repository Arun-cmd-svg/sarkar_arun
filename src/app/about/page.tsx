import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata = {
  title: "About",
  description:
    "Learn about Arun Web Studio, a personal web development brand focused on websites, mobile apps, dashboards, and AI automation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />

      {/* About Hero */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#DBEAFE,transparent_35%),radial-gradient(circle_at_top_right,#E0E7FF,transparent_35%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase text-blue-600">
              About Me
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
              Software Developer Helping Businesses Go Digital
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I build modern websites, mobile apps, admin dashboards, and AI
              automation solutions that help businesses improve their digital
              presence, save time, and attract more clients online.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-md">
                <h3 className="text-3xl font-extrabold text-slate-950">20+</h3>
                <p className="mt-1 text-sm text-slate-500">Projects</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-md">
                <h3 className="text-3xl font-extrabold text-slate-950">10+</h3>
                <p className="mt-1 text-sm text-slate-500">Tech Skills</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-md">
                <h3 className="text-3xl font-extrabold text-slate-950">100%</h3>
                <p className="mt-1 text-sm text-slate-500">Responsive</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact-form"
                className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Hire Me
              </a>

              <a
                href="/portfolio"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-blue-500 to-indigo-700 opacity-20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-white bg-white p-4 shadow-2xl">
              <Image
                src="/images/profile.png"
                alt="Profile picture"
                width={420}
                height={500}
                className="h-[500px] w-[420px] rounded-[32px] object-cover"
                priority
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/85 p-5 shadow-lg backdrop-blur-md">
                <p className="text-sm font-semibold text-blue-600">
                  Software Developer
                </p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  Web • Mobile • AI Automation
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing About Component */}
      <About />

      {/* Process Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase text-blue-600">
              My Process
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900">
              How I Work With Clients
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              I follow a simple and clear development process so your project is
              planned, designed, developed, and delivered properly.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discussion",
                desc: "Understand your business, goals, requirements, and target audience.",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Create proper structure, pages, features, and development roadmap.",
              },
              {
                step: "03",
                title: "Development",
                desc: "Build responsive UI, frontend, backend, automation, and integrations.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Test, optimize, deploy, and provide support after launch.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-sm font-bold text-blue-600">
                  {item.step}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <ContactCTA /> */}
      <Footer />
    </main>
  );
}