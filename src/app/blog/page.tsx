import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";


export const metadata = {
  title: "Blog",
  description:
    "Read practical articles about web development, mobile apps, AI automation, SEO, and digital business growth.",
};



export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase text-blue-600">
            About Me
          </p>

          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-slate-950">
            Software Developer Helping Businesses Go Digital
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I build modern websites, mobile apps, dashboards, and AI automation
            solutions that help businesses improve online presence and work
            smarter.
          </p>
        </div>
      </section>

      <About />
      {/* <ContactCTA /> */}
      <Footer />
    </main>
  );
}