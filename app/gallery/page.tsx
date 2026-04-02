"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery, type GalleryItem } from "@/lib/mock-data";
import ScrollReveal from "@/components/ScrollReveal";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

type FilterType = "all" | "barber" | "tattoo";

const filters: { key: FilterType; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "barber", label: "Барбер" },
  { key: "tattoo", label: "Тату" },
];

// Vary aspect ratios per item index for masonry feel
const aspects = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[3/4]",
];

function getCount(filter: FilterType) {
  if (filter === "all") return gallery.length;
  return gallery.filter((g) => g.category === filter).length;
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? gallery
      : gallery.filter((g) => g.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    const idx = filtered.findIndex((g) => g.id === item.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, goNext, goPrev]);

  // Distribute into columns for masonry
  const getColumns = (items: GalleryItem[], cols: number) => {
    const columns: GalleryItem[][] = Array.from({ length: cols }, () => []);
    items.forEach((item, i) => columns[i % cols].push(item));
    return columns;
  };

  return (
    <main>
      {/* Page Hero */}
      <section className="h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[150px] md:text-[300px] tracking-[8px] text-text-primary opacity-[0.03] select-none pointer-events-none z-0 whitespace-nowrap">
          CARBONE
        </span>

        <ScrollReveal direction="clip" className="relative z-10">
          <h1 className="font-bebas text-[72px] md:text-[120px] tracking-[4px] text-text-primary text-center">
            ГАЛЕРЕЯ
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
          Наши работы говорят сами за себя
        </motion.p>
      </section>

      {/* Filter Bar */}
      <div
        className="sticky top-[80px] z-30 py-5 px-5 md:px-12 backdrop-blur-md"
        style={{
          backgroundColor: "rgba(10, 10, 10, 0.95)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="flex gap-8 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`font-manrope text-[12px] uppercase tracking-widest whitespace-nowrap pb-2 transition-colors duration-300 ${
                activeFilter === f.key
                  ? "text-text-primary border-b-2 border-accent-copper"
                  : "text-text-muted hover:text-text-secondary border-b-2 border-transparent"
              }`}
            >
              {f.label}{" "}
              <span className="text-text-muted">({getCount(f.key)})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="px-5 md:px-12 py-12 md:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {/* Desktop 3 cols / Tablet 2 cols / Mobile 1 col */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(() => {
                const cols = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 2;
                const columns = getColumns(filtered, 3);
                return columns.map((col, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-4">
                    {col.map((item, itemIdx) => {
                      const globalIdx = gallery.findIndex((g) => g.id === item.id);
                      const aspect = aspects[globalIdx % aspects.length];
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
                          animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            ease: EASE,
                            delay: (colIdx * 0.1) + (itemIdx * 0.08),
                          }}
                        >
                          <GalleryCard
                            item={item}
                            aspect={aspect}
                            onClick={() => openLightbox(item)}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                ));
              })()}
            </div>

            {/* Mobile 1 col */}
            <div className="flex flex-col gap-4 md:hidden">
              {filtered.map((item, i) => {
                const globalIdx = gallery.findIndex((g) => g.id === item.id);
                const aspect = aspects[globalIdx % aspects.length];
                return (
                  <motion.div
                    key={item.id}
                    initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
                    animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: i * 0.08,
                    }}
                  >
                    <GalleryCard
                      item={item}
                      aspect={aspect}
                      onClick={() => openLightbox(item)}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-text-muted hover:text-accent-copper transition-colors duration-300 z-10"
              onClick={closeLightbox}
              aria-label="Закрыть"
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Предыдущая"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <motion.div
              key={filtered[lightboxIndex].id}
              className="relative max-w-[90vw] max-h-[85vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].description}
                className="max-w-full max-h-[85vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <span
                  className="font-manrope text-[11px] uppercase tracking-widest"
                  style={{
                    color:
                      filtered[lightboxIndex].category === "tattoo"
                        ? "var(--accent-red)"
                        : "var(--accent-copper)",
                  }}
                >
                  {filtered[lightboxIndex].category === "tattoo"
                    ? "ТАТУ"
                    : "БАРБЕР"}
                </span>
                <p className="font-manrope text-[14px] text-text-primary mt-1">
                  {filtered[lightboxIndex].description}
                </p>
                <p className="font-manrope text-[12px] text-text-muted mt-1">
                  {filtered[lightboxIndex].master}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Следующая"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function GalleryCard({
  item,
  aspect,
  onClick,
}: {
  item: GalleryItem;
  aspect: string;
  onClick: () => void;
}) {
  return (
    <div
      className={`relative ${aspect} overflow-hidden bg-bg-card group`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick();
      }}
      data-cursor-hover
    >
      <img
        src={item.image}
        alt={item.description}
        className="absolute inset-0 w-full h-full object-cover saturate-[0.8] transition-all duration-[600ms] ease-monopo group-hover:saturate-100 group-hover:scale-[1.04]"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
        <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-monopo">
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
          <p className="font-manrope text-[14px] text-text-primary mt-1">
            {item.master}
          </p>
        </div>
      </div>
    </div>
  );
}
