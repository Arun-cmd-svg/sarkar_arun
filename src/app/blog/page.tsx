import BlogDetailed from "@/components/BlogDetailed";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Blog",
  description:
    "Read practical articles about web development, mobile apps, AI automation, SEO, and digital business growth.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />

      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#DBEAFE,transparent_35%),radial-gradient(circle_at_top_right,#E0E7FF,transparent_35%)]" />

        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase text-blue-600">
            Blog
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
            Practical Tech Blogs For Business Growth
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Read practical articles by Sarkar Arun about web development,
            mobile apps, admin dashboards, AI automation, SEO, and digital
            business growth.
          </p>
        </div>
      </section>

      <BlogDetailed />
      {/* <ContactCTA /> */}
      <Footer />
    </main>
  );
}