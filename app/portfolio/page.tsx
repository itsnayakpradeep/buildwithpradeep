"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PersonalBrand from "@/components/PersonalBrand";

const categories = ["All", "Website", "SEO", "Booking"];

const projects = [
  {
    title: "Fitness Coach Website",
    category: "Website",
    image: "/portfolio/project1.png",
  },
  {
    title: "Salon Booking System",
    category: "Booking",
    image: "/portfolio/project2.png",
  },
  {
    title: "SEO Growth Project",
    category: "SEO",
    image: "/portfolio/project3.png",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
        <Navbar />
        <div className="mt-24">
            <PersonalBrand />
        </div>
        <section className="py-20 px-4 md:px-8 lg:px-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">
            Our Work
            </h1>
            <p className="text-text-secondary max-w-xl mx-auto">
            Real websites that generate leads and grow businesses.
            </p>
        </div>

        {/* FILTER */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
            <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-xl border transition ${
                active === cat
                    ? "bg-primaryGradient text-white border-transparent"
                    : "border-white/20 hover:bg-white/5"
                }`}
            >
                {cat}
            </button>
            ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
            <div
                key={i}
                className="group w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary transition hover:-translate-y-2"
            >

                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">

                    <button className="bg-primaryGradient px-4 py-2 rounded-lg text-sm">
                    Live Preview
                    </button>

                    <button className="border border-white/20 px-4 py-2 rounded-lg text-sm">
                    Case Study
                    </button>

                </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                <h3 className="font-semibold text-lg">
                    {project.title}
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                    {project.category}
                </p>
                </div>

            </div>
            ))}
        </div>
        </section>
        <Footer/>
    </>
  );
}