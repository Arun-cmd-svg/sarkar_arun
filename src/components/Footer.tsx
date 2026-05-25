import { siteConfig } from "@/data/site";
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-slate-900">
            {siteConfig.name}
          </h2>

          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
            I build modern websites, mobile apps, AI automation tools, and
            scalable digital solutions for growing businesses.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Quick Links</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Services</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>AI Automation</li>
            <li>Admin Dashboard</li>
            <li>SEO Optimization</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
        <p>© 2026 {siteConfig.name}. All rights reserved.</p>

        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}