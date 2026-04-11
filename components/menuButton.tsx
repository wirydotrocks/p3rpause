"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface MenuButtonProps {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  whiteClassName?: string;
  pinkClassName?: string;
}

export function MenuButton({
  label,
  className = "",
  style,
  whiteClassName = "",
  pinkClassName = "",
}: MenuButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      className={`relative inline-block font-[MenuFont] italic font-bold tracking-[-0.1em] ${className}`}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="relative z-10">{label}</span>

      <motion.span
        className={`pointer-events-none absolute inset-0 bg-[#FF92ED] [clip-path:polygon(100%_44%,4%_44%,88%_67%)] ${pinkClassName}`}
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
      />

      <motion.span
        className={`pointer-events-none absolute inset-0 bg-white [clip-path:polygon(100%_44%,4%_44%,88%_67%)] ${whiteClassName}`}
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
      />
    </motion.span>
  );
}
