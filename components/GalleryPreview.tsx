"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { gallery } from "@/lib/mock-data";
import ScrollReveal from "@/components/ScrollReveal";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const items = gallery.slice(0, 4);

function GalleryImage({
  item,
  aspect,
  delay,
}: {
  item: (typeof gallery)[0];
  aspect: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`relative ${aspect} overflow-hidden bg-bg-card group`}
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      <img
        src={item.image}
        alt={item.description}
        className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[600ms] ease-monopo group-hover:grayscale-0 group-hover:scale-[1.03]"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-5 md:p-6">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-monopo">
          <span
            className="font-manrope text-[11px] uppercase tracking-widest"
            style={{
              color:
                item.category === "tattoo"
                  ? "var(--accent-red)"
                  : "var(--accent-copper)",
            }}
          >
            {item.category === "tattoo" ? "ТАТУ" : "БАРБЕР"}
          </span>
          <p className="font-manrope text-[13px] text-text-primary mt-1">
            {item.master}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function GalleryPreview() {
  return (
    <section
      className="py-[100px] md:py-[160px] px-5 md:px-12"
      style={{ backgroundColor: "var(--bg-card)" }}
    >
      {/* Title */}
      <ScrollReveal direction="clip" className="mb-12 md:mb-16">
        <h2 className="font-bebas text-[48px] md:text-[64px] tracking-[3px] text-text-primary">
          ИЗБРАННЫЕ РАБОТЫ
        </h2>
      </ScrollReveal>

      {/* Grid */}
      <div className="space-y-4">
        {/* Row 1: large (60%) + small (40%) */}
        <div className="grid grid-cols-2 md:grid-cols-[3fr_2fr] gap-4">
          <GalleryImage item={items[0]} aspect="aspect-[16/10]" delay={0} />
          <GalleryImage item={items[1]} aspect="aspect-square md:aspect-[16/10]" delay={0.15} />
        </div>

        {/* Row 2: small (40%) + large (60%) */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_3fr] gap-4">
          <GalleryImage item={items[2]} aspect="aspect-square md:aspect-[16/10]" delay={0.1} />
          <GalleryImage item={items[3]} aspect="aspect-[16/10]" delay={0.25} />
        </div>
      </div>

      {/* Link */}
      <div className="text-right mt-12 md:mt-16">
        <ScrollReveal direction="up" delay={0.2}>
          <Link
            href="/gallery"
            className="inline-block link-underline font-manrope text-[13px] text-accent-copper transition-colors duration-300 hover:text-accent-copper-hover"
          >
            Вся галерея →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
