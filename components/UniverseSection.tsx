'use client'

import { ReactNode, useState, useEffect, startTransition } from 'react'

interface UniverseSectionProps {
  id: string
  title: string
  children: ReactNode
}

export default function UniverseSection({ id, title, children }: UniverseSectionProps) {
  const [stars, setStars] = useState<Array<{ left: string; top: string; width: string; height: string; opacity: number }>>([])
  const [comets, setComets] = useState<Array<{ id: number; direction: string; delay: number; topPosition: number; duration: number }>>([])
  const [satellites, setSatellites] = useState<Array<{ id: number; left: string; top: string; delay: number; duration: number }>>([])

  // Generate stars, comets, and satellites only on client to avoid hydration mismatch
  useEffect(() => {
    // Generate all random data
    const generatedStars = [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      opacity: Math.random() * 0.6 + 0.2,
    }))

    const generatedComets = [...Array(2)].map((_, i) => {
      const direction = i % 2 === 0 ? 'left-to-right' : 'right-to-left'
      return {
        id: i,
        direction,
        delay: i * 10 + Math.random() * 5,
        topPosition: Math.random() * 80 + 10,
        duration: 18 + Math.random() * 12
      }
    })

    const generatedSatellites = [...Array(7)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 14 + Math.random() * 10
    }))

    // Batch state updates in a transition to avoid blocking render
    startTransition(() => {
      setStars(generatedStars)
      setComets(generatedComets)
      setSatellites(generatedSatellites)
    })
  }, [])

  return (
    <section
      id={id}
      className="min-h-screen py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Stars background */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.width,
              height: star.height,
              opacity: star.opacity,
            }}
          />
        ))}
        
        {/* Comets */}
        {comets.map((comet) => (
          <div
            key={`comet-${comet.id}`}
            className="comet"
            data-direction={comet.direction}
            style={{
              top: `${comet.topPosition}%`,
              left: comet.direction === 'left-to-right' ? '0' : 'auto',
              right: comet.direction === 'right-to-left' ? '0' : 'auto',
              animation: `comet-${comet.direction} ${comet.duration}s linear infinite`,
              animationDelay: `${comet.delay}s`,
            }}
          />
        ))}
        
        {/* Satellites */}
        {satellites.map((satellite) => (
          <div
            key={`satellite-${satellite.id}`}
            className="satellite"
            style={{
              left: satellite.left,
              top: satellite.top,
              animationDelay: `${satellite.delay}s`,
              animationDuration: `${satellite.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto" />
        </div>
        {children}
      </div>
    </section>
  )
}

