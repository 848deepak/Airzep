'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'

interface Drone {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

interface HTMLLetter {
  id: number
  char: string
  x: number
  y: number
  droneX: number
  droneY: number
  targetY: number
}

export default function DroneEasterEggs() {
  const pathname = usePathname()
  const [vFormationDrones, setVFormationDrones] = useState<Drone[]>([])
  const [showVFormation, setShowVFormation] = useState(false)
  const [chargingDrone, setChargingDrone] = useState<{
    show: boolean
    x: number
    y: number
    phase: 'flying' | 'docking' | 'charging' | 'charged'
  }>({ show: false, x: 0, y: 0, phase: 'flying' })
  const [htmlLetters, setHtmlLetters] = useState<HTMLLetter[]>([])
  const [show404Drones, setShow404Drones] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [parachuteDrones, setParachuteDrones] = useState<Drone[]>([])
  const [showParachute, setShowParachute] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }

    checkDarkMode()
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  // V-Formation Fly-By (1% chance on mount)
  useEffect(() => {
    const random = Math.random()
    if (random < 0.01) {
      // 1% chance
      setTimeout(() => {
        const drones: Drone[] = [
          { id: 1, x: -100, y: 50, size: 40, opacity: 1 },
          { id: 2, x: -150, y: 80, size: 35, opacity: 0.9 },
          { id: 3, x: -150, y: 20, size: 35, opacity: 0.9 },
        ]
        setVFormationDrones(drones)
        setShowVFormation(true)

        setTimeout(() => {
          setShowVFormation(false)
        }, 2000)
      }, 1000)
    }
  }, [pathname])

