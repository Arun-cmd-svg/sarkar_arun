const testimonials = [
  {
    name: "Startup Founder",
    role: "Business Owner",
    text: "The website was clean, fast, and professional. It helped us improve our online presence.",
  },
  {
    name: "Clinic Manager",
    role: "Healthcare Business",
    text: "The automation idea saved our team time and made daily operations smoother.",
  },
  {
    name: "E-commerce Owner",
    role: "Client",
    text: "Very responsive design and professional delivery. The project was completed with quality.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase text-blue-600">
            Testimonials
          </p>
          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            What Clients Say
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <p className="text-slate-600">“{item.text}”</p>

              <div className="mt-6">
                <h3 className="font-bold text-slate-900">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}