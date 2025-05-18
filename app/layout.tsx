import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Protocolo Dama de Vermelho | Torne-se Irresistível",
  description:
    "Descubra o método secreto que transforma mulheres inseguras em criaturas irresistivelmente sedutoras que dominam qualquer homem com um simples olhar.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
