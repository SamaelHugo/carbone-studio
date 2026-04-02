"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { services, masters, type Service, type Master } from "@/lib/mock-data";
import ScrollReveal from "@/components/ScrollReveal";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

type Category = "barber" | "tattoo";

export default function BookingPage() {
  const [category, setCategory] = useState<Category | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedMaster, setSelectedMaster] = useState<Master | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);

  const filteredServices = category
    ? services.filter((s) => s.category === category)
    : [];

  const filteredMasters = category
    ? masters.filter((m) => {
        if (category === "barber")
          return m.role.toLowerCase().includes("барбер");
        return m.role.toLowerCase().includes("тату");
      })
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedMaster || !name || !phone) return;
    setSubmitted(true);
  };

  const resetCategory = (cat: Category) => {
    setCategory(cat);
    setSelectedService(null);
    setSelectedMaster(null);
    setSubmitted(false);
  };

  const inputClass =
    "w-full bg-bg-card border border-border-subtle font-manrope text-[15px] text-text-primary px-5 py-4 focus:border-accent-copper focus:outline-none transition-colors duration-300";

  return (
    <main>
      {/* Page Hero */}
      <section className="h-[60vh] flex flex-col items-center justify-center relative overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[150px] md:text-[300px] tracking-[8px] text-text-primary opacity-[0.03] select-none pointer-events-none z-0 whitespace-nowrap">
          CARBONE
        </span>

        <ScrollReveal direction="clip" className="relative z-10">
          <h1 className="font-bebas text-[72px] md:text-[120px] tracking-[4px] text-text-primary text-center">
            ЗАПИСЬ
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
          className="relative z-10 font-playfair italic text-[18px] md:text-[22px] text-text-secondary text-center px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
        >
          Выберите мастера, услугу и удобное время
        </motion.p>
      </section>

      {/* Booking Form */}
      <section className="px-5 md:px-12 py-[80px] md:py-[120px]">
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20 max-w-[1200px] mx-auto">
          {/* Left Column — Form */}
          <div className="w-full md:w-[55%]">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="text-center py-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                    style={{ border: "1px solid var(--accent-copper)" }}
                  >
                    <Check size={28} className="text-accent-copper" />
                  </div>
                  <h3 className="font-bebas text-[36px] tracking-[2px] text-text-primary">
                    СПАСИБО!
                  </h3>
                  <p className="font-manrope text-[15px] text-text-secondary mt-4 max-w-[400px] mx-auto leading-[1.7]">
                    Мы свяжемся с вами для подтверждения записи в ближайшее
                    время.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Step 1 — Category */}
                  <div className="mb-12">
                    <ScrollReveal direction="up">
                      <p className="font-manrope text-[11px] uppercase tracking-[0.3em] text-accent-copper mb-4">
                        Шаг 1 — Категория
                      </p>
                    </ScrollReveal>
                    <div className="grid grid-cols-2 gap-4">
                      {(["barber", "tattoo"] as const).map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => resetCategory(cat)}
                          className={`py-5 font-manrope text-[15px] uppercase tracking-wider transition-all duration-500 ease-monopo ${
                            category === cat
                              ? "bg-bg-elevated border-accent-copper text-text-primary"
                              : "bg-transparent border-border-subtle text-text-muted hover:text-text-secondary hover:border-border-medium"
                          }`}
                          style={{
                            border: `1px solid ${category === cat ? "var(--accent-copper)" : "var(--border-subtle)"}`,
                          }}
                        >
                          {cat === "barber" ? "Барбер" : "Тату"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2 — Service */}
                  <AnimatePresence>
                    {category && (
                      <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: EASE }}
                      >
                        <p className="font-manrope text-[11px] uppercase tracking-[0.3em] text-accent-copper mb-4">
                          Шаг 2 — Услуга
                        </p>
                        <div>
                          {filteredServices.map((service) => (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => setSelectedService(service)}
                              className={`w-full flex items-center justify-between py-5 px-4 text-left transition-all duration-300 ease-monopo ${
                                selectedService?.id === service.id
                                  ? "bg-bg-elevated"
                                  : "hover:bg-bg-card"
                              }`}
                              style={{
                                borderBottom:
                                  "1px solid var(--border-subtle)",
                                borderLeft:
                                  selectedService?.id === service.id
                                    ? "2px solid var(--accent-copper)"
                                    : "2px solid transparent",
                              }}
                            >
                              <div>
                                <span className="font-manrope text-[15px] text-text-primary block">
                                  {service.name}
                                </span>
                                <span className="font-manrope text-[12px] text-text-muted mt-1 block">
                                  {service.duration}
                                </span>
                              </div>
                              <span className="font-manrope text-[15px] text-accent-copper">
                                {service.price}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Step 3 — Master */}
                  <AnimatePresence>
                    {selectedService && (
                      <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: EASE }}
                      >
                        <p className="font-manrope text-[11px] uppercase tracking-[0.3em] text-accent-copper mb-4">
                          Шаг 3 — Мастер
                        </p>
                        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                          {filteredMasters.map((master) => (
                            <button
                              key={master.id}
                              type="button"
                              onClick={() => setSelectedMaster(master)}
                              className={`flex-shrink-0 w-[140px] text-center transition-all duration-300 ease-monopo p-3 ${
                                selectedMaster?.id === master.id
                                  ? "bg-bg-elevated"
                                  : "hover:bg-bg-card"
                              }`}
                              style={{
                                border: `1px solid ${selectedMaster?.id === master.id ? "var(--accent-copper)" : "var(--border-subtle)"}`,
                              }}
                            >
                              <div className="w-full aspect-square overflow-hidden bg-bg-card mb-3">
                                <img
                                  src={master.photo}
                                  alt={master.name}
                                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                              </div>
                              <p className="font-manrope text-[13px] text-text-primary">
                                {master.name}
                              </p>
                              <p className="font-manrope text-[11px] text-text-muted mt-1">
                                {master.role}
                              </p>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Step 4 — Contact */}
                  <AnimatePresence>
                    {selectedMaster && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: EASE }}
                      >
                        <p className="font-manrope text-[11px] uppercase tracking-[0.3em] text-accent-copper mb-4">
                          Шаг 4 — Контактные данные
                        </p>
                        <div className="space-y-4 mb-8">
                          <input
                            type="text"
                            placeholder="Имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className={inputClass}
                            style={{ caretColor: "var(--accent-copper)" }}
                          />
                          <input
                            type="tel"
                            placeholder="Телефон"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className={inputClass}
                            style={{ caretColor: "var(--accent-copper)" }}
                          />
                          <textarea
                            placeholder="Комментарий (необязательно)"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            rows={4}
                            className={`${inputClass} resize-none`}
                            style={{ caretColor: "var(--accent-copper)" }}
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-accent-copper text-[#0A0A0A] font-manrope text-[14px] uppercase tracking-wider py-5 transition-all duration-500 ease-monopo hover:bg-accent-copper-hover"
                        >
                          Отправить заявку
                        </button>

                        <p className="font-manrope text-[13px] text-text-muted text-center mt-5">
                          Или позвоните:{" "}
                          <a
                            href="tel:+79991234567"
                            className="hover:text-accent-copper transition-colors duration-300"
                          >
                            +7 (999) 123-45-67
                          </a>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column — Summary */}
          <div className="w-full md:w-[40%]">
            {/* Mobile toggle */}
            <button
              className="w-full md:hidden flex items-center justify-between py-4 px-5 mb-4"
              style={{ border: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-card)" }}
              onClick={() => setSummaryOpen(!summaryOpen)}
            >
              <span className="font-bebas text-[20px] tracking-[2px] text-text-primary">
                Ваш выбор
              </span>
              <span className="font-manrope text-[12px] text-text-muted">
                {summaryOpen ? "Свернуть" : "Развернуть"}
              </span>
            </button>

            <div
              className={`md:sticky md:top-[120px] p-8 md:p-10 ${summaryOpen ? "block" : "hidden"} md:block`}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <h3 className="font-bebas text-[28px] tracking-[2px] text-text-primary mb-8 hidden md:block">
                Ваш выбор
              </h3>

              <div className="space-y-6">
                {/* Category */}
                <div>
                  <p className="font-manrope text-[11px] uppercase tracking-widest text-text-muted mb-1">
                    Категория
                  </p>
                  <p className="font-manrope text-[15px] text-text-primary">
                    {category === "barber"
                      ? "Барбер"
                      : category === "tattoo"
                        ? "Тату"
                        : "—"}
                  </p>
                </div>

                {/* Service */}
                <div
                  style={{
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "24px",
                  }}
                >
                  <p className="font-manrope text-[11px] uppercase tracking-widest text-text-muted mb-1">
                    Услуга
                  </p>
                  <p className="font-manrope text-[15px] text-text-primary">
                    {selectedService?.name || "—"}
                  </p>
                </div>

                {/* Master */}
                <div
                  style={{
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "24px",
                  }}
                >
                  <p className="font-manrope text-[11px] uppercase tracking-widest text-text-muted mb-1">
                    Мастер
                  </p>
                  {selectedMaster ? (
                    <div className="flex items-center gap-3 mt-2">
                      <div className="w-10 h-10 overflow-hidden bg-bg-elevated flex-shrink-0">
                        <img
                          src={selectedMaster.photo}
                          alt={selectedMaster.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="font-manrope text-[15px] text-text-primary">
                        {selectedMaster.name}
                      </p>
                    </div>
                  ) : (
                    <p className="font-manrope text-[15px] text-text-primary">
                      —
                    </p>
                  )}
                </div>

                {/* Total */}
                <div
                  style={{
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "24px",
                  }}
                >
                  <p className="font-manrope text-[11px] uppercase tracking-widest text-text-muted mb-1">
                    Стоимость
                  </p>
                  <p className="font-bebas text-[32px] tracking-[2px] text-accent-copper">
                    {selectedService?.price || "—"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
