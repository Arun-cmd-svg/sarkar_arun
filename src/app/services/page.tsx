import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesDetailed from "@/components/ervicesDetailed";


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase text-blue-600">
            My Services
          </p>

          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-slate-950">
            Digital Solutions For Your Business
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I help businesses build modern websites, mobile apps, dashboards,
            and AI automation systems with clean design and scalable technology.
          </p>
        </div>
      </section>

      <ServicesDetailed />
      <ContactCTA />
      <Footer />
    </main>
  );
}