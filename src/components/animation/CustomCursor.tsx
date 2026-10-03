"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useFinePointer } from "@/hooks/useFinePointer";

const INTERACTIVE = "a, button, [role='button'], input, select, textarea, label";

export default function CustomCursor() {
  const isFine = useFinePointer();
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 });

  useEffect(() => {
    if (!isFine) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      setHovering(!!(e.target as Element).closest(INTERACTIVE));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [isFine, x, y]);

  if (!isFine) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[70]"
    >
      <motion.div
        animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.6 : 1 }}
        transition={{ duration: 0.2 }}
        className="-ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-brand-yellow"
      />
    </motion.div>
  );
}