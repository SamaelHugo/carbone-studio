"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function BookingCta() {
  return (
    <section className="relative py-[120px] md:py-[200px]">
      {/* Top Decorative Line */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] origin-center"
        style={{
          backgroundColor: "var(--border-subtle)",
          width: "60%",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: EASE }}
      />

      {/* Content */}
      <div className="text-center px-5 md:px-12">
        <ScrollReveal direction="clip">
          <h2 className="font-bebas text-[64px] md:text-[100px] lg:text-[120px] tracking-[4px] text-text-primary leading-[0.95]">
            ГОТОВЫ?
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="clip" delay={0.3}>
          <p className="font-playfair italic text-[22px] md:text-[28px] text-text-secondary mt-4 md:mt-6">
            Запишитесь прямо сейчас
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-12 md:mt-16">
            <Link
              href="/booking"
              className="inline-block border border-text-primary px-12 py-5 font-manrope text-[14px] uppercase tracking-wider text-text-primary transition-all duration-500 ease-monopo hover:bg-accent-copper hover:border-accent-copper hover:text-[#0A0A0A] hover:scale-[1.02] w-full md:w-auto"
            >
              Записаться
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.6}>
          <p className="font-manrope text-[13px] text-text-muted mt-6">
            Или позвоните:{" "}
            <a
              href="tel:+79991234567"
              className="hover:text-accent-copper transition-colors duration-300"
            >
              +7 (999) 123-45-67
            </a>
          </p>
        </ScrollReveal>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] origin-center"
        style={{
          backgroundColor: "var(--border-subtle)",
          width: "60%",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: EASE }}
      />
    </section>
  );
}
