"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { masters } from "@/lib/mock-data";
import ScrollReveal from "@/components/ScrollReveal";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function MastersPreview() {
  return (
    <section className="pt-[120px] md:pt-[200px] pb-[100px] md:pb-[160px]">
      {/* Section Intro */}
      <div className="text-center mb-16 md:mb-20 px-5 md:px-12">
        <ScrollReveal direction="up">
          <span className="font-manrope text-[11px] uppercase tracking-[0.3em] text-accent-copper">
            КОМАНДА
          </span>
        </ScrollReveal>

        <ScrollReveal direction="clip" delay={0.15}>
          <h2 className="font-bebas text-[56px] md:text-[72px] tracking-[3px] text-text-primary mt-4">
            НАШИ МАСТЕРА
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="font-manrope text-[15px] text-text-secondary mt-3">
            Каждый — профессионал с характером
          </p>
        </ScrollReveal>
      </div>

      {/* Masters Horizontal Scroll */}
      <div className="overflow-x-auto scrollbar-hide px-5 md:px-12">
        <div className="flex gap-6 md:gap-8 w-max md:w-full md:justify-center">
          {masters.map((master, i) => (
            <motion.div
              key={master.id}
              className="w-[280px] md:w-[300px] flex-shrink-0 group snap-start"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.2 }}
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden bg-bg-card">
                <img
                  src={master.photo}
                  alt={master.name}
                  className="w-full h-full object-cover grayscale transition-all duration-[600ms] ease-monopo group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
              </div>

              {/* Info */}
              <div className="mt-5">
                <p className="font-bebas text-[24px] tracking-[2px] text-text-primary link-underline inline-block">
                  {master.name}
                </p>
                <p className="font-manrope text-[13px] text-text-secondary mt-1">
                  {master.role} · {master.experience}
                </p>
                <p className="font-manrope text-[12px] text-text-muted mt-1">
                  {master.specialization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Link */}
      <div className="text-center mt-12 md:mt-16">
        <ScrollReveal direction="up" delay={0.2}>
          <Link
            href="/masters"
            className="inline-block link-underline font-manrope text-[13px] text-accent-copper transition-colors duration-300 hover:text-accent-copper-hover"
          >
            Все мастера →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
