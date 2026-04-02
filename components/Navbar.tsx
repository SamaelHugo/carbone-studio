"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Услуги", href: "/services" },
  { label: "Мастера", href: "/masters" },
  { label: "Галерея", href: "/gallery" },
  { label: "Запись", href: "/booking" },
];

const EASE_MONOPO = [0.76, 0, 0.24, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-40 transition-colors duration-500"
        style={{
          backgroundColor: scrolled
            ? "rgba(10, 10, 10, 0.9)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <nav className="flex items-center justify-between h-[80px] px-5 md:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="font-bebas text-[24px] tracking-[6px] text-text-primary hover:text-accent-copper transition-colors duration-300"
          >
            CARBONE
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline font-manrope text-[13px] uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors duration-[400ms] ease-monopo"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Phone */}
          <div className="hidden md:flex items-center gap-2">
            <Phone size={14} className="text-text-secondary" />
            <a
              href="tel:+79991234567"
              className="font-manrope text-[13px] text-text-secondary hover:text-accent-copper transition-colors duration-[400ms] ease-monopo"
            >
              +7 (999) 123-45-67
            </a>
          </div>

          {/* Mobile Burger */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col"
            style={{ backgroundColor: "var(--bg-primary)" }}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE_MONOPO }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-5">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-accent-copper"
                aria-label="Закрыть меню"
              >
                <X size={28} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
                  animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: EASE_MONOPO,
                    delay: 0.15 + i * 0.08,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-bebas text-[48px] tracking-[4px] text-text-primary hover:text-accent-copper transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Info */}
            <div className="pb-10 px-5 text-center space-y-2">
              <a
                href="tel:+79991234567"
                className="block font-manrope text-[13px] text-text-secondary"
              >
                +7 (999) 123-45-67
              </a>
              <p className="font-manrope text-[12px] text-text-muted">
                ул. Графитная, 12, Москва
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
