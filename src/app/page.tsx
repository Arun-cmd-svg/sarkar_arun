import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import ContactCTA from "@/components/ContactCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Portfolio /> */}
      <BlogSection />
      {/* <Testimonials /> */}
      <ContactForm />
      <ContactCTA />
      <Footer />
    </main>
  );
}