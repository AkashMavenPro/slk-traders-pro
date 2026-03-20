"use client";

import { motion } from "framer-motion";
import { Settings2, Droplets, FlaskConical, Package, Wrench, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    category: "Industrial Valves & Flow Control",
    items: ["Rotary Airlock Valve", "Filter Housing"],
    icon: Settings2,
    description:
      "Precision flow control for industrial processes. Our rotary airlock valves and filter housings ensure dust-free, efficient operations across chemical and bulk material plants.",
    colSpan: "lg:col-span-2 lg:row-span-2",
    large: true,
  },
  {
    id: 2,
    category: "Pumps & Fluid Equipment",
    items: ["Pump Impeller"],
    icon: Droplets,
    description: "High-performance impellers for centrifugal pumps in heavy-duty fluid systems.",
    colSpan: "lg:col-span-2 lg:row-span-1",
    large: false,
  },
  {
    id: 3,
    category: "Reactors & Pressure Vessels",
    items: ["Glass Lined Reactors"],
    icon: FlaskConical,
    description: "Chemical-grade glass lined reactors engineered for corrosion resistance.",
    colSpan: "lg:col-span-2 lg:row-span-1",
    large: false,
  },
  {
    id: 4,
    category: "Material Handling & Conveying",
    items: ["Screw Conveyor"],
    icon: Package,
    description: "Reliable screw conveyors for bulk material transport in manufacturing lines.",
    colSpan: "lg:col-span-2 lg:row-span-1",
    large: false,
  },
  {
    id: 5,
    category: "Mechanical & Structural",
    items: ["Rolling Shutter", "Chain Sprocket", "Brackets"],
    icon: Wrench,
    description: "Structural and drive components for industrial fabrication and assembly.",
    colSpan: "lg:col-span-2 lg:row-span-1",
    large: false,
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-28 bg-white relative">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-sky-50 border border-[#0EA5E9]/20 text-[#0EA5E9] px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-widest mb-5"
          >
            Product Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4"
          >
            Industrial Components
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">
              Built for Manufacturing
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-2xl leading-relaxed"
          >
            Five core categories covering valves, pumps, reactors, conveying
            systems, and structural components — everything your plant needs
            from one trusted Howrah-based source.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ gridAutoRows: "220px" }}
        >
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
                className={`relative group bg-sky-50 border border-slate-100 hover:border-[#0EA5E9]/35 rounded-xl p-6 flex flex-col justify-between overflow-hidden cursor-pointer transition-colors duration-300 ${product.colSpan}`}
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#0EA5E9]/6 to-transparent rounded-xl pointer-events-none" />

                {/* Number watermark */}
                <div className="absolute top-4 right-5 text-7xl font-black text-slate-900/[0.03] select-none leading-none">
                  0{product.id}
                </div>

                {/* Icon */}
                <div>
                  <div className="w-12 h-12 bg-[#0EA5E9]/10 group-hover:bg-[#0EA5E9]/18 rounded-lg flex items-center justify-center transition-colors duration-300 mb-4">
                    <Icon className="w-6 h-6 text-[#0EA5E9]" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-slate-900 font-bold text-base md:text-lg mb-2 leading-snug">
                    {product.category}
                  </h3>

                  {product.large && (
                    <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-white text-slate-500 px-2.5 py-1 rounded border border-slate-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[#0EA5E9] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    Request Quote <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
