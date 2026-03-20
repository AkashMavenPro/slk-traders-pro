"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      } border-b border-[#0EA5E9]/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#0EA5E9] rounded flex items-center justify-center">
              <Zap className="w-4.5 h-4.5 text-white fill-white" size={18} />
            </div>
            <span className="text-slate-900 font-bold text-xl tracking-tight">
              SLK <span className="text-[#0EA5E9]">Traders</span>
            </span>
            <span className="hidden sm:inline text-[10px] bg-[#0EA5E9]/15 text-[#0EA5E9] border border-[#0EA5E9]/30 px-2 py-0.5 rounded font-bold tracking-widest">
              PRO
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-[#0EA5E9] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-5 py-2.5 rounded text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-700 hover:text-slate-900 transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-700 hover:text-[#0EA5E9] text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#0EA5E9] text-white px-5 py-3 rounded text-sm font-semibold text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
