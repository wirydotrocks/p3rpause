"use client"
import { useState } from "react"
import { motion } from "motion/react"

interface MenuButtonProps {
  label: string
  className?: string
  style?: React.CSSProperties
}

export function MenuButton({ label, className = "", style }: MenuButtonProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.span
      className={`font-[MenuFont] italic font-bold tracking-[-.1em] ${className}`}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}

      <motion.span className="pointer-events-none absolute inset-0 bg-white [clip-path:polygon(100%_44%,4%_44%,88%_67%)]" />

    </motion.span>
  )
}
