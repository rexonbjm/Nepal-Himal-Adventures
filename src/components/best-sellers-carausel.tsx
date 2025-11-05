"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"
import Image from "next/image"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface TrekCard {
  id: number
  title: string
  duration: string
  description: string
  image: string
}

const trekData: TrekCard[] = [
  {
    id: 1,
    title: "Everest Base Camp Trek",
    duration: "10 Days",
    description:
      "Enjoy an exciting journey across the Khumbu region's trails with the stunning vistas of mountain peaks and the...",
    image: "/everest-base.jpg",
  },
  {
    id: 2,
    title: "Annapurna Circuit Trek",
    duration: "12 Days",
    description:
      "Get the most scenic and iconic helicopter ride from Gorakshep to Lukla in this after trekking to the base camp...",
    image: "/ebc-helicopter.jpg",
  },
  {
    id: 3,
    title: "Mardi Himal Trek",
    duration: "16 Days",
    description:
      "Experience the Annapurna Circuit Trek, circling the Annapurna Massif through lush forests, arid deserts, and high-...",
    image: "/annapurna-circuit.jpg",
  },
  // ...rest of your trekData
]

export function BestSellersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const getCardsPerSlide = () => (isMobile ? 2 : 4)
  const cardsPerSlide = getCardsPerSlide()
  const totalSlides = Math.ceil(trekData.length / cardsPerSlide)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % totalSlides), 5000)
    return () => clearInterval(interval)
  }, [totalSlides, isMobile])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)

  const handleTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.targetTouches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => (touchEndX.current = e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current
    if (distance > 50) nextSlide()
    else if (distance < -50) prevSlide()
  }

  const getCurrentCards = () => {
    const startIndex = currentSlide * cardsPerSlide
    return trekData.slice(startIndex, startIndex + cardsPerSlide)
  }

  return (
    <div className="w-full bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Our Best Sellers for 2025</h2>
          <div className="w-14 md:w-20 h-1 rounded bg-[#f2b203] mx-auto mb-5"></div>
          <p className="text-gray-600 text-base md:text-lg">Join us on our trending adventure this year.</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {!isMobile && (
            <>
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-gray-200 w-12 h-12 rounded-full"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </Button>

              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-gray-200 w-12 h-12 rounded-full"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </Button>
            </>
          )}

          <div
            ref={carouselRef}
            className={isMobile ? "px-4" : "mx-12"}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`grid gap-4 md:gap-6 ${
                isMobile ? "grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {getCurrentCards().map((trek) => (
                <Link key={trek.id} href={`/trip/page${trek.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-full flex flex-col">
                    <div className="relative overflow-hidden flex-shrink-0 h-32 md:h-48 w-full">
                      <Image
                        src={trek.image || "/placeholder.svg"}
                        alt={trek.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className={`${isMobile ? "p-3" : "p-4"} flex-1 flex flex-col justify-between`}>
                      <h3
                        className={`font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 ${
                          isMobile ? "text-sm leading-tight" : "text-lg"
                        } line-clamp-2`}
                      >
                        {trek.title} - {trek.duration}
                      </h3>
                      {!isMobile && (
                        <p className="text-gray-600 text-sm leading-relaxed mt-2 line-clamp-3">{trek.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? "bg-[#f2b203]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {isMobile && (
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500">Swipe left or right to browse</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
