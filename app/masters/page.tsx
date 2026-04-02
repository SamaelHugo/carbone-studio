"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { masters } from "@/lib/mock-data";
import ScrollReveal from "@/components/ScrollReveal";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

function MasterBlock({
  master,
  index,
}: {
  master: (typeof masters)[0];
  index: number;
}) {
  const isImageLeft = index % 2 === 0;
  const number = String(index + 1).padStart(2, "0");
  const tags = master.specialization.split(", ");

  const imageEl = (
    <motion.div
      className="relative aspect-[3/4] overflow-hidden bg-bg-card w-full"
      initial={{ clipPath: isImageLeft ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: EASE }}
    >
      <img
        src={master.photo}
        alt={master.name}
        className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[800ms] ease-monopo hover:grayscale-0"
      />
    </motion.div>
  );

  const infoEl = (
    <div className="relative flex flex-col justify-center py-8 md:py-0">
      {/* Background Number */}
      <span className="hidden md:block absolute -top-4 left-0 font-bebas text-[96px] text-text-muted opacity-[0.1] leading-none select-none pointer-events-none">
        {number}
      </span>

      <div className="relative">
        <ScrollReveal direction="clip" delay={0.2}>
          <h2 className="font-bebas text-[36px] md:text-[48px] tracking-[3px] text-text-primary">
            {master.name.toUpperCase()}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.35}>
          <p className="font-manrope text-[14px] text-accent-copper mt-2">
            {master.role} · {master.experience}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.45}>
          <p className="font-manrope text-[15px] text-text-secondary leading-[1.8] mt-6 max-w-[440px]">
            {master.bio}
          </p>
        </ScrollReveal>

        {/* Tags */}
        <ScrollReveal direction="up" delay={0.55}>
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-manrope text-[11px] text-text-muted px-3 py-1.5"
                style={{ border: "1px solid var(--border-subtle)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.65}>
          <Link
            href="/booking"
            className="inline-block mt-8 link-underline font-manrope text-[13px] text-accent-copper transition-colors duration-300 hover:text-accent-copper-hover"
          >
            Записаться к мастеру →
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 md:gap-16 items-center">
      {isImageLeft ? (
        <>
          {imageEl}
          {infoEl}
        </>
      ) : (
        <>
          <div className="md:order-2">{imageEl}</div>
          <div className="md:order-1">{infoEl}</div>
        </>
      )}
    </div>
  );
}

export default function MastersPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[150px] md:text-[300px] tracking-[8px] text-text-primary opacity-[0.03] select-none pointer-events-none z-0 whitespace-nowrap">
          CARBONE
        </span>

        <ScrollReveal direction="clip" className="relative z-10">
          <h1 className="font-bebas text-[72px] md:text-[120px] tracking-[4px] text-text-primary text-center">
            МАСТЕРА
          </h1>
        </ScrollReveal>

        <motion.div
          className="relative z-10 w-[30%] h-[1px] my-5 origin-center"
          style={{ backgroundColor: "var(--border-subtle)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        />

        <motion.p
          className="relative z-10 font-playfair italic text-[18px] md:text-[22px] text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
        >
          Профессионалы с характером
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
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

      {/* Masters Grid */}
      <section className="px-5 md:px-12 py-[80px] md:py-[160px]">
        {masters.map((master, i) => (
          <div key={master.id}>
            <div className="py-[60px] md:py-[120px]">
              <MasterBlock master={master} index={i} />
            </div>

            {/* Divider between masters */}
            {i < masters.length - 1 && (
              <motion.div
                className="mx-auto h-[1px] origin-center"
                style={{
                  backgroundColor: "var(--border-subtle)",
                  width: "40%",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: EASE }}
              />
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
