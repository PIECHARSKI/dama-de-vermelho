"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface Image3DProps {
  src: string
  alt: string
  className?: string
}

export function Image3D({ src, alt, className = "" }: Image3DProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Simular um efeito de entrada quando o componente carrega
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()

    // Calculate mouse position relative to the container
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5

    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    // Reset position with a slight delay for smooth transition
    setTimeout(() => setPosition({ x: 0, y: 0 }), 100)
  }

  // Calculate the transform style based on mouse position
  const transformStyle = isHovering
    ? {
        transform: `
          perspective(1000px)
          rotateX(${position.y * -10}deg)
          rotateY(${position.x * 10}deg)
          scale3d(1.05, 1.05, 1.05)
        `,
        boxShadow: `
          ${position.x * 30}px ${position.y * 30}px 30px rgba(0, 0, 0, 0.25)
        `,
      }
    : {
        transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-radial from-red-900/10 via-transparent to-transparent z-10 opacity-0 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : ""}`}
        style={{
          filter: "blur(40px)",
          transform: "scale(1.2)",
        }}
      ></div>

      <div
        className={`relative w-full h-full transition-all duration-200 ease-out ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{
          ...transformStyle,
          transition: isLoaded ? "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)" : "none",
        }}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

        {/* Glow effect for red elements */}
        <div
          className="absolute inset-0 z-20 mix-blend-screen opacity-0 hover:opacity-40 transition-opacity duration-300"
          style={{
            background: "radial-gradient(circle at center, rgba(220, 38, 38, 0.4) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        ></div>

        {/* Main image with blend mode to help "cut out" the dark background */}
        <div className="relative w-full h-full">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-contain z-10"
            style={{
              filter: "contrast(1.1) brightness(1.05)",
              mixBlendMode: "lighten",
            }}
            priority
          />

          {/* Duplicate image with different blend mode to enhance red elements */}
          <Image
            src={src || "/placeholder.svg"}
            alt=""
            fill
            className="object-contain z-20"
            style={{
              filter: "contrast(1.2) brightness(1.1) saturate(1.2)",
              mixBlendMode: "color-dodge",
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
