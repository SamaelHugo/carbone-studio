"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "clip";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const EASE_MONOPO: [number, number, number, number] = [0.76, 0, 0.24, 1];

const variants = {
  clip: {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: { clipPath: "inset(0 0 0 0)" },
  },
  up: {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  left: {
    hidden: { x: -80, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  right: {
    hidden: { x: 80, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
};

export default function ScrollReveal({
  children,
  direction = "clip",
  delay = 0,
  duration = 0.8,
  className = "",
}: ScrollRevealProps) {
  const variant = variants[direction];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: variant.hidden,
        visible: variant.visible,
      }}
      transition={{
        duration,
        ease: EASE_MONOPO,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
