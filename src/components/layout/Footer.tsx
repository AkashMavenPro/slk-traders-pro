"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

const productLinks = [
  "Industrial Valves & Flow Control",
  "Pumps & Fluid Equipment",
  "Reactors & Pressure Vessels",
  "Material Handling & Conveying",
  "Mechanical & Structural Components",
];

export default function Footer() {
  return (
    <footer className="bg-[#06101E] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand — fade up */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-[#0EA5E9] rounded flex items-center justify-center">
                <Zap className="text-white fill-white" size={14} />
              </div>
              <span className="text-white font-black text-lg tracking-tight">
                SLK <span className="text-[#0EA5E9]">Traders</span>
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Wholesale distributor of industrial components. Serving
              manufacturers across Eastern India since 2012.
            </p>
            <motion.div
              className="mt-5 flex gap-2 flex-wrap"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {["West Bengal", "Jharkhand", "Odisha", "Bihar"].map((s) => (
                <motion.span
                  key={s}
                  variants={staggerItem}
                  className="text-[10px] text-[#0EA5E9]/70 border border-[#0EA5E9]/20 px-2 py-0.5 rounded"
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Products — staggered list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.h4
              variants={staggerItem}
              className="text-white/45 text-[10px] font-bold uppercase tracking-widest mb-5"
            >
              Products
            </motion.h4>
            <ul className="space-y-2.5">
              {productLinks.map((p) => (
                <motion.li key={p} variants={staggerItem}>
                  <a
                    href="#products"
                    className="text-white/35 text-sm hover:text-[#0EA5E9] transition-colors"
                  >
                    {p}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact — staggered */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.h4
              variants={staggerItem}
              className="text-white/45 text-[10px] font-bold uppercase tracking-widest mb-5"
            >
              Contact
            </motion.h4>
            <motion.div className="space-y-3 text-sm text-white/35">
              {[
                "+91-8047646245",
                "4/39 Kumarpara Road, Liluah\nHowrah – 711204, West Bengal",
                "GST: 19ADXPC3633P1ZT",
              ].map((line, i) => (
                <motion.p
                  key={i}
                  variants={staggerItem}
                  className={`leading-relaxed ${i === 2 ? "font-mono text-[11px] text-white/25" : ""}`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
            <motion.a
              href="#contact"
              variants={staggerItem}
              className="mt-6 inline-block bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            >
              Get a Quote
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} S L K Traders. All rights reserved. ·
            Proprietorship · Established 2012
          </p>
          <p className="text-white/15 text-xs">
            Howrah, West Bengal, India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