  // Fast Scroll Parachute Detection
  useEffect(() => {
    let lastTime = Date.now()
    let rafId: number
    let scrollSamples: number[] = []

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentTime = Date.now()
      const timeDiff = currentTime - lastTime

      if (timeDiff > 0) {
        const velocity = Math.abs(currentScrollY - lastScrollY) / timeDiff

        // Keep track of recent velocities (rolling window)
        scrollSamples.push(velocity)
        if (scrollSamples.length > 5) {
          scrollSamples.shift()
        }

        // Calculate average velocity
        const avgVelocity = scrollSamples.reduce((a, b) => a + b, 0) / scrollSamples.length

        // If scrolling extremely fast (velocity > 8 for sustained scroll)
        if (avgVelocity > 8 && !showParachute && scrollSamples.length >= 3) {
          // Use actual cursor position
          const cursorXPercent = (mousePosition.x / window.innerWidth) * 100

          setParachuteDrones([
            {
              id: 1,
              x: cursorXPercent,
              y: -100,
              size: 40,
              opacity: 1,
            },
          ])
          setShowParachute(true)

          setTimeout(() => {
            setShowParachute(false)
            scrollSamples = []
          }, 3000)
        }
      }

      setLastScrollY(currentScrollY)
      lastTime = currentTime
    }

    const throttledScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        handleScroll()
        rafId = 0
      })
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [lastScrollY, showParachute, mousePosition.x])

  // 404 Page HTML Letter Rebuild
  useEffect(() => {
    const is404Page = pathname === '/not-found' || pathname.includes('404')

    if (is404Page) {
      const letters = '<HTML>'.split('').map((char, i) => ({
        id: i,
        char,
        x: 30 + i * 60,
        y: -100 - Math.random() * 50,
        droneX: 30 + i * 60,
        droneY: -130 - Math.random() * 50,
        targetY: 200,
      }))

      // Use requestAnimationFrame to defer state updates
      requestAnimationFrame(() => {
        setShow404Drones(true)
        setHtmlLetters(letters)
      })

      const timer = setTimeout(() => {
        setHtmlLetters(prev =>
          prev.map(letter => ({
            ...letter,
            y: letter.targetY,
            droneY: letter.targetY - 40,
          }))
        )
      }, 500)

      return () => clearTimeout(timer)
    }

    // Cleanup for non-404 pages
    return () => {
      setShow404Drones(false)
      setHtmlLetters([])
    }
  }, [pathname])

  // Footer Charging Animation
  const triggerChargingAnimation = useCallback(() => {
    const footer = document.querySelector('footer')
    if (footer) {
      const rect = footer.getBoundingClientRect()
      const startX = window.innerWidth + 100
      const startY = rect.top + window.scrollY - 200
      const targetX = rect.left + 150
      const targetY = rect.top + window.scrollY + 50

      // Phase 1: Flying in from right
      setChargingDrone({
        show: true,
        x: startX,
        y: startY,
        phase: 'flying',
      })

      // Phase 2: Docking animation
      setTimeout(() => {
        setChargingDrone(prev => ({
          ...prev,
          x: targetX,
          y: targetY,
          phase: 'docking',
        }))
      }, 100)

      // Phase 3: Start charging
      setTimeout(() => {
        setChargingDrone(prev => ({ ...prev, phase: 'charging' }))
      }, 2100)

      // Phase 4: Fully charged
      setTimeout(() => {
        setChargingDrone(prev => ({ ...prev, phase: 'charged' }))
      }, 4500)

      // Phase 5: Fly away
      setTimeout(() => {
        setChargingDrone({ show: false, x: 0, y: 0, phase: 'flying' })
      }, 6000)
    }
  }, [])

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (footer) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && Math.random() < 0.3) {
              // 30% chance
              triggerChargingAnimation()
            }
          })
        },
        { threshold: 0.5 }
      )

      observer.observe(footer)
      return () => observer.disconnect()
    }
  }, [triggerChargingAnimation])

  const droneColor = isDarkMode ? '#00ff00' : '#3b82f6'

  return (
    <>
      {/* V-Formation Fly-By */}
      {showVFormation && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {vFormationDrones.map(drone => (
            <div
              key={drone.id}
              className="absolute transition-all duration-[2000ms] ease-linear"
              style={{
                left: showVFormation ? 'calc(100% + 100px)' : `${drone.x}px`,
                top: `${drone.y}px`,
                width: `${drone.size}px`,
                height: `${drone.size}px`,
                opacity: drone.opacity,
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Drone body */}
                <circle cx="50" cy="50" r="15" fill={droneColor} opacity="0.8" />

                {/* Propeller arms */}
                <line x1="50" y1="50" x2="25" y2="25" stroke={droneColor} strokeWidth="3" />
                <line x1="50" y1="50" x2="75" y2="25" stroke={droneColor} strokeWidth="3" />
                <line x1="50" y1="50" x2="25" y2="75" stroke={droneColor} strokeWidth="3" />
                <line x1="50" y1="50" x2="75" y2="75" stroke={droneColor} strokeWidth="3" />

                {/* Propellers */}
                <circle cx="25" cy="25" r="8" fill={droneColor} opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="0.2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="75" cy="25" r="8" fill={droneColor} opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.8;0.4;0.8"
                    dur="0.2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="25" cy="75" r="8" fill={droneColor} opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.8;0.4;0.8"
                    dur="0.2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="75" cy="75" r="8" fill={droneColor} opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="0.2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* LED lights */}
                <circle cx="50" cy="40" r="2" fill={isDarkMode ? '#00ff00' : '#ef4444'}>
                  <animate
                    attributeName="opacity"
                    values="1;0.3;1"
                    dur="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Charging Drone - Enhanced */}
      {chargingDrone.show && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: `${chargingDrone.x}px`,
            top: `${chargingDrone.y}px`,
            width: '120px',
            height: '180px',
            transition:
              chargingDrone.phase === 'flying'
                ? 'none'
                : 'all 2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <svg viewBox="0 0 120 180" className="w-full h-full">
            {/* Drone body - larger and more detailed */}
            <g transform="translate(60, 50)">
              {/* Main body with metallic effect */}
              <defs>
                <radialGradient id="droneGradient">
                  <stop offset="0%" stopColor={droneColor} stopOpacity="1" />
                  <stop offset="100%" stopColor={droneColor} stopOpacity="0.6" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Drone shadow */}
              <ellipse cx="0" cy="5" rx="22" ry="8" fill="#000" opacity="0.3" />

              {/* Central body */}
              <circle
                cx="0"
                cy="0"
                r="20"
                fill="url(#droneGradient)"
                stroke={droneColor}
                strokeWidth="2"
              />
              <circle cx="0" cy="0" r="12" fill={droneColor} opacity="0.3" />

              {/* Propeller arms with glow */}
              <line
                x1="0"
                y1="0"
                x2="-25"
                y2="-25"
                stroke={droneColor}
                strokeWidth="4"
                filter="url(#glow)"
              />
              <line
                x1="0"
                y1="0"
                x2="25"
                y2="-25"
                stroke={droneColor}
                strokeWidth="4"
                filter="url(#glow)"
              />
              <line
                x1="0"
                y1="0"
                x2="-25"
                y2="25"
                stroke={droneColor}
                strokeWidth="4"
                filter="url(#glow)"
              />
              <line
                x1="0"
                y1="0"
                x2="25"
                y2="25"
                stroke={droneColor}
                strokeWidth="4"
                filter="url(#glow)"
              />

              {/* Propellers with rotation */}
              <g transform="translate(-25, -25)">
                <circle cx="0" cy="0" r="10" fill={droneColor} opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.9;0.3"
                    dur="0.15s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="0" cy="0" r="3" fill={isDarkMode ? '#00ff00' : '#ef4444'} />
              </g>
              <g transform="translate(25, -25)">
                <circle cx="0" cy="0" r="10" fill={droneColor} opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.9;0.3;0.9"
                    dur="0.15s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="0" cy="0" r="3" fill={isDarkMode ? '#00ff00' : '#ef4444'} />
              </g>
              <g transform="translate(-25, 25)">
                <circle cx="0" cy="0" r="10" fill={droneColor} opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.9;0.3;0.9"
                    dur="0.15s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="0" cy="0" r="3" fill={isDarkMode ? '#00ff00' : '#ef4444'} />
              </g>
              <g transform="translate(25, 25)">
                <circle cx="0" cy="0" r="10" fill={droneColor} opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.9;0.3"
                    dur="0.15s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="0" cy="0" r="3" fill={isDarkMode ? '#00ff00' : '#ef4444'} />
              </g>

              {/* Status LED based on phase */}
              {chargingDrone.phase === 'charging' && (
                <circle cx="0" cy="-8" r="3" fill="#fbbf24">
                  <animate
                    attributeName="opacity"
                    values="1;0.3;1"
                    dur="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              {chargingDrone.phase === 'charged' && (
                <circle cx="0" cy="-8" r="3" fill="#10b981">
                  <animate
                    attributeName="opacity"
                    values="1;0.5;1"
                    dur="0.3s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>

            {/* Charging cable - only visible during charging */}
            {(chargingDrone.phase === 'docking' ||
              chargingDrone.phase === 'charging' ||
              chargingDrone.phase === 'charged') && (
              <g>
                <path
                  d="M 60 70 Q 60 95 55 110"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,3"
                >
                  {chargingDrone.phase === 'charging' && (
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="8"
                      dur="0.5s"
                      repeatCount="indefinite"
                    />
                  )}
                </path>

                {/* Energy particles flowing */}
                {chargingDrone.phase === 'charging' && (
                  <>
                    <circle r="2" fill="#fbbf24">
                      <animateMotion
                        dur="1s"
                        repeatCount="indefinite"
                        path="M 60 70 Q 60 95 55 110"
                      />
                    </circle>
                    <circle r="2" fill="#10b981">
                      <animateMotion
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.3s"
                        path="M 60 70 Q 60 95 55 110"
                      />
                    </circle>
                    <circle r="2" fill="#3b82f6">
                      <animateMotion
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.6s"
                        path="M 60 70 Q 60 95 55 110"
                      />
                    </circle>
                  </>
                )}
              </g>
            )}

            {/* Charging station */}
            {(chargingDrone.phase === 'docking' ||
              chargingDrone.phase === 'charging' ||
              chargingDrone.phase === 'charged') && (
              <g transform="translate(35, 110)">
                {/* Station base */}
                <rect
                  x="0"
                  y="0"
                  width="50"
                  height="40"
                  rx="5"
                  fill="#1e293b"
                  stroke={droneColor}
                  strokeWidth="2"
                />
                <rect x="5" y="5" width="40" height="30" rx="3" fill="#0f172a" />

                {/* Battery display */}
                <rect
                  x="10"
                  y="10"
                  width="30"
                  height="20"
                  rx="2"
                  stroke="#10b981"
                  strokeWidth="2"
                  fill="#0a0a0a"
                />
                <rect x="40" y="14" width="4" height="12" rx="1" fill="#10b981" />

                {/* Battery level bars */}
                <rect
                  x="12"
                  y="12"
                  width="5"
                  height="16"
                  fill={chargingDrone.phase === 'charged' ? '#10b981' : '#10b981'}
                  opacity={chargingDrone.phase === 'docking' ? '0.3' : '1'}
                />
                <rect
                  x="18"
                  y="12"
                  width="5"
                  height="16"
                  fill="#10b981"
                  opacity={
                    chargingDrone.phase === 'charging' || chargingDrone.phase === 'charged'
                      ? '1'
                      : '0.3'
                  }
                >
                  {chargingDrone.phase === 'charging' && (
                    <animate attributeName="opacity" values="0.3;1;1" dur="2s" fill="freeze" />
                  )}
                </rect>
                <rect
                  x="24"
                  y="12"
                  width="5"
                  height="16"
                  fill="#10b981"
                  opacity={
                    chargingDrone.phase === 'charging' || chargingDrone.phase === 'charged'
                      ? '1'
                      : '0.3'
                  }
                >
                  {chargingDrone.phase === 'charging' && (
                    <animate attributeName="opacity" values="0.3;0.3;1;1" dur="2s" fill="freeze" />
                  )}
                </rect>
                <rect
                  x="30"
                  y="12"
                  width="5"
                  height="16"
                  fill="#10b981"
                  opacity={chargingDrone.phase === 'charged' ? '1' : '0.3'}
                >
                  {chargingDrone.phase === 'charging' && (
                    <animate
                      attributeName="opacity"
                      values="0.3;0.3;0.3;1"
                      dur="2s"
                      fill="freeze"
                    />
                  )}
                </rect>

                {/* Charging indicator */}
                {chargingDrone.phase === 'charging' && (
                  <text
                    x="25"
                    y="42"
                    fontSize="8"
                    fill="#fbbf24"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    CHG
                  </text>
                )}
                {chargingDrone.phase === 'charged' && (
                  <text
                    x="25"
                    y="42"
                    fontSize="8"
                    fill="#10b981"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    FULL
                  </text>
                )}

                {/* Glow effect when charging */}
                {chargingDrone.phase === 'charging' && (
                  <circle cx="25" cy="20" r="20" fill="#10b981" opacity="0.2">
                    <animate
                      attributeName="r"
                      values="20;25;20"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.2;0.4;0.2"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                {chargingDrone.phase === 'charged' && (
                  <circle cx="25" cy="20" r="25" fill="#10b981" opacity="0.3">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.5;0.3"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            )}
          </svg>
        </div>
      )}

      {/* 404 HTML Letter Rebuild */}
      {show404Drones && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {htmlLetters.map(letter => (
              <div
                key={letter.id}
                className="absolute transition-all duration-[2000ms] ease-out"
                style={{
                  left: `${letter.x}px`,
                  transform: 'translateX(-50%)',
                }}
              >
                {/* Drone carrying letter */}
                <div
                  className="absolute transition-all duration-[2000ms] ease-out"
                  style={{
                    left: '50%',
                    top: `${letter.droneY}px`,
                    transform: 'translateX(-50%)',
                  }}
                >
                  <svg viewBox="0 0 60 60" className="w-8 h-8">
                    <circle cx="30" cy="30" r="8" fill={droneColor} opacity="0.8" />
                    <line x1="30" y1="30" x2="20" y2="20" stroke={droneColor} strokeWidth="2" />
                    <line x1="30" y1="30" x2="40" y2="20" stroke={droneColor} strokeWidth="2" />
                    <line x1="30" y1="30" x2="20" y2="40" stroke={droneColor} strokeWidth="2" />
                    <line x1="30" y1="30" x2="40" y2="40" stroke={droneColor} strokeWidth="2" />
                    <circle cx="20" cy="20" r="4" fill={droneColor} opacity="0.4">
                      <animate
                        attributeName="opacity"
                        values="0.4;0.8;0.4"
                        dur="0.15s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="40" cy="20" r="4" fill={droneColor} opacity="0.4">
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0.8"
                        dur="0.15s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="20" cy="40" r="4" fill={droneColor} opacity="0.4">
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0.8"
                        dur="0.15s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="40" cy="40" r="4" fill={droneColor} opacity="0.4">
                      <animate
                        attributeName="opacity"
                        values="0.4;0.8;0.4"
                        dur="0.15s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    {/* Cable */}
                    <line
                      x1="30"
                      y1="38"
                      x2="30"
                      y2="60"
                      stroke="#94a3b8"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                  </svg>
                </div>

                {/* HTML Letter */}
                <div
                  className="absolute text-6xl font-bold transition-all duration-[2000ms] ease-out"
                  style={{
                    left: '50%',
                    top: `${letter.y}px`,
                    transform: 'translateX(-50%)',
                    color: droneColor,
                    fontFamily: 'monospace',
                  }}
                >
                  {letter.char}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Parachute Drones */}
      {showParachute && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {parachuteDrones.map(drone => (
            <div
              key={drone.id}
              className="absolute animate-parachute-fall"
              style={{
                left: `${drone.x}%`,
                top: `${drone.y}px`,
                width: `${drone.size}px`,
                height: `${drone.size * 1.8}px`,
                opacity: drone.opacity,
                animation: 'parachute-fall 3s ease-out forwards',
              }}
            >
              {/* Parachute */}
              <svg viewBox="0 0 100 150" className="w-full h-full">
                {/* Parachute canopy */}
                <path
                  d="M 10 30 Q 50 0 90 30"
                  fill={droneColor}
                  opacity="0.3"
                  stroke={droneColor}
                  strokeWidth="2"
                />
                <path
                  d="M 10 30 Q 30 20 50 30 Q 70 20 90 30"
                  fill="none"
                  stroke={droneColor}
                  strokeWidth="1"
                />

                {/* Parachute lines */}
                <line
                  x1="15"
                  y1="30"
                  x2="45"
                  y2="100"
                  stroke={droneColor}
                  strokeWidth="1"
                  opacity="0.6"
                />
                <line
                  x1="50"
                  y1="30"
                  x2="50"
                  y2="100"
                  stroke={droneColor}
                  strokeWidth="1"
                  opacity="0.6"
                />
                <line
                  x1="85"
                  y1="30"
                  x2="55"
                  y2="100"
                  stroke={droneColor}
                  strokeWidth="1"
                  opacity="0.6"
                />

                {/* Drone */}
                <circle cx="50" cy="110" r="10" fill={droneColor} opacity="0.8" />
                <line x1="50" y1="110" x2="35" y2="95" stroke={droneColor} strokeWidth="2" />
                <line x1="50" y1="110" x2="65" y2="95" stroke={droneColor} strokeWidth="2" />
                <line x1="50" y1="110" x2="35" y2="125" stroke={droneColor} strokeWidth="2" />
                <line x1="50" y1="110" x2="65" y2="125" stroke={droneColor} strokeWidth="2" />

                <circle cx="35" cy="95" r="5" fill={droneColor} opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="0.2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="65" cy="95" r="5" fill={droneColor} opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.8;0.4;0.8"
                    dur="0.2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="35" cy="125" r="5" fill={droneColor} opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.8;0.4;0.8"
                    dur="0.2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="65" cy="125" r="5" fill={droneColor} opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="0.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes parachute-fall {
          0% {
            transform: translateY(0) rotate(-5deg);
          }
          25% {
            transform: translateY(20vh) rotate(3deg);
          }
          50% {
            transform: translateY(40vh) rotate(-2deg);
          }
          75% {
            transform: translateY(60vh) rotate(2deg);
          }
          100% {
            transform: translateY(80vh) rotate(0deg);
          }
        }
      `}</style>
    </>
  )
}
