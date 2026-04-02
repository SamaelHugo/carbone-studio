"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/mock-data";
import ScrollReveal from "@/components/ScrollReveal";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const barberServices = services.filter((s) => s.category === "barber").slice(0, 3);
const tattooServices = services.filter((s) => s.category === "tattoo").slice(1, 4);

const titleLines = ["Два мастерства", "под одной", "крышей"];

function ServiceCard({
  category,
  accentColor,
  categoryLabel,
  title,
  priceRange,
  servicesList,
  imageSrc,
  imageAlt,
}: {
  category: "barber" | "tattoo";
  accentColor: string;
  categoryLabel: string;
  title: string;
  priceRange: string;
  servicesList: { name: string; price: string }[];
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div>
      {/* Image */}
      <ScrollReveal direction="left" duration={0.8}>
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-monopo hover:scale-105 hover:brightness-110"
          />
        </div>
      </ScrollReveal>

      {/* Card Content */}
      <div className="mt-6 md:mt-8">
        <ScrollReveal direction="up" delay={0.1}>
          <span
            className="font-manrope text-[11px] uppercase tracking-widest"
            style={{ color: accentColor }}
          >
            {categoryLabel}
          </span>
        </ScrollReveal>

        <ScrollReveal direction="clip" delay={0.2}>
          <h3 className="font-bebas text-[32px] md:text-[36px] tracking-[2px] text-text-primary mt-2">
            {title}
          </h3>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="font-manrope text-[14px] text-text-secondary mt-1">
            {priceRange}
          </p>
        </ScrollReveal>

        {/* Services List */}
        <div className="mt-6 space-y-0">
          {servicesList.map((s, i) => (
            <ScrollReveal key={s.name} direction="up" delay={0.35 + i * 0.08}>
              <div
                className="flex items-center justify-between py-4"
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <span className="font-manrope text-[14px] text-text-secondary">
                  {s.name}
                </span>
                <span className="font-manrope text-[14px] text-text-primary">
                  {s.price}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPreview() {
  return (
    <section className="px-5 md:px-12 pt-[120px] md:pt-[200px] pb-[100px] md:pb-[160px]">
      <div className="flex flex-col md:flex-row gap-16 md:gap-12 lg:gap-20">
        {/* Left Column — Sticky */}
        <div className="w-full md:w-[35%] md:sticky md:top-40 md:self-start">
          {/* Eyebrow */}
          <ScrollReveal direction="up">
            <span className="font-manrope text-[11px] uppercase tracking-[0.3em] text-accent-copper">
              УСЛУГИ
            </span>
          </ScrollReveal>

          {/* Copper Line */}
          <motion.div
            className="mt-4 mb-8 h-[1px] w-[40px] origin-left"
            style={{ backgroundColor: "var(--accent-copper)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          />

          {/* Title Lines */}
          <div className="space-y-0">
            {titleLines.map((line, i) => (
              <ScrollReveal key={line} direction="clip" delay={i * 0.15}>
                <h2 className="font-bebas text-[48px] md:text-[56px] lg:text-[64px] leading-[0.95] tracking-[2px] text-text-primary">
                  {line}
                </h2>
              </ScrollReveal>
            ))}
          </div>

          {/* Body Text */}
          <ScrollReveal direction="up" delay={0.5}>
            <p className="mt-10 font-manrope text-[15px] leading-[1.8] text-text-secondary max-w-[320px]">
              Стрижки и бритьё от барберов с многолетним опытом. Авторские тату
              от художников, для которых ваша кожа — холст.
            </p>
          </ScrollReveal>

          {/* All Services Link */}
          <ScrollReveal direction="up" delay={0.6}>
            <Link
              href="/services"
              className="inline-block mt-8 link-underline font-manrope text-[13px] text-accent-copper transition-colors duration-300 hover:text-accent-copper-hover"
            >
              Все услуги →
            </Link>
          </ScrollReveal>
        </div>

        {/* Right Column — Cards */}
        <div className="w-full md:w-[60%] md:ml-auto space-y-16 md:space-y-20">
          <ServiceCard
            category="barber"
            accentColor="var(--accent-copper)"
            categoryLabel="БАРБЕР"
            title="Классика и мастерство"
            priceRange="от 1 500 ₽"
            servicesList={barberServices.map((s) => ({
              name: s.name,
              price: s.price,
            }))}
            imageSrc="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80"
            imageAlt="Барбершоп CARBONE"
          />

          <ServiceCard
            category="tattoo"
            accentColor="var(--accent-red)"
            categoryLabel="ТАТУ"
            title="Искусство навсегда"
            priceRange="от 5 000 ₽"
            servicesList={tattooServices.map((s) => ({
              name: s.name,
              price: s.price,
            }))}
            imageSrc="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80"
            imageAlt="Тату-студия CARBONE"
          />
        </div>
      </div>
    </section>
  );
}
