"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      return "Please fill all fields";
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return "Invalid email address";
    }

    return "";
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus(error);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 blur-[140px] opacity-30 rounded-full" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm text-primary uppercase tracking-wider mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Let’s Build Something
            <br />
            <span className="text-gradient">That Actually Converts.</span>
          </h2>

          <p className="text-text-secondary mt-5 leading-relaxed max-w-md">
            Tell me about your business and goals. I’ll help you create a website
            that doesn’t just look good — it brings real clients.
          </p>

          {/* TRUST INFO */}
          <div className="mt-8 space-y-3 text-sm text-white/70">
            <p>⚡ Response within 24 hours</p>
            <p>💬 Friendly, no-pressure conversation</p>
            <p>🚀 Focused on real results, not just design</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            relative
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-2xl p-6 md:p-8
            space-y-5
            hover:border-primary/30 transition
          "
        >
          {/* glow */}
          <div className="absolute -inset-1 bg-primary/10 blur-2xl opacity-20 rounded-2xl pointer-events-none" />

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition resize-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full 
              bg-primaryGradient 
              py-3 rounded-xl 
              font-medium 
              btn-glow
              hover:scale-[1.02]
              transition
              disabled:opacity-70
            "
          >
            {loading ? "Sending..." : "Start Your Project →"}
          </button>

          {/* STATUS */}
          {status && (
            <p
              className={`
                text-sm text-center
                ${status === "success" && "text-green-400"}
                ${status === "error" && "text-red-400"}
                ${status !== "success" && status !== "error" && "text-text-secondary"}
              `}
            >
              {status === "success" && "Message sent successfully 🚀"}
              {status === "error" && "Something went wrong. Try again."}
              {status !== "success" && status !== "error" && status}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}