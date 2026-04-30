"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
            <Breadcrumb />
        </div>
        {/* 🌈 ANIMATED BACKGROUND */}
        <div className="absolute inset-0 -z-10 bg-[#050816]">
            <div className="gradient-blob blue" />
            <div className="gradient-blob purple" />
            <div className="gradient-blob pink" />
        </div>
      {/* 🔥 CONTAINER */}
      <div className="max-w-5xl mx-auto">

        {/* 🔷 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="inline-flex px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm mb-4">
            Legal
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Privacy{" "}
            <span className="text-gradient">Policy</span>
          </h1>

          <p className="text-white/50 mt-4 text-sm sm:text-base">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* 🔥 CARD */}
        <div className="
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-6 sm:p-8 md:p-10
          space-y-10
        ">

          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                {section.title}
              </h2>

              {section.content}
            </motion.div>
          ))}

        </div>

        {/* 🔥 CTA */}
        <div className="text-center mt-16">
          <p className="text-white/50 mb-4">
            Still have questions?
          </p>

          <Link
            href="/contact"
            className="inline-block bg-primaryGradient px-6 py-3 rounded-xl font-medium btn-glow"
          >
            Contact Me →
          </Link>
        </div>

      </div>
    </main>
    <Footer />
    </>
  );
}

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm sm:text-base">
        <li>Name</li>
        <li>Email address</li>
        <li>Project details or message</li>
      </ul>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm sm:text-base">
        <li>Respond to your inquiries</li>
        <li>Provide requested services</li>
        <li>Improve user experience</li>
      </ul>
    ),
  },
  {
    title: "3. Data Protection",
    content: (
      <p className="text-white/70 text-sm sm:text-base">
        Your data is securely handled and never sold or shared with third parties.
      </p>
    ),
  },
  {
    title: "4. Cookies & Analytics",
    content: (
      <p className="text-white/70 text-sm sm:text-base">
        We may use cookies and analytics tools to improve website performance and experience.
      </p>
    ),
  },
  {
    title: "5. Third-Party Services",
    content: (
      <p className="text-white/70 text-sm sm:text-base">
        We use trusted services like hosting and email providers to operate our platform.
      </p>
    ),
  },
  {
    title: "6. Your Rights",
    content: (
      <p className="text-white/70 text-sm sm:text-base">
        You can request access, update, or deletion of your personal data anytime.
      </p>
    ),
  },
  {
    title: "7. Contact Information",
    content: (
      <div className="text-white/70 text-sm sm:text-base space-y-1">
        <p>📧 hello@buildwithpradeep.dev</p>
        <p>📱 +91 9178975741</p>
      </div>
    ),
  },
];