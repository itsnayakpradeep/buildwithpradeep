"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import FAQSection from "@/components/FAQ";
import FloatingBackButton from "@/components/FloatingBackButton";
import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQPage() {
  return (
    <>
    <Navbar />
    <main className="pt-28 pb-20">
      {/* 🔥 BREADCRUMB */}
        <section className="max-w-6xl mx-auto px-6 mb-6">
          <Breadcrumb />
        </section>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/40 text-blue-400 text-xs sm:text-sm mb-5 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
          FAQ
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Everything You Need
          <br />
          <span className="text-gradient">To Know Before We Start.</span>
        </h1>

        <p className="text-text-secondary mt-4 max-w-xl">
          Clear answers to help you understand the process, timelines, and what to expect.
        </p>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA (same style as homepage) */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <div className="
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-2xl p-8 md:p-10
          text-center
        ">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Still Have Questions?
          </h3>

          <p className="text-text-secondary mb-6">
            Let’s talk and build something that actually brings you clients.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primaryGradient px-6 py-3 rounded-xl font-medium btn-glow"
          >
            Let’s Build Yours →
          </Link>
        </div>
      </section>
      {/* <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <FloatingBackButton />
      </motion.div> */}
    </main>
    <Footer />
    </>
  );
}