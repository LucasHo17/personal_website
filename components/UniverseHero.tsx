'use client'

import { useState, useEffect, startTransition } from 'react'
import Planet from './Planet'

export default function UniverseHero() {
  const [expandedPlanet, setExpandedPlanet] = useState<string | null>(null)
  const [stars, setStars] = useState<Array<{ left: string; top: string; width: string; height: string; opacity: number; animation: string }>>([])
  const [comets, setComets] = useState<Array<{ id: number; direction: string; delay: number; topPosition: number; duration: number }>>([])
  const [satellites, setSatellites] = useState<Array<{ id: number; left: string; top: string; delay: number; duration: number }>>([])

  // Generate stars, comets, and satellites only on client to avoid hydration mismatch
  useEffect(() => {
    // Generate all random data
    const generatedStars = [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      opacity: Math.random() * 0.8 + 0.2,
      animation: `twinkle ${Math.random() * 3 + 2}s infinite`
    }))

    const generatedComets = [...Array(3)].map((_, i) => {
      const direction = i % 2 === 0 ? 'left-to-right' : 'right-to-left'
      return {
        id: i,
        direction,
        delay: i * 8 + Math.random() * 5,
        topPosition: Math.random() * 80 + 10,
        duration: 15 + Math.random() * 10
      }
    })

    const generatedSatellites = [...Array(9)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 8
    }))

    // Batch state updates in a transition to avoid blocking render
    startTransition(() => {
      setStars(generatedStars)
      setComets(generatedComets)
      setSatellites(generatedSatellites)
    })
  }, [])

  const planets = [
    {
      id: 'about',
      name: 'About Me',
      distance: 220,
      angle: 0,
      size: 50,
      color: 'bg-blue-500',
      glow: 'shadow-blue-500/50',
      planetType: 'earth'
    },
    {
      id: 'skills',
      name: 'Skills',
      distance: 220,
      angle: 60,
      size: 45,
      color: 'bg-purple-500',
      glow: 'shadow-purple-500/50',
      planetType: 'gas'
    },
    {
      id: 'projects',
      name: 'Projects',
      distance: 220,
      angle: 120,
      size: 65,
      color: 'bg-orange-400',
      glow: 'shadow-orange-400/50',
      planetType: 'ringed'
    },
    {
      id: 'experience',
      name: 'Experience',
      distance: 220,
      angle: 180,
      size: 55,
      color: 'bg-red-500',
      glow: 'shadow-red-500/50',
      planetType: 'rocky'
    },
    {
      id: 'comments',
      name: 'Comments',
      distance: 220,
      angle: 240,
      size: 48,
      color: 'bg-cyan-400',
      glow: 'shadow-cyan-400/50',
      planetType: 'ice'
    },
    {
      id: 'contact',
      name: 'Contact',
      distance: 220,
      angle: 300,
      size: 52,
      color: 'bg-green-500',
      glow: 'shadow-green-500/50',
      planetType: 'earth'
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden pt-16">
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
              animation: star.animation
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

      {/* Central Sun (You) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative">
          {/* Sun rays animation */}
          <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '20s' }}>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-yellow-400/60 to-transparent origin-top"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-60px)`,
                }}
              />
            ))}
          </div>
          
          {/* Outer sun glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/40 via-orange-400/30 to-yellow-500/40 blur-3xl animate-pulse-slow" style={{ width: '200px', height: '200px', margin: '-100px' }} />
          
          {/* Middle sun glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300/50 to-orange-400/50 blur-2xl animate-pulse-slow" style={{ width: '160px', height: '160px', margin: '-80px' }} />
          
          {/* Sun core */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500 shadow-2xl shadow-yellow-400/50 animate-pulse-slow flex items-center justify-center relative overflow-hidden">
            {/* Sun surface texture */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-200/50 via-transparent to-orange-600/30" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.3)_0%,_transparent_50%)]" />
            
            {/* Inner core */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-yellow-200 to-orange-400 flex items-center justify-center relative z-10">
              <span className="text-xl font-bold text-orange-900 drop-shadow-lg">ಠ_ಠ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Orbital Ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[480px] h-[480px] border border-gray-700/30 rounded-full opacity-20" />
        <div className="w-[500px] h-[500px] border border-gray-700/20 rounded-full opacity-10 absolute" />
      </div>

      {/* Planets */}
      <div className="relative w-full h-full">
        {planets.map((planet) => (
          <Planet
            key={planet.id}
            {...planet}
            isExpanded={expandedPlanet === planet.id}
            onHover={() => setExpandedPlanet(planet.id)}
            onLeave={() => setExpandedPlanet(null)}
          />
        ))}
      </div>

    </section>
  )
}

