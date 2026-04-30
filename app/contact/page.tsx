"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Lock, CheckCircle } from "lucide-react";
import Image from "next/image";
import CustomSelect from "@/components/CustomSelect";
import FloatingBackButton from "@/components/FloatingBackButton";
import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";

export default function ContactPage() {

  const [projectType, setProjectType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      projectType,
    };

    console.log(data);

    // validation
    if (!data.name || !data.email || !data.message || !projectType) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully 🚀");
        form.reset();
        setProjectType("");
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (err) {
      toast.error( "Server error");
    }

    setLoading(false);
  };

  return (
    <>
    <Navbar />  
    <main className="relative min-h-screen overflow-hidden px-6 md:px-12 pt-32 pb-20">

      {/* 🍞 Breadcrumb */}
      <div className="max-w-6xl mx-auto">
        <Breadcrumb />
      </div>
      {/* 🌈 ANIMATED BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[#050816]">
        <div className="gradient-blob blue" />
        <div className="gradient-blob purple" />
        <div className="gradient-blob pink" />
      </div>

      {/* 🔥 HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/40 text-blue-400 text-xs sm:text-sm mb-5 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
          Contact
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Let’s Build{" "}
          <span className="text-gradient">
            Your Website
          </span>{" "}
          🚀
        </h1>

        <p className="text-white/60 mt-4">
          Tell me about your project, goals and requirements I’ll get back within 24 hours.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">

          <div className="stat-pill">
            <CheckCircle size={16} className="text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
            100+ Websites Delivered
          </div>

          <div className="stat-pill">
            <CheckCircle size={16} className="text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
            2–3 Day Delivery
          </div>

          <div className="stat-pill">
            <CheckCircle size={16} className="text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
            100% Satisfaction
          </div>

        </div>
      </div>

      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 max-w-6xl mx-auto">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-premium p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="icon-glow blue">
              <Send size={18} className="text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Send a Message</h3>
              <p className="text-sm text-white/60">
                Fill out the form below and I’ll get back to you soon.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" className="input-premium" placeholder="John Doe" />
              <input name="email" className="input-premium" placeholder="john@example.com" suppressHydrationWarning />
            </div>

            <CustomSelect value={projectType} onChange={setProjectType} />

            <textarea
              name="message"
              rows={4}
              className="input-premium"
              placeholder="Tell me about your project..."
            />

            <button type="submit" className="btn-premium flex items-center justify-center gap-2 group">
            <Send
              size={16}
            />
            Send Message 
          </button>

            <p className="flex items-center justify-center gap-2 text-xs text-white/40 mt-2">
              <Lock size={14} className="text-white/40" />
              Your information is 100% secure and will not be shared.
            </p>
          </form>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* WHATSAPP */}
          <motion.div className="card-premium p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-glow green">
                <Image src="/icons/whatsapp.svg" alt="" width={18} height={18} />
              </div>
              <div>
                <h3 className="font-semibold">Chat on WhatsApp</h3>
                <p className="text-sm text-white/60">
                  Need a quick response?
                </p>
              </div>
            </div>

            <a  href="https://wa.me/919178975741?text=Hi%20Pradeep%20I%20want%20a%20website" className="btn-green-premium">
              Chat Now →
            </a>
          </motion.div>

          {/* CALL */}
          <motion.div className="card-premium p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-glow blue">
                <Calendar size={18} />
              </div>
              <div>
                <h3 className="font-semibold">Book a Call</h3>
                <p className="text-sm text-white/60">
                  Schedule a consultation
                </p>
              </div>
            </div>

            <a href="#" className="btn-blue-premium">
              Book Call →
            </a>
          </motion.div>

        </div>
      </div>
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