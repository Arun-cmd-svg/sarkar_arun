"use client";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";


export default function ContactForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setSuccess("");

    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      setError("Please enter your project message.");
      return;
    }

    try {
  setError("");
  setIsSubmitting(true);

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (!response.ok) {
    setError(result.message || "Something went wrong.");
    return;
  }

  setSuccess("Thank you! Your message has been received. I will contact you soon.");

  setFormData({
    name: "",
    email: "",
    service: "Website Development",
    message: "",
  });
} catch (error) {
  console.error("Contact Form Error:", error);
  setError("Unable to send message. Please try again.");
} finally {
  setIsSubmitting(false);
}
  };

  return (
    <section id="contact-form" className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase text-blue-600">
            Contact Me
          </p>

          <h2 className="mt-2 text-4xl font-bold leading-tight text-slate-900">
            Have A Project Idea? Let’s Discuss
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Share your website, mobile app, dashboard, or AI automation
            requirement. I will help you plan the best solution for your
            business.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Mail size={22} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p className="text-sm text-slate-600">{siteConfig.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Phone</p>
                <p className="text-sm text-slate-600">{siteConfig.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Location</p>
                <p className="text-sm text-slate-600">{siteConfig.location}</p>
              </div>
            </div>
          </div>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl border border-green-200 bg-green-50 px-6 py-3 font-semibold text-green-700 shadow-sm transition hover:-translate-y-1 hover:bg-green-600 hover:text-white hover:shadow-lg"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>

        <form className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Service Required
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
              >
                <option>Website Development</option>
                <option>Mobile App Development</option>
                <option>AI Automation</option>
                <option>Admin Dashboard</option>
                <option>SEO / Blog Website</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>



            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {success && (
              <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                {success}
              </div>
            )}

            <button
  type="button"
  onClick={handleSubmit}
  disabled={isSubmitting}
  className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
>
  {isSubmitting ? "Sending..." : "Send Message"}
</button>
          </div>
        </form>
      </div>
    </section>
  );
}