"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });
  const [hoverType, setHoverType] = useState<"default" | "hover" | "text">(
    "default"
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    const onElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]") ||
        target.closest("img")
      ) {
        setHoverType("hover");
      } else if (
        target.closest("p") ||
        target.closest("span") ||
        target.closest("[data-cursor-text]")
      ) {
        setHoverType("text");
      }
    };

    const onElementLeave = () => {
      setHoverType("default");
    };

    // Circle follows with lerp
    let animId: number;
    const animate = () => {
      const lerp = 0.15;
      circlePos.current.x +=
        (mouse.current.x - circlePos.current.x) * lerp;
      circlePos.current.y +=
        (mouse.current.y - circlePos.current.y) * lerp;

      if (circleRef.current) {
        const size = hoverType === "hover" ? 60 : 40;
        circleRef.current.style.transform = `translate(${circlePos.current.x - size / 2}px, ${circlePos.current.y - size / 2}px)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onElementHover);
    document.addEventListener("mouseout", onElementLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onElementHover);
      document.removeEventListener("mouseout", onElementLeave);
    };
  }, [visible, hoverType]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "var(--accent-copper)",
          opacity: visible && hoverType !== "hover" ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"
        style={{
          width: hoverType === "hover" ? 60 : hoverType === "text" ? 3 : 40,
          height: hoverType === "hover" ? 60 : hoverType === "text" ? 32 : 40,
          borderRadius: hoverType === "text" ? "1px" : "50%",
          border:
            hoverType === "text"
              ? "none"
              : "1px solid var(--accent-copper)",
          backgroundColor:
            hoverType === "text" ? "var(--accent-copper)" : "transparent",
          opacity: visible ? 0.6 : 0,
          transition:
            "width 0.4s cubic-bezier(0.76, 0, 0.24, 1), height 0.4s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.3s ease, border-radius 0.4s cubic-bezier(0.76, 0, 0.24, 1), background-color 0.3s ease",
        }}
      />
    </>
  );
}
