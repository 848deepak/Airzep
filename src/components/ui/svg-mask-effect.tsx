'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode
  revealText?: string | React.ReactNode
  size?: number
  revealSize?: number
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const updateMousePosition = (e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', updateMousePosition)
      return () => {
        container.removeEventListener('mousemove', updateMousePosition)
      }
    }
  }, [])
  const maskSize = isHovered ? revealSize : size

  return (
    <motion.div
      ref={containerRef}
      className={cn('relative h-screen bg-black', className)}
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
    >
      {/* Base layer - visible by default on black background */}
      <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>

      {/* Revealed layer - shown through the mask */}
      <motion.div
        className="absolute inset-0 z-20 flex h-full w-full items-center justify-center bg-white [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
        animate={{
          maskPosition: `${(mousePosition.x ?? 0) - maskSize / 2}px ${
            (mousePosition.y ?? 0) - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: 'easeInOut' },
          maskPosition: { duration: 0.15, ease: 'linear' },
        }}
      >
        <div className="absolute inset-0 z-0 h-full w-full bg-white" />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {revealText}
        </div>
      </motion.div>
    </motion.div>
  )
}
