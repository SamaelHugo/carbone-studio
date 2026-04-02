"use client";

import { motion } from "framer-motion";
import { Send, AtSign, MapPin, Phone, Mail, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

function InfoBlock({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <ScrollReveal direction="clip" delay={delay}>
      <div className="mb-12 md:mb-16">
        <p className="font-manrope text-[11px] uppercase tracking-[0.3em] text-accent-copper mb-3">
          {label}
        </p>
        {children}
      </div>
    </ScrollReveal>
  );
}

export default function ContactPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="h-[60vh] flex flex-col items-center justify-center relative overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[150px] md:text-[300px] tracking-[8px] text-text-primary opacity-[0.03] select-none pointer-events-none z-0 whitespace-nowrap">
          CARBONE
        </span>

        <ScrollReveal direction="clip" className="relative z-10">
          <h1 className="font-bebas text-[72px] md:text-[120px] tracking-[4px] text-text-primary text-center">
            КОНТАКТЫ
          </h1>
        </ScrollReveal>

        <motion.div
          className="relative z-10 w-[30%] h-[1px] my-5 origin-center"
          style={{ backgroundColor: "var(--border-subtle)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        />
      </section>

      {/* Contact Info */}
      <section className="px-5 md:px-12 py-[80px] md:py-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 max-w-[1200px] mx-auto">
          {/* Left Column — Info */}
          <div>
            <InfoBlock label="АДРЕС" delay={0}>
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-text-muted mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-manrope text-[20px] md:text-[22px] text-text-primary">
                    ул. Графитная, 12
                  </p>
                  <p className="font-manrope text-[15px] md:text-[16px] text-text-secondary mt-1">
                    Москва, Россия
                  </p>
                </div>
              </div>
            </InfoBlock>

            <InfoBlock label="ТЕЛЕФОН" delay={0.15}>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-text-muted flex-shrink-0" />
                <a
                  href="tel:+79991234567"
                  className="font-manrope text-[20px] md:text-[22px] text-text-primary hover:text-accent-copper transition-colors duration-300"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
            </InfoBlock>

            <InfoBlock label="EMAIL" delay={0.3}>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-text-muted flex-shrink-0" />
                <a
                  href="mailto:hello@carbone.studio"
                  className="font-manrope text-[20px] md:text-[22px] text-text-primary hover:text-accent-copper transition-colors duration-300"
                >
                  hello@carbone.studio
                </a>
              </div>
            </InfoBlock>

            <InfoBlock label="РЕЖИМ РАБОТЫ" delay={0.45}>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-text-muted flex-shrink-0" />
                <div>
                  <span className="font-manrope text-[20px] md:text-[22px] text-text-primary">
                    Ежедневно
                  </span>
                  <span className="font-manrope text-[20px] md:text-[22px] text-accent-copper ml-3">
                    10:00 — 22:00
                  </span>
                </div>
              </div>
            </InfoBlock>

            <InfoBlock label="СОЦИАЛЬНЫЕ СЕТИ" delay={0.6}>
              <div className="flex gap-6">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-manrope text-[15px] text-text-secondary hover:text-accent-copper transition-colors duration-300"
                >
                  <Send size={16} />
                  Telegram
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-manrope text-[15px] text-text-secondary hover:text-accent-copper transition-colors duration-300"
                >
                  <AtSign size={16} />
                  Instagram
                </a>
              </div>
            </InfoBlock>
          </div>

          {/* Right Column — Map */}
          <div>
            <ScrollReveal direction="clip" delay={0.2}>
              <div
                className="relative aspect-[4/3] flex items-center justify-center"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="text-center">
                  <MapPin
                    size={32}
                    className="text-text-disabled mx-auto mb-3"
                  />
                  <p className="font-manrope text-[14px] text-text-muted">
                    Карта
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <p className="font-manrope text-[14px] text-text-secondary mt-4">
                Метро Курская, 5 минут пешком
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
