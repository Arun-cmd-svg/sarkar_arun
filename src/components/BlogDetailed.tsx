import Image from "next/image";
import { blogs } from "@/data/blogs";
import { ArrowUpRight } from "lucide-react";

export default function BlogDetailed() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((blog) => {
            const Icon = blog.icon;

            return (
              <article
                key={blog.slug}
                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Blog Image */}
                <a href={`/blog/${blog.slug}`} className="block">
                  <div className="relative h-72 overflow-hidden bg-slate-100">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                    <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-blue-600 shadow-lg backdrop-blur-md">
                      <Icon size={28} />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                </a>

                {/* Blog Content */}
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm text-slate-500">{blog.date}</span>

                    <span className="text-sm text-slate-500">
                      • {blog.readTime}
                    </span>
                  </div>

                  <a href={`/blog/${blog.slug}`}>
                    <h2 className="mt-5 text-2xl font-bold leading-tight text-slate-900 transition hover:text-blue-600">
                      {blog.title}
                    </h2>
                  </a>

                  <p className="mt-4 leading-7 text-slate-600">
                    {blog.desc}
                  </p>

                  <a
                    href={`/blog/${blog.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                  >
                    Read Article
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