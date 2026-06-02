import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const Icon = blog.icon;

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />

      <article className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <a
            href="/blog"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Back to Blog
          </a>

          <div className="mt-8 rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
              <Icon size={38} />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                {blog.category}
              </span>

              <span className="text-sm text-slate-500">{blog.date}</span>

              <span className="text-sm text-slate-500">
                • {blog.readTime}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
              {blog.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {blog.desc}
            </p>

            <div className="mt-10 space-y-6 border-t border-slate-200 pt-10">
              {blog.content.map((paragraph, index) => (
                <p key={index} className="text-lg leading-9 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* <ContactCTA /> */}
      <Footer />
    </main>
  );
}