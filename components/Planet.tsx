'use client'

import { useEffect, useState, startTransition } from 'react'
import Link from 'next/link'

interface PlanetProps {
  id: string
  name: string
  distance: number
  angle: number
  size: number
  color: string
  glow: string
  planetType?: string
  isExpanded: boolean
  onHover: () => void
  onLeave: () => void
}

export default function Planet({
  id,
  name,
  distance,
  angle,
  size,
  color,
  glow,
  planetType = 'rocky',
  isExpanded,
  onHover,
  onLeave
}: PlanetProps) {
  const [rotation, setRotation] = useState(angle)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Set mounted flag first in a transition
    startTransition(() => {
      setIsMounted(true)
    })
    // Start animation after a small delay to ensure hydration is complete
    let intervalId: NodeJS.Timeout | null = null
    const timeout = setTimeout(() => {
      intervalId = setInterval(() => {
        setRotation((prev) => (prev + 0.2) % 360)
      }, 50)
    }, 100)
    return () => {
      clearTimeout(timeout)
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  // Always use angle until mounted, then use rotation
  const currentRotation = isMounted ? rotation : angle
  const radian = (currentRotation * Math.PI) / 180
  const x = Math.cos(radian) * distance
  const y = Math.sin(radian) * distance

  const planetSize = isExpanded ? size * 2.5 : size
  const galaxySize = isExpanded ? size * 8 : 0

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out z-20"
      style={{
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Galaxy expansion effect */}
      {isExpanded && (
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${color} opacity-20 blur-2xl transition-all duration-700`}
          style={{
            width: `${galaxySize}px`,
            height: `${galaxySize}px`,
          }}
        />
      )}

      {/* Orbital trail */}
      {isExpanded && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-600/30 opacity-50 transition-all duration-700"
          style={{
            width: `${distance * 2}px`,
            height: `${distance * 2}px`,
            marginLeft: `-${distance}px`,
            marginTop: `-${distance}px`,
          }}
        />
      )}

      {/* Planet */}
      <Link href={`#${id}`} className="block">
        <div
          className={`relative rounded-full ${color} ${glow} shadow-2xl transition-all duration-500 cursor-pointer group`}
          style={{
            width: `${planetSize}px`,
            height: `${planetSize}px`,
          }}
        >
          {/* Planet glow/atmosphere */}
          <div
            className={`absolute inset-0 rounded-full ${color} opacity-40 blur-lg transition-all duration-500`}
            style={{
              transform: isExpanded ? 'scale(1.5)' : 'scale(1.1)',
            }}
          />

          {/* Planet surface with texture */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-black/20" />
          
          {/* Planet surface patterns */}
          {planetType === 'earth' && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 via-blue-500/30 to-transparent" />
          )}
          {planetType === 'gas' && (
            <div className="absolute inset-0 rounded-full" style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
            }} />
          )}
          {planetType === 'rocky' && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-600/40 via-red-500/30 to-orange-600/20" />
          )}
          {planetType === 'ice' && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-200/30 via-blue-400/20 to-transparent" />
          )}

          {/* Planet rings (for ringed planets) */}
          {planetType === 'ringed' && (
            <>
              <div className="absolute inset-0 rounded-full border-2 border-gray-400/40 -rotate-12" style={{ width: '120%', height: '120%', margin: '-10%' }} />
              <div className="absolute inset-0 rounded-full border border-gray-300/30 rotate-12" style={{ width: '140%', height: '140%', margin: '-20%' }} />
            </>
          )}
          
          {/* Planet highlight */}
          <div className="absolute top-2 left-4 w-1/3 h-1/3 rounded-full bg-white/40 blur-sm" />

          {/* Planet name */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap transition-all duration-500 ${
              isExpanded ? 'opacity-100 scale-110' : 'opacity-70 scale-100'
            }`}
          >
            <span className="text-white text-sm font-medium drop-shadow-lg">
              {name}
            </span>
          </div>

          {/* Hover indicator */}
          {isExpanded && (
            <div className="absolute -inset-4 rounded-full border-2 border-white/30 animate-ping" />
          )}
        </div>
      </Link>
    </div>
  )
}

