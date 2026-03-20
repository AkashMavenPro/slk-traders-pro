"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Send, CheckCircle, Loader2, ShieldCheck } from "lucide-react";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerItem,
  staggerItemX,
} from "@/lib/animations";

const productCategories = [
  "Industrial Valves & Flow Control",
  "Pumps & Fluid Equipment",
  "Reactors & Pressure Vessels",
  "Material Handling & Conveying",
  "Mechanical & Structural Components",
  "Other / General Inquiry",
];

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+91-8047646245" },
  {
    icon: MapPin,
    label: "Address",
    value: "4/39 Kumarpara Road, Liluah, Howrah – 711204, West Bengal",
  },
  {
    icon: ShieldCheck,
    label: "GST Number",
    value: "19ADXPC3633P1ZT",
  },
];

const coverageStates = ["West Bengal", "Jharkhand", "Odisha", "Bihar"];

const inputClass =
  "w-full bg-white border border-slate-200 focus:border-[#0EA5E9]/60 text-slate-900 placeholder-white/20 px-4 py-3 rounded-lg text-sm outline-none transition-colors duration-200";

type FormState = "idle" | "loading" | "success";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1600));
    setFormState("success");
  };

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/25 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(14,165,233,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0EA5E9]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 xl:gap-20">

          {/* LEFT — Contact Info */}
          <div className="lg:col-span-2">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="inline-flex items-center gap-2 bg-sky-50 border border-[#0EA5E9]/20 text-[#0EA5E9] px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-widest mb-6"
            >
              Contact Us
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-5 leading-tight tracking-tight"
            >
              Let&apos;s Talk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">
                Business
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-base mb-10 leading-relaxed"
            >
              Send us your requirement — product specifications, quantity, and
              delivery location. We respond within 24 hours, every business day.
            </motion.p>

            {/* Contact details — staggered */}
            <motion.div
              className="space-y-5 mb-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={staggerItemX}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-sky-50 border border-[#0EA5E9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#0EA5E9]" size={18} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-widest mb-0.5">
                      {label}
                    </div>
                    <div className="text-slate-700 text-sm leading-snug">{value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Service coverage — staggered pills */}
            <motion.div
              className="p-5 bg-sky-50 rounded-xl border border-slate-100"
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="text-slate-500 text-[10px] uppercase tracking-widest mb-3">
                Service Coverage
              </div>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {coverageStates.map((state) => (
                  <motion.span
                    key={state}
                    variants={staggerItem}
                    className="text-xs bg-[#0EA5E9]/10 text-[#0EA5E9] px-3 py-1.5 rounded-full border border-[#0EA5E9]/20 font-medium"
                  >
                    {state}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT — Form */}
          <motion.div
            className="lg:col-span-3"
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-sky-50 rounded-2xl p-8 md:p-10 border border-slate-100 relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]" />

              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 bg-[#0EA5E9]/15 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle className="w-10 h-10 text-[#0EA5E9]" />
                    </div>
                    <h3 className="text-slate-900 text-2xl font-black mb-2">
                      Inquiry Received!
                    </h3>
                    <p className="text-slate-500 text-base max-w-xs">
                      Our team will get back to you within 24 hours with pricing and availability.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 block">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Rajesh Kumar"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 block">
                          Company *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Industries Pvt. Ltd."
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 block">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 block">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 block">
                        Product Interest
                      </label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className={`${inputClass} text-slate-600`}
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="">Select a category...</option>
                        {productCategories.map((cat) => (
                          <option key={cat} value={cat} className="bg-sky-50">
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 block">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your requirement — product specs, quantity, delivery location, urgency..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-200 flex items-center justify-center gap-2.5 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#0EA5E9]/15"
                    >
                      {formState === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Inquiry
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
