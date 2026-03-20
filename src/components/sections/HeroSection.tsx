"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle, Star, MapPin, ShieldCheck } from "lucide-react";

const stats = [
  { value: "12+", label: "Years in Business" },
  { value: "Rank A", label: "IndiaMart Status" },
  { value: "5", label: "Product Categories" },
  { value: "4", label: "Eastern States" },
];

const valueProps = [
  "Quality Assured Parts",
  "Fast Local Supply",
  "GST Invoice Provided",
  "Bulk Orders Welcome",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeInOut" },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, rgba(14,165,233,0.12) 1.5px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Orange ambient glows */}
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-[#0EA5E9]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] bg-[#0EA5E9]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Industrial SVG decoration — top right */}
      <div className="absolute top-16 right-10 opacity-[0.06] hidden lg:block pointer-events-none select-none">
        <svg width="320" height="320" viewBox="0 0 320 320">
          <circle cx="160" cy="160" r="140" stroke="#0EA5E9" strokeWidth="1" fill="none" />
          <circle cx="160" cy="160" r="100" stroke="#0EA5E9" strokeWidth="0.8" fill="none" />
          <circle cx="160" cy="160" r="60" stroke="#0EA5E9" strokeWidth="0.5" fill="none" />
          <line x1="20" y1="160" x2="300" y2="160" stroke="#0EA5E9" strokeWidth="0.6" />
          <line x1="160" y1="20" x2="160" y2="300" stroke="#0EA5E9" strokeWidth="0.6" />
          <line x1="61" y1="61" x2="259" y2="259" stroke="#0EA5E9" strokeWidth="0.4" />
          <line x1="259" y1="61" x2="61" y2="259" stroke="#0EA5E9" strokeWidth="0.4" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={angle}
                x1={160 + 140 * Math.cos(rad)}
                y1={160 + 140 * Math.sin(rad)}
                x2={160 + 155 * Math.cos(rad)}
                y2={160 + 155 * Math.sin(rad)}
                stroke="#0EA5E9"
                strokeWidth="2"
              />
            );
          })}
          <circle cx="160" cy="160" r="6" fill="#0EA5E9" opacity="0.6" />
        </svg>
      </div>

      {/* Bottom-right hex pattern */}
      <div className="absolute bottom-10 right-10 opacity-[0.04] hidden xl:block pointer-events-none select-none">
        <svg width="200" height="200" viewBox="0 0 200 200">
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => {
              const cx = col * 50 + (row % 2 === 0 ? 0 : 25);
              const cy = row * 43;
              const r = 22;
              const points = [0, 60, 120, 180, 240, 300]
                .map((a) => {
                  const rad = (a * Math.PI) / 180;
                  return `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`;
                })
                .join(" ");
              return (
                <polygon
                  key={`${row}-${col}`}
                  points={points}
                  stroke="#0EA5E9"
                  strokeWidth="1"
                  fill="none"
                />
              );
            })
          )}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 bg-sky-50 border border-[#0EA5E9]/30 text-[#0EA5E9] px-4 py-2 rounded-full text-sm font-medium mb-7"
          >
            <Star className="w-3.5 h-3.5 fill-[#0EA5E9]" />
            IndiaMart Rank A &nbsp;·&nbsp; Est. 2012 &nbsp;·&nbsp; GST Verified
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 leading-[1.05] mb-6 tracking-tight"
          >
            Eastern India&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">
              Trusted
            </span>
            <br />
            Industrial{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9]">
              Supplier
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="text-slate-600 text-xl md:text-2xl max-w-2xl mb-8 leading-relaxed"
          >
            Wholesale distributor of industrial valves, pumps, reactors &amp;
            mechanical components — serving manufacturers across West Bengal,
            Jharkhand, Odisha &amp; Bihar.
          </motion.p>

          {/* Value props */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
          >
            {valueProps.map((prop) => (
              <div
                key={prop}
                className="flex items-center gap-1.5 text-slate-600 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                {prop}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="flex flex-wrap gap-4 mb-20"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-8 py-4 rounded font-bold text-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#0EA5E9]/20"
            >
              Request a Quote
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2.5 border border-slate-200 hover:border-[#0EA5E9]/40 text-slate-700 hover:text-slate-900 px-8 py-4 rounded font-semibold text-lg transition-all duration-200 hover:bg-sky-50"
            >
              View Products
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-100"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-[#0EA5E9] mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Location pill — bottom right */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 bg-sky-50/80 backdrop-blur border border-slate-100 px-4 py-2 rounded-full text-slate-600 text-sm">
        <MapPin className="w-4 h-4 text-[#0EA5E9]" />
        Howrah, West Bengal, India
      </div>

      {/* GST verified badge */}
      <div className="absolute bottom-8 left-8 hidden lg:flex items-center gap-2 bg-sky-50/80 backdrop-blur border border-green-500/20 px-4 py-2 rounded-full text-slate-500 text-xs">
        <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
        GST Verified Supplier
      </div>
    </section>
  );
}
