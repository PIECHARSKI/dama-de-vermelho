"use client"

import type React from "react"

import { Button } from "@/components/ui/button"

interface CTAButtonProps {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
}

export function CTAButton({ children, className = "", fullWidth = false }: CTAButtonProps) {
  const handleClick = () => {
    window.open("https://pay.cakto.com.br/f3ah9is_384133", "_blank", "noopener,noreferrer")
  }

  return (
    <Button
      className={`bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}
