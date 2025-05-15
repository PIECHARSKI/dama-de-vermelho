"use client"

import { useRef, useState, useEffect } from "react"

interface VideoPlayerProps {
  src?: string
  poster?: string
  className?: string
}

export function VideoPlayer({ src, poster, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className} transition-all duration-500 ${
        isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      {/* Borda estilizada */}
      <div className="absolute inset-0 rounded-2xl border-2 border-red-500/30 z-20 pointer-events-none"></div>

      {/* Efeito de brilho nas bordas */}
      <div
        className="absolute inset-0 rounded-2xl z-10 pointer-events-none animate-glow-pulse"
        style={{
          boxShadow: "inset 0 0 20px rgba(220, 38, 38, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      ></div>

      {/* Gradiente superior */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none"></div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>

      {/* Vídeo */}
      <div className="relative w-full h-full">
        {!src ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-white/70 text-sm">Vídeo será exibido aqui</p>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="w-full h-full object-cover"
            onClick={handlePlay}
            playsInline
          />
        )}

        {/* Botão de play centralizado */}
        {src && !isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 z-10 transition-opacity duration-300 hover:opacity-80"
          >
            <div className="w-16 h-16 rounded-full bg-red-600/80 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
