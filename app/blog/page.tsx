"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogs = [
  {
    title: "7 Web Design Principles That Build Instant Trust",
    category: "Web Design",
    date: "May 18, 2025",
    read: "5 min read",
    img: "/blog/1.png",
  },
  {
    title: "Clean Code, Better Results: My Development Approach",
    category: "Development",
    date: "May 12, 2025",
    read: "6 min read",
    img: "/blog/2.png",
  },
  {
    title: "Branding That Connects: More Than Just a Logo",
    category: "Branding",
    date: "May 6, 2025",
    read: "4 min read",
    img: "/blog/3.png",
  },
   {
    title: "Branding That Connects: More Than Just a Logo",
    category: "Branding",
    date: "May 6, 2025",
    read: "4 min read",
    img: "/blog/4.png",
  },
{
    title: "Speed Matters: Optimizing Websites for Performance",
    category: "Development",
    date: "April 20, 2025",
    read: "6 min read",
    img: "/blog/5.png",
    },
   {
    title: "Branding That Connects: More Than Just a Logo",
    category: "Branding",
    date: "May 6, 2025",
    read: "4 min read",
    img: "/blog/6.png",
  },
];

export default function BlogPage() {
  return (
    <>
    <Navbar/>
    <main className="pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto">

      {/* 🔥 HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-16">

        <div>
          <p className="badge-blue mb-4">Blog</p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Ideas, Insights &{" "}
            <span className="text-gradient">Growth Strategies.</span>
          </h1>

          <p className="text-text-secondary mt-4 max-w-lg">
            Thoughts on design, development, branding and growth to help your business thrive online.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/blog/hero.png"
            alt="blog"
            width={400}
            height={400}
            className="drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]"
          />
        </div>

      </section>

      {/* 🔥 FILTER + SEARCH */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">

        <div className="flex gap-2 flex-wrap">
          {["All", "Web Design", "Development", "Branding", "Growth"].map((item) => (
            <button key={item} className="filter-pill">
              {item}
            </button>
          ))}
        </div>

        <input
          placeholder="Search articles..."
          className="input-premium max-w-sm"
        />
      </div>

      {/* 🔥 BLOG GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {blogs.map((blog, i) => (
          <div key={i} className="card-premium overflow-hidden group">

            {/* IMAGE */}
            <div className="h-48 overflow-hidden">
              <Image
                src={blog.img}
                alt={blog.title}
                width={400}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <div className="flex justify-between text-xs text-white/50 mb-2">
                <span className="text-blue-400">{blog.category}</span>
                <span>{blog.date}</span>
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {blog.title}
              </h3>

              <p className="text-sm text-text-secondary mb-4">
                Learn key insights to improve your website performance and conversions.
              </p>

              <div className="flex justify-between items-center text-sm">
                <span className="text-white/40">{blog.read}</span>

                <Link
                  href="#"
                  className="text-blue-400 hover:underline"
                >
                  Read More →
                </Link>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* 🔥 SUBSCRIBE */}
      <section className="mt-20 card-premium p-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
          <p className="text-text-secondary text-sm">
            Get the latest insights delivered to your inbox.
          </p>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <input
            placeholder="Enter your email"
            className="input-premium w-full md:w-64"
          />
          <button className="btn-premium px-6">
            Subscribe
          </button>
        </div>

      </section>

    </main>
    <Footer />
    </>
  );
}