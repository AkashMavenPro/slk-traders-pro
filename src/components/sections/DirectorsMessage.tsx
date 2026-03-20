"use client";

import { motion } from "framer-motion";
import { Quote, Award, MapPin, Building2, TrendingUp, ShieldCheck } from "lucide-react";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerItem,
  staggerItemX,
} from "@/lib/animations";

const credentials = [
  { icon: Building2, label: "Proprietor, S L K Traders" },
  { icon: Award, label: "IndiaMart Rank A Member" },
  { icon: MapPin, label: "Howrah, West Bengal, India" },
  { icon: TrendingUp, label: "₹40L – ₹1.5Cr Annual Turnover" },
  { icon: ShieldCheck, label: "GST: 19ADXPC3633P1ZT" },
];

const bottomStats = [
  { value: "12+", label: "Years of Trust" },
  { value: "4", label: "States Served" },
  { value: "100s", label: "Components Supplied" },
];

export default function DirectorsMessage() {
  return (
    <section
      id="about"
      className="py-28 bg-sky-50 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0EA5E9]/4 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0EA5E9]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* LEFT — Director Card */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="bg-white rounded-2xl p-8 border border-slate-100 relative overflow-hidden">
              {/* Top orange stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]" />

              {/* Avatar — scroll reveal */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] flex items-center justify-center mb-6 shadow-lg shadow-[#0EA5E9]/20"
              >
                <span className="text-2xl font-black text-white tracking-tight">VC</span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-slate-900 text-2xl font-black mb-1 tracking-tight">
                  Varun Chaudhary
                </h3>
                <p className="text-[#0EA5E9] font-semibold text-sm mb-7">
                  Proprietor &amp; Director, S L K Traders
                </p>
              </motion.div>

              {/* Credentials — staggered */}
              <motion.div
                className="space-y-3.5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
              >
                {credentials.map(({ icon: Icon, label }) => (
                  <motion.div
                    key={label}
                    variants={staggerItemX}
                    className="flex items-center gap-3 text-slate-600 text-sm"
                  >
                    <div className="w-8 h-8 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#0EA5E9]" />
                    </div>
                    <span>{label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Established badge */}
              <motion.div
                className="mt-7 pt-6 border-t border-slate-100"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-slate-500 text-xs">
                    Established 2012 · 12+ Years in Operation
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-slate-500 text-xs">
                    4/39 Kumarpara Road, Liluah, Howrah – 711204
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Message */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-sky-50 border border-[#0EA5E9]/20 text-[#0EA5E9] px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-widest mb-6"
            >
              Director&apos;s Message
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight"
            >
              Built on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">
                Trust
              </span>
              ,<br />Driven by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9]">
                Reliability
              </span>
            </motion.h2>

            {/* Vision quote — scale in */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1 }}
              className="relative mb-8"
            >
              <Quote className="w-8 h-8 text-[#0EA5E9]/25 mb-3" />
              <blockquote className="text-slate-600 text-base md:text-lg leading-relaxed italic border-l-2 border-[#0EA5E9] pl-5">
                &ldquo;To be the most trusted wholesale distributor of industrial
                components across Eastern India — delivering quality-assured
                machinery parts, valves, and process equipment to manufacturers
                who depend on reliability and speed of supply.&rdquo;
              </blockquote>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-slate-500 text-base leading-relaxed mb-10"
            >
              For over 12 years, SLK Traders has been the backbone of industrial
              supply chains across West Bengal, Jharkhand, Odisha, and Bihar.
              From our base in Howrah — India&apos;s industrial heartland — we connect
              manufacturers with the components they need, when they need them.
              No delays. No compromises.
            </motion.p>

            {/* Bottom stats — staggered */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-7 border-t border-slate-100"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              {bottomStats.map((stat) => (
                <motion.div key={stat.label} variants={staggerItem}>
                  <div className="text-2xl md:text-3xl font-black text-[#0EA5E9]">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

