import Image from "next/image";
import { blogs } from "@/data/blogs";
import { ArrowUpRight } from "lucide-react";

export default function BlogSection() {
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section id="blog" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-600">
              Latest Articles
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900">
              Blog & Insights
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Practical articles about AI, web development, mobile apps, SEO,
              and digital business growth.
            </p>
          </div>

          <a
            href="/blog"
            className="rounded-2xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            View All Blogs
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {latestBlogs.map((blog) => {
            const Icon = blog.icon;

            return (
              <article
                key={blog.slug}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <a href={`/blog/${blog.slug}`} className="block">
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-blue-600 shadow-md backdrop-blur-md">
                      <Icon size={24} />
                    </div>

                    <span className="absolute bottom-4 left-4 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      {blog.category}
                    </span>
                  </div>
                </a>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold text-blue-600">
                      {blog.date}
                    </span>

                    <span className="text-xs text-slate-500">
                      {blog.readTime}
                    </span>
                  </div>

                  <a href={`/blog/${blog.slug}`}>
                    <h3 className="mt-4 text-xl font-bold leading-7 text-slate-900 transition hover:text-blue-600">
                      {blog.title}
                    </h3>
                  </a>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {blog.desc}
                  </p>

                  <a
                    href={`/blog/${blog.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                  >
                    Read More
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}