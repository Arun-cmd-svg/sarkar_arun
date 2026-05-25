export default function ContactCTA() {
  return (
<section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-16 text-white shadow-2xl md:px-16">
          
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
              Let’s Build Something Amazing
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Need A Modern Website, Mobile App, or AI Solution?
            </h2>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              I help businesses create scalable digital products with modern UI,
              high performance, and smart automation systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
                Start Your Project
              </button>

              <button className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}