"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  hours?: number
  endDate?: string // Prop para data específica de término
}

export function CountdownTimer({ hours = 2, endDate }: CountdownTimerProps) {
  // Estado para armazenar o tempo restante
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })
  // Estado para armazenar a data de término no localStorage
  const [deadline, setDeadline] = useState<Date | null>(null)

  // Função para calcular o tempo restante
  const calculateTimeLeft = (targetDate: Date) => {
    const now = new Date()
    const difference = +targetDate - +now

    if (difference > 0) {
      // Converter para horas, minutos e segundos
      const totalHours = Math.floor(difference / (1000 * 60 * 60))
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      return {
        hours: totalHours,
        minutes,
        seconds,
      }
    }

    return { hours: 0, minutes: 0, seconds: 0 }
  }

  // Efeito para inicializar o timer
  useEffect(() => {
    // Verificar se já existe uma data de término salva
    const savedDeadline = localStorage.getItem("offerDeadline")
    let targetDate: Date

    if (savedDeadline) {
      // Se já existe, usar a data salva
      targetDate = new Date(savedDeadline)

      // Verificar se a data salva já passou
      if (+targetDate <= +new Date()) {
        // Se já passou, criar uma nova data
        targetDate = new Date()
        targetDate.setHours(targetDate.getHours() + hours)
        localStorage.setItem("offerDeadline", targetDate.toISOString())
      }
    } else {
      // Se não existe, criar uma nova data
      targetDate = new Date()
      targetDate.setHours(targetDate.getHours() + hours)
      localStorage.setItem("offerDeadline", targetDate.toISOString())
    }

    setDeadline(targetDate)
    setTimeLeft(calculateTimeLeft(targetDate))

    // Atualizar o timer a cada segundo
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(targetDate)
      setTimeLeft(updatedTimeLeft)

      // Verificar se o timer chegou a zero
      if (updatedTimeLeft.hours === 0 && updatedTimeLeft.minutes === 0 && updatedTimeLeft.seconds === 0) {
        clearInterval(timer)
      }
    }, 1000)

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(timer)
  }, [hours, endDate])

  // Função para formatar o tempo (adicionar zero à esquerda)
  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0")
  }

  return (
    <div className="text-center">
      <p className="text-sm text-gray-400 mb-3">Esta oferta expira em:</p>

      <div className="flex justify-center gap-3">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-2 w-20">
          <div className="text-2xl font-light text-white">{formatTime(timeLeft.hours)}</div>
          <div className="text-xs uppercase text-gray-400">Horas</div>
        </div>

        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-2 w-20">
          <div className="text-2xl font-light text-white">{formatTime(timeLeft.minutes)}</div>
          <div className="text-xs uppercase text-gray-400">Minutos</div>
        </div>

        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-2 w-20">
          <div className="text-2xl font-light text-white">{formatTime(timeLeft.seconds)}</div>
          <div className="text-xs uppercase text-gray-400 whitespace-nowrap">Segundos</div>
        </div>
      </div>
    </div>
  )
}
