import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#DBEAFE,transparent_35%),radial-gradient(circle_at_top_right,#E0E7FF,transparent_35%)] px-6 py-16 lg:py-20"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-md">
            <Sparkles size={16} />
            Available for freelance projects
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">
            I Build Modern Websites, Apps & AI Automation For Businesses
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I help startups, clinics, small businesses, and professionals build
            fast, responsive, SEO-friendly websites, mobile apps, dashboards,
            and smart automation tools.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Hire Me
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
            >
              View My Work
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              "Responsive UI",
              "Clean Code",
              "SEO Ready",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 size={18} className="text-blue-600" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
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
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[48px] bg-gradient-to-br from-blue-500 to-indigo-700 opacity-20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[42px] border border-white bg-white p-4 shadow-2xl">
              <Image
                src="/images/profile.png"
                alt="Profile picture"
                width={410}
                height={500}
                className="h-[500px] w-[410px] rounded-[34px] object-cover"
                priority
              />

              <div className="absolute left-8 top-8 rounded-2xl bg-white/85 px-4 py-3 shadow-lg backdrop-blur-md">
                <p className="text-xs font-semibold text-slate-500">
                  Status
                </p>
                <p className="font-bold text-green-600">Available Now</p>
              </div>

              <div className="absolute -left-8 bottom-28 hidden rounded-3xl bg-white p-5 shadow-xl lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Service</p>
                    <p className="font-bold text-slate-900">Web Development</p>
                  </div>
                </div>
              </div>

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
      </div>
    </section>
  );
}