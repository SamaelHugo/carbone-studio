"use client";

import Link from "next/link";
import { Send, AtSign } from "lucide-react";

const footerLinks = [
  { label: "Услуги", href: "/services" },
  { label: "Мастера", href: "/masters" },
  { label: "Галерея", href: "/gallery" },
  { label: "Запись", href: "/booking" },
  { label: "Контакты", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {/* Main Content */}
      <div className="px-5 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-3">
            <p className="font-bebas text-[20px] tracking-[4px] text-text-primary">
              CARBONE
            </p>
            <p className="font-playfair italic text-[14px] text-text-muted">
              Искусство на коже и в деталях
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-manrope text-[13px] text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contacts */}
          <div className="space-y-3 font-manrope text-[13px] text-text-secondary">
            <p>ул. Графитная, 12, Москва</p>
            <a
              href="tel:+79991234567"
              className="block hover:text-accent-copper transition-colors duration-300"
            >
              +7 (999) 123-45-67
            </a>
            <a
              href="mailto:info@carbone.studio"
              className="block hover:text-accent-copper transition-colors duration-300"
            >
              info@carbone.studio
            </a>
            <p className="text-text-muted">Ежедневно 10:00 — 22:00</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="px-5 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid var(--border-subtle)" }}
      >
        <p className="font-manrope text-[11px] text-text-muted">
          © 2026 CARBONE. Все права защищены.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-copper transition-colors duration-300"
            aria-label="Telegram"
          >
            <Send size={16} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-copper transition-colors duration-300"
            aria-label="Instagram"
          >
            <AtSign size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
