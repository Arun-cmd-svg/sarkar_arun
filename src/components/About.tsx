import { CheckCircle2 } from "lucide-react";

const skills = [
  "Frontend Development",
  "Backend APIs",
  "Mobile Apps",
  "AI Automation",
  "Admin Dashboards",
  "SEO-Friendly Websites",
];

export const metadata = {
  title: "About",
  description:
    "Learn about Arun Web Studio, a personal web development brand focused on websites, mobile apps, dashboards, and AI automation.",
};

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase text-blue-600">
            About Me
          </p>

          <h2 className="mt-2 text-4xl font-bold leading-tight text-slate-900">
            I Build Digital Products That Help Businesses Grow
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I am a software developer focused on building modern websites,
            mobile apps, admin dashboards, and AI-powered automation solutions.
            My goal is to help businesses improve their digital presence,
            automate manual work, and attract more customers online.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            This website is my personal brand where I share practical technology
            blogs and offer professional development services for clients.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600" size={20} />
                <span className="font-medium text-slate-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Why Work With Me?
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <h4 className="font-bold text-slate-900">
                  Clean & Modern Design
                </h4>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  I create responsive interfaces that look professional on
                  desktop, tablet, and mobile.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  Real Business Understanding
                </h4>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  I focus on solving practical business problems, not just
                  writing code.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  End-to-End Development
                </h4>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  From UI design to frontend, backend, deployment, and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}