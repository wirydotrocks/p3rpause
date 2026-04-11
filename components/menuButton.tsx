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
    <span
      className={`font-[MenuFont] italic font-bold tracking-[-.1em] ${className}`}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </span>
  )
}
