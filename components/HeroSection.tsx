"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const eyebrow = "БАРБЕРШОП & ТАТУ-СТУДИЯ";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center pl-5 md:pl-12 lg:pl-12 pr-5">
        {/* Eyebrow */}
        <div className="overflow-hidden mb-6">
          <span className="flex font-manrope text-[12px] uppercase tracking-[0.3em] text-text-secondary">
            {eyebrow.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: EASE,
                  delay: 0.03 * i,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </div>

        {/* Main Title */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-bebas text-[72px] md:text-[120px] lg:text-[140px] leading-[0.9] tracking-[4px] text-text-primary"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          >
            CARBONE
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          className="font-playfair italic text-[18px] md:text-[22px] text-text-secondary mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
        >
          Искусство на коже и в деталях
        </motion.p>

        {/* CTA Row */}
        <motion.div
          className="flex items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.2 }}
        >
          <Link
            href="/booking"
            className="group relative border border-text-primary px-10 py-4 font-manrope text-[13px] uppercase tracking-wider text-text-primary transition-all duration-500 ease-monopo hover:bg-accent-copper hover:border-accent-copper hover:text-[#0A0A0A]"
          >
            Записаться
          </Link>
          <Link
            href="/gallery"
            className="link-underline font-manrope text-[13px] uppercase tracking-wider text-text-secondary transition-colors duration-300 hover:text-text-primary"
          >
            Наши работы
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <motion.div
          className="w-[1px] h-[50px] bg-text-muted origin-top"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <span className="font-manrope text-[10px] uppercase tracking-[0.3em] text-text-muted">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
