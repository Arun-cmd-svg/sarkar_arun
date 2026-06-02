import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import PortfolioDetailed from "@/components/PortfolioDetailed";


export const metadata = {
  title: "Portfolio",
  description:
    "View website, mobile app, dashboard, and AI automation project examples by Arun Web Studio.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase text-blue-600">
            Portfolio
          </p>

          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-slate-950">
            My Recent Work & Project Ideas
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A collection of websites, mobile apps, dashboards, and automation
            solutions that show how I can help businesses build better digital
            products.
          </p>
        </div>
      </section>

      <PortfolioDetailed />
      {/* <ContactCTA /> */}
      <Footer />
    </main>
  );
}