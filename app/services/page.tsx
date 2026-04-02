"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/mock-data";
import ScrollReveal from "@/components/ScrollReveal";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const barberServices = services.filter((s) => s.category === "barber");
const tattooServices = services.filter((s) => s.category === "tattoo");

function ServiceRow({
  service,
  accentColor,
  delay,
}: {
  service: (typeof services)[0];
  accentColor: string;
  delay: number;
}) {
  return (
    <ScrollReveal direction="up" delay={delay}>
      <div
        className="group flex flex-col md:flex-row md:items-center justify-between py-6 transition-colors duration-500 ease-monopo hover:bg-bg-card px-0 hover:px-4"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
      >
        <span
          className="font-manrope text-[16px] md:text-[18px] text-text-primary transition-all duration-500 ease-monopo group-hover:translate-x-2"
          style={{ "--hover-color": accentColor } as React.CSSProperties}
        >
          <span className="group-hover:text-[var(--hover-color)] transition-colors duration-500">
            {service.name}
          </span>
        </span>

        <div className="flex items-center gap-6 md:gap-12 mt-2 md:mt-0">
          <span className="hidden md:inline font-manrope text-[14px] text-text-muted">
            {service.duration}
          </span>
          <span
            className="font-manrope text-[16px] md:text-[18px]"
            style={{ color: accentColor }}
          >
            {service.price}
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
}

function ServiceSection({
  number,
  title,
  accentColor,
  description,
  servicesList,
  imageSrc,
  imageAlt,
}: {
  number: string;
  title: string;
  accentColor: string;
  description: string;
  servicesList: typeof services;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="px-5 md:px-12 py-[100px] md:py-[160px]">
      {/* Section Header */}
      <div className="relative mb-12 md:mb-16">
        <ScrollReveal direction="clip">
          <span className="font-bebas text-[72px] md:text-[96px] text-text-muted opacity-[0.15] leading-none">
            {number}
          </span>
        </ScrollReveal>
        <ScrollReveal direction="clip" delay={0.15}>
          <h2
            className="font-bebas text-[48px] md:text-[56px] tracking-[3px] leading-none -mt-8 md:-mt-12"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h2>
        </ScrollReveal>
      </div>

      {/* Description */}
      <ScrollReveal direction="up" delay={0.25}>
        <p className="font-manrope text-[15px] md:text-[16px] text-text-secondary leading-[1.8] max-w-[600px] mb-12 md:mb-16">
          {description}
        </p>
      </ScrollReveal>

      {/* Services List */}
      <div>
        {servicesList.map((service, i) => (
          <ServiceRow
            key={service.id}
            service={service}
            accentColor={accentColor}
            delay={i * 0.1}
          />
        ))}
      </div>

      {/* Atmospheric Photo */}
      <motion.div
        className="relative w-full aspect-[21/9] md:aspect-[21/9] overflow-hidden mt-16 md:mt-20 bg-bg-card"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: EASE }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Watermark */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[150px] md:text-[300px] tracking-[8px] text-text-primary opacity-[0.03] select-none pointer-events-none z-0 whitespace-nowrap">
          CARBONE
        </span>

        <ScrollReveal direction="clip" className="relative z-10">
          <h1 className="font-bebas text-[72px] md:text-[120px] tracking-[4px] text-text-primary text-center">
            УСЛУГИ
          </h1>
        </ScrollReveal>

        {/* Decorative line */}
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
          Мастерство в каждой детали
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

      {/* Barber Section */}
      <ServiceSection
        number="01"
        title="БАРБЕР"
        accentColor="var(--accent-copper)"
        description="Классическое мастерство с вниманием к деталям. Каждая стрижка — это индивидуальный подход, горячие полотенца и атмосфера, в которой хочется остаться."
        servicesList={barberServices}
        imageSrc="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Барбершоп CARBONE — атмосфера"
      />

      {/* Tattoo Section */}
      <ServiceSection
        number="02"
        title="ТАТУ"
        accentColor="var(--accent-red)"
        description="Авторские татуировки от художников с уникальным стилем. Бесплатная консультация, индивидуальный эскиз и полная стерильность. Ваша кожа — наш холст."
        servicesList={tattooServices}
        imageSrc="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Тату-студия CARBONE — мастер за работой"
      />

      {/* Booking CTA */}
      <section className="py-[100px] md:py-[160px] text-center px-5 md:px-12">
        <ScrollReveal direction="clip">
          <h2 className="font-bebas text-[48px] md:text-[56px] tracking-[3px] text-text-primary">
            Выбрали услугу?
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-10 md:mt-12">
            <Link
              href="/booking"
              className="inline-block border border-text-primary px-12 py-5 font-manrope text-[14px] uppercase tracking-wider text-text-primary transition-all duration-500 ease-monopo hover:bg-accent-copper hover:border-accent-copper hover:text-[#0A0A0A] hover:scale-[1.02] w-full md:w-auto"
            >
              Записаться
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
