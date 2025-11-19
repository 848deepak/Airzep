// Core component that receives mouse positions and renders pointer and content

'use client'

import React, { useEffect, useState } from 'react'

import { motion, AnimatePresence, useMotionValue, type MotionValue } from 'motion/react'
import { cn } from '@/lib/utils'

const colors = [
  '#6366f1', // indigo
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#10b981', // emerald
  '#f59e0b', // amber
  '#ef4444', // red
  '#3b82f6', // blue
]

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: string | React.ReactNode
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = React.useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [isInside, setIsInside] = useState<boolean>(false)
  const [currentColor, setCurrentColor] = useState(colors[0])
  const [isIdle, setIsIdle] = useState(false)
  const [isOverText, setIsOverText] = useState(false)
  const idleTimerRef = React.useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [])

  const resetIdleTimer = () => {
    setIsIdle(false)
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current)
    }
    idleTimerRef.current = setTimeout(() => {
      console.log('🚁 Drone entering autonomous mode...')
      setIsIdle(true)
    }, 4000) // 4 seconds of inactivity (increased from 3)
  }

  useEffect(() => {
    // Initialize idle timer on mount
    const timer = setTimeout(() => {
      console.log('🚁 Drone entering autonomous mode...')
      setIsIdle(true)
    }, 4000)

    idleTimerRef.current = timer

    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current)
      }
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    resetIdleTimer()

    if (rect) {
      const scrollX = window.scrollX
      const scrollY = window.scrollY
      x.set(e.clientX - rect.left + scrollX)
      y.set(e.clientY - rect.top + scrollY)
    }

    // Check if hovering over text or interactive elements
    const target = e.target as HTMLElement
    const isText =
      target.tagName === 'P' ||
      target.tagName === 'H1' ||
      target.tagName === 'H2' ||
      target.tagName === 'H3' ||
      target.tagName === 'H4' ||
      target.tagName === 'H5' ||
      target.tagName === 'H6' ||
      target.tagName === 'SPAN' ||
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.tagName === 'INPUT' ||
      target.closest('a') ||
      target.closest('button')

    setIsOverText(!!isText)
  }

  const handleMouseLeave = () => {
    setIsInside(false)
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current)
    }
  }

  const handleMouseEnter = () => {
    setIsInside(true)
    resetIdleTimer()
  }

  const handleClick = () => {
    resetIdleTimer()
    // Change color on click
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setCurrentColor(randomColor)
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      style={{
        cursor: 'none',
      }}
      ref={ref}
      className={cn('relative', className)}
    >
      <AnimatePresence>
        {isInside && (
          <FollowPointer
            x={x}
            y={y}
            title={title}
            color={currentColor}
            isIdle={isIdle}
            isOverText={isOverText}
            containerRect={rect}
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  )
}

export const FollowPointer = ({
  x,
  y,
  color,
  isIdle = false,
  isOverText = false,
  containerRect,
}: {
  x: MotionValue<number>
  y: MotionValue<number>
  title?: string | React.ReactNode
  color?: string
  isIdle?: boolean
  isOverText?: boolean
  containerRect?: DOMRect | null
}) => {
  const idleX = useMotionValue(0)
  const idleY = useMotionValue(0)
  const rotation = useMotionValue(0)
  const tilt = useMotionValue(0)
  const perspective = useMotionValue(0) // For 3D depth rotation
  const scale = useMotionValue(1)
  const zIndex = useMotionValue(50)

  useEffect(() => {
    if (isIdle && containerRect) {
      console.log('🎯 Drone starting patrol mode')

      // Set initial idle position to current cursor position
      const currentCursorX = x.get()
      const currentCursorY = y.get()
      idleX.set(currentCursorX)
      idleY.set(currentCursorY)
      console.log(
        `📍 Starting from cursor position: (${Math.round(currentCursorX)}, ${Math.round(currentCursorY)})`
      )

      const moveToRandomPosition = () => {
        const currentX = idleX.get()
        const currentY = idleY.get()

        console.log(`📍 Current position: (${Math.round(currentX)}, ${Math.round(currentY)})`)

        // Get all text elements and headings on the page
        const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span')
        const visibleElements: { x: number; y: number; width: number; height: number }[] = []

        textElements.forEach(el => {
          const rect = el.getBoundingClientRect()
          // Only consider elements that are in viewport and have reasonable size
          if (
            rect.top >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.left >= 0 &&
            rect.right <= window.innerWidth &&
            rect.width > 50 &&
            rect.height > 10
          ) {
            visibleElements.push({
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2,
              width: rect.width,
              height: rect.height,
            })
          }
        })

        console.log(`📝 Found ${visibleElements.length} visible text elements`)

        let randomX, randomY

        if (visibleElements.length > 0 && Math.random() > 0.3) {
          // 70% chance to hover near text elements
          const targetElement = visibleElements[Math.floor(Math.random() * visibleElements.length)]
          // Hover near the element (within 100-200px radius)
          const angle = Math.random() * Math.PI * 2
          const distance = 100 + Math.random() * 100
          randomX = targetElement.x + Math.cos(angle) * distance
          randomY = targetElement.y + Math.sin(angle) * distance
          console.log('🎯 Target: Near text element')
        } else {
          // 30% chance to move randomly within safe bounds
          randomX = Math.random() * (containerRect.width - 200) + 100
          randomY = Math.random() * (containerRect.height - 200) + 100
          console.log('🎲 Target: Random position')
        }

        // Ensure drone stays within visible bounds with padding
        const padding = 100
        const currentScrollY = window.scrollY

        randomX = Math.max(padding, Math.min(window.innerWidth - padding, randomX))
        randomY = Math.max(
          padding + currentScrollY,
          Math.min(window.innerHeight - padding + currentScrollY, randomY)
        )

        console.log(`🎯 Flying to: (${Math.round(randomX)}, ${Math.round(randomY)})`)

        // Calculate direction angle for rotation
        const deltaX = randomX - currentX
        const deltaY = randomY - currentY
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

        // Calculate tilt based on movement (banking effect)
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        const tiltAmount = Math.min(25, distance / 20) // Max 25 degree tilt
        const tiltDirection = deltaX > 0 ? tiltAmount : -tiltAmount

        // Calculate 3D perspective and scale based on movement
        // Simulate approaching/receding effect
        const movementPhase = Math.random()
        let targetPerspective, targetScale, targetZIndex

        if (movementPhase < 0.33) {
          // Approach: drone comes closer (larger, tilts forward, in front)
          targetPerspective = -20 - Math.random() * 15 // -20 to -35 degrees
          targetScale = 1.2 + Math.random() * 0.3 // 1.2 to 1.5x
          targetZIndex = 100 + Math.floor(Math.random() * 50) // z-index 100-150 (in front of most content)
        } else if (movementPhase < 0.66) {
          // Recede: drone moves away (smaller, tilts back, behind content)
          targetPerspective = 15 + Math.random() * 15 // 15 to 30 degrees
          targetScale = 0.7 + Math.random() * 0.2 // 0.7 to 0.9x
          targetZIndex = 1 + Math.floor(Math.random() * 10) // z-index 1-10 (behind most content)
        } else {
          // Level flight: neutral position, mid-layer
          targetPerspective = -5 + Math.random() * 10 // -5 to 5 degrees
          targetScale = 0.9 + Math.random() * 0.2 // 0.9 to 1.1x
          targetZIndex = 30 + Math.floor(Math.random() * 30) // z-index 30-60 (mixed layer)
        }

        // Calculate distance for smooth speed
        const adjustedDuration = Math.max(3, Math.min(6, distance / 150)) // Slowed down: 3-6 seconds

        // Animate with easing
        const startTime = Date.now()
        const startX = currentX
        const startY = currentY
        const startRotation = rotation.get()
        const startTilt = tilt.get()
        const startPerspective = perspective.get()
        const startScale = scale.get()
        const startZIndex = zIndex.get()

        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / (adjustedDuration * 1000), 1)

          // Ease in-out function for smooth movement
          const eased =
            progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2

          idleX.set(startX + (randomX - startX) * eased)
          idleY.set(startY + (randomY - startY) * eased)

          // Smooth rotation transition
          const targetRotation = angle + 90 // +90 to point forward
          let rotationDiff = targetRotation - startRotation

          // Normalize rotation difference to -180 to 180
          while (rotationDiff > 180) rotationDiff -= 360
          while (rotationDiff < -180) rotationDiff += 360

          rotation.set(startRotation + rotationDiff * eased)

          // Tilt during movement, level out at end
          const tiltEased = progress < 0.8 ? eased * 1.2 : 1 - (progress - 0.8) * 5 // Level out in last 20%
          tilt.set(startTilt + (tiltDirection - startTilt) * Math.min(tiltEased, 1))

          // Animate 3D perspective (approach/recede effect)
          perspective.set(startPerspective + (targetPerspective - startPerspective) * eased)

          // Animate scale (size changes with depth)
          scale.set(startScale + (targetScale - startScale) * eased)

          // Animate z-index (layer changes for depth)
          zIndex.set(Math.round(startZIndex + (targetZIndex - startZIndex) * eased))

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            // Level out completely after movement
            tilt.set(0)
          }
        }

        animate()
      }

      // Initial random position
      moveToRandomPosition()

      // Move to new random position every 2-4 seconds (faster for more dynamic feel)
      const scheduleNextMove = () => {
        const delay = 4000 + Math.random() * 3000 // 4-7 seconds between movements
        return setTimeout(() => {
          moveToRandomPosition()
          timeoutRef.current = scheduleNextMove()
        }, delay)
      }

      const timeoutRef = { current: scheduleNextMove() }

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    } else if (!isIdle) {
      // When not idle, keep idle position synced with cursor for smooth transition
      idleX.set(x.get())
      idleY.set(y.get())
    } else {
      // Reset rotation and tilt when not idle
      rotation.set(0)
      tilt.set(0)
      perspective.set(0)
      scale.set(1)
      zIndex.set(50)
    }
  }, [isIdle, containerRect, idleX, idleY, rotation, tilt, perspective, scale, zIndex, x, y])

  // Show pointer cursor over text
  if (isOverText) {
    return (
      <motion.div
        className="absolute z-50"
        style={{
          top: y,
          left: x,
          pointerEvents: 'none',
        }}
        initial={{
          scale: 1,
          opacity: 1,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1"
          viewBox="0 0 16 16"
          className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform transition-colors duration-300"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: color || '#6366f1' }}
        >
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="absolute"
      style={{
        top: isIdle ? idleY : y,
        left: isIdle ? idleX : x,
        pointerEvents: 'none',
        rotate: isIdle ? rotation : 0,
        scale: isIdle ? scale : 1,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        zIndex: isIdle ? zIndex : 50,
        filter: isIdle ? `blur(${scale.get() < 0.9 ? '0.5px' : '0px'})` : 'blur(0px)',
        opacity: isIdle ? (scale.get() < 0.8 ? 0.7 : 1) : 1,
      }}
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        opacity: isIdle ? (scale.get() < 0.8 ? 0.7 : 1) : 1,
      }}
      transition={{
        opacity: { duration: 0.5 },
      }}
      exit={{
        scale: 0.8,
        opacity: 0,
      }}
    >
      <motion.svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className="-translate-x-6 -translate-y-6"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          rotateX: isIdle ? tilt : 0,
          rotateY: isIdle ? perspective : 0,
          transformStyle: 'preserve-3d',
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
        }}
        animate={{
          rotateZ: isIdle ? [0, 8, -8, 0] : [0, 3, 0, -3, 0],
          y: isIdle ? [-2, 2, -2] : [0, 1.5, 0],
        }}
        transition={{
          rotateZ: {
            duration: isIdle ? 3 : 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          y: {
            duration: isIdle ? 1.8 : 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        {/* Drone body - central hub with more detail */}
        <g>
          {/* Outer shell */}
          <ellipse cx="24" cy="24" rx="7" ry="6" fill={color || '#6366f1'} opacity="0.95" />
          <ellipse cx="24" cy="24" rx="5.5" ry="4.5" fill={color || '#6366f1'} opacity="0.7" />
          <ellipse cx="24" cy="24" rx="4" ry="3" fill="url(#bodyGradient)" />

          {/* Body details */}
          <rect x="22" y="23" width="4" height="1" fill="#000" opacity="0.3" rx="0.5" />

          {/* Camera/sensor with lens */}
          <circle cx="24" cy="26" r="2.5" fill="#000" opacity="0.9" />
          <circle cx="24" cy="26" r="1.8" fill={color || '#6366f1'} opacity="0.5" />
          <circle cx="24" cy="26" r="1" fill="#fff" opacity="0.6" />
          <circle cx="23.5" cy="25.5" r="0.5" fill="#fff" opacity="0.9" />

          {/* Multiple LED indicators */}
          <circle cx="24" cy="21" r="1" fill="#ff0000">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="21.5" cy="22.5" r="0.6" fill="#00ff00">
            <animate
              attributeName="opacity"
              values="0.2;0.8;0.2"
              dur="1.3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="26.5" cy="22.5" r="0.6" fill="#0000ff">
            <animate
              attributeName="opacity"
              values="0.2;0.8;0.2"
              dur="1.1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color || '#6366f1'} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color || '#6366f1'} stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="propellerGlow">
            <stop offset="0%" stopColor={color || '#6366f1'} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color || '#6366f1'} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Arms - 4 diagonal arms with more detail */}
        <g>
          {/* Top-right arm */}
          <line
            x1="24"
            y1="24"
            x2="38"
            y2="10"
            stroke={color || '#6366f1'}
            strokeWidth="2"
            opacity="0.9"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="24"
            x2="38"
            y2="10"
            stroke="#fff"
            strokeWidth="0.8"
            opacity="0.3"
            strokeLinecap="round"
          />

          {/* Top-left arm */}
          <line
            x1="24"
            y1="24"
            x2="10"
            y2="10"
            stroke={color || '#6366f1'}
            strokeWidth="2"
            opacity="0.9"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="24"
            x2="10"
            y2="10"
            stroke="#fff"
            strokeWidth="0.8"
            opacity="0.3"
            strokeLinecap="round"
          />

          {/* Bottom-right arm */}
          <line
            x1="24"
            y1="24"
            x2="38"
            y2="38"
            stroke={color || '#6366f1'}
            strokeWidth="2"
            opacity="0.9"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="24"
            x2="38"
            y2="38"
            stroke="#fff"
            strokeWidth="0.8"
            opacity="0.3"
            strokeLinecap="round"
          />

          {/* Bottom-left arm */}
          <line
            x1="24"
            y1="24"
            x2="10"
            y2="38"
            stroke={color || '#6366f1'}
            strokeWidth="2"
            opacity="0.9"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="24"
            x2="10"
            y2="38"
            stroke="#fff"
            strokeWidth="0.8"
            opacity="0.3"
            strokeLinecap="round"
          />
        </g>

        {/* Propellers - 4 corners with enhanced rotation animation */}
        {/* Top-right propeller */}
        <g>
          <circle cx="38" cy="10" r="5" fill="url(#propellerGlow)" />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: isIdle ? 0.2 : 0.3, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '38px 10px' }}
          >
            <ellipse cx="38" cy="10" rx="6" ry="1.5" fill={color || '#6366f1'} opacity="0.7" />
            <ellipse cx="38" cy="10" rx="1.5" ry="6" fill={color || '#6366f1'} opacity="0.7" />
            <ellipse cx="38" cy="10" rx="5.5" ry="1.2" fill="#fff" opacity="0.3" />
            <ellipse cx="38" cy="10" rx="1.2" ry="5.5" fill="#fff" opacity="0.3" />
          </motion.g>
          <circle cx="38" cy="10" r="2" fill={color || '#6366f1'} opacity="0.95" />
          <circle cx="38" cy="10" r="1.2" fill="#000" opacity="0.5" />
        </g>

        {/* Top-left propeller */}
        <g>
          <circle cx="10" cy="10" r="5" fill="url(#propellerGlow)" />
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: isIdle ? 0.2 : 0.3, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '10px 10px' }}
          >
            <ellipse cx="10" cy="10" rx="6" ry="1.5" fill={color || '#6366f1'} opacity="0.7" />
            <ellipse cx="10" cy="10" rx="1.5" ry="6" fill={color || '#6366f1'} opacity="0.7" />
            <ellipse cx="10" cy="10" rx="5.5" ry="1.2" fill="#fff" opacity="0.3" />
            <ellipse cx="10" cy="10" rx="1.2" ry="5.5" fill="#fff" opacity="0.3" />
          </motion.g>
          <circle cx="10" cy="10" r="2" fill={color || '#6366f1'} opacity="0.95" />
          <circle cx="10" cy="10" r="1.2" fill="#000" opacity="0.5" />
        </g>

        {/* Bottom-right propeller */}
        <g>
          <circle cx="38" cy="38" r="5" fill="url(#propellerGlow)" />
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: isIdle ? 0.2 : 0.3, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '38px 38px' }}
          >
            <ellipse cx="38" cy="38" rx="6" ry="1.5" fill={color || '#6366f1'} opacity="0.7" />
            <ellipse cx="38" cy="38" rx="1.5" ry="6" fill={color || '#6366f1'} opacity="0.7" />
            <ellipse cx="38" cy="38" rx="5.5" ry="1.2" fill="#fff" opacity="0.3" />
            <ellipse cx="38" cy="38" rx="1.2" ry="5.5" fill="#fff" opacity="0.3" />
          </motion.g>
          <circle cx="38" cy="38" r="2" fill={color || '#6366f1'} opacity="0.95" />
          <circle cx="38" cy="38" r="1.2" fill="#000" opacity="0.5" />
        </g>

        {/* Bottom-left propeller */}
        <g>
          <circle cx="10" cy="38" r="5" fill="url(#propellerGlow)" />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: isIdle ? 0.2 : 0.3, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '10px 38px' }}
          >
            <ellipse cx="10" cy="38" rx="6" ry="1.5" fill={color || '#6366f1'} opacity="0.7" />
            <ellipse cx="10" cy="38" rx="1.5" ry="6" fill={color || '#6366f1'} opacity="0.7" />
            <ellipse cx="10" cy="38" rx="5.5" ry="1.2" fill="#fff" opacity="0.3" />
            <ellipse cx="10" cy="38" rx="1.2" ry="5.5" fill="#fff" opacity="0.3" />
          </motion.g>
          <circle cx="10" cy="38" r="2" fill={color || '#6366f1'} opacity="0.95" />
          <circle cx="10" cy="38" r="1.2" fill="#000" opacity="0.5" />
        </g>

        {/* Enhanced glow effect around drone */}
        <circle cx="24" cy="24" r="18" fill={color || '#6366f1'} opacity="0.08">
          <animate attributeName="r" values="18;20;18" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="24" cy="24" r="15" fill={color || '#6366f1'} opacity="0.12" />
      </motion.svg>
    </motion.div>
  )
}
