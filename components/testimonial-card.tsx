import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  image: string
  quote: string
}

export function TestimonialCard({ name, image, quote }: TestimonialCardProps) {
  return (
    <Card className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col">
          <div className="flex items-center mb-5">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/20 mr-3 flex-shrink-0">
              <Image
                src={image || "/placeholder.svg?height=100&width=100&query=elegant+woman+portrait"}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-base font-medium text-white">{name}</h3>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-red-400 text-xs">
                      ★
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">{quote}</p>
        </div>
      </CardContent>
    </Card>
  )
}
