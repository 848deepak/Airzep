'use client'
import React, { useMemo, useRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
}: {
  rows?: number
  cols?: number
  cellSize?: number
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number
    col: number
  } | null>(null)
  const [rippleKey, setRippleKey] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'absolute inset-0 h-full w-full overflow-hidden',
        '[--cell-border-color:var(--color-neutral-300)] [--cell-fill-color:var(--color-neutral-100)] [--cell-shadow-color:var(--color-neutral-500)]',
        'dark:[--cell-border-color:var(--color-neutral-700)] dark:[--cell-fill-color:var(--color-neutral-900)] dark:[--cell-shadow-color:var(--color-neutral-800)]'
      )}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
        <DivGrid
          key={`base-${rippleKey}`}
          className="mask-radial-from-20% mask-radial-at-top opacity-600"
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          clickedCell={clickedCell}
          onCellClick={(row, col) => {
            setClickedCell({ row, col })
            setRippleKey(k => k + 1)
          }}
          interactive
          mousePos={mousePos}
          containerRef={ref}
        />
      </div>
    </div>
  )
}

type DivGridProps = {
  className?: string
  rows: number
  cols: number
  cellSize: number // in pixels
  borderColor: string
  fillColor: string
  clickedCell: { row: number; col: number } | null
  onCellClick?: (row: number, col: number) => void
  interactive?: boolean
  mousePos?: { x: number; y: number }
  containerRef?: React.RefObject<HTMLDivElement | null>
}

type CellStyle = React.CSSProperties & {
  ['--delay']?: string
  ['--duration']?: string
}

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize: _cellSize = 56,
  borderColor = '#3f3f46',
  fillColor = '#000000',
  clickedCell = null,
  onCellClick = () => {},
  interactive = true,
  mousePos = { x: 0, y: 0 },
  containerRef,
}: DivGridProps) => {
  void _cellSize // Intentionally unused but required by DivGridProps interface
  const [containerRect, setContainerRect] = React.useState<DOMRect | null>(null)
  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, idx) => idx), [rows, cols])

  // Update container rect when ref is available
  React.useEffect(() => {
    if (containerRef?.current) {
      setContainerRect(containerRef.current.getBoundingClientRect())

      const handleResize = () => {
        if (containerRef?.current) {
          setContainerRect(containerRef.current.getBoundingClientRect())
        }
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [containerRef])

  // Calculate grid intersections (dots at corners of cells)
  const dots = useMemo(() => {
    const dotArray: Array<{ row: number; col: number }> = []
    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        dotArray.push({ row: r, col: c })
      }
    }
    return dotArray
  }, [rows, cols])

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    width: '100%',
    height: '100%',
  }

  return (
    <div className={cn('absolute inset-0 w-full h-full', className)} style={gridStyle}>
      {cells.map(idx => {
        const rowIdx = Math.floor(idx / cols)
        const colIdx = idx % cols
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0
        const delay = clickedCell ? Math.max(0, distance * 55) : 0 // ms
        const duration = 200 + distance * 80 // ms

        const style: CellStyle = clickedCell
          ? {
              '--delay': `${delay}ms`,
              '--duration': `${duration}ms`,
            }
          : {}

        return (
          <div
            key={idx}
            className={cn(
              'cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]',
              clickedCell && 'animate-cell-ripple [animation-fill-mode:none]',
              !interactive && 'pointer-events-none'
            )}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
              ...style,
            }}
            onClick={interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined}
          />
        )
      })}

      {/* Glowing dots at grid intersections */}
      {containerRect
        ? dots.map(({ row, col }, idx) => {
            const dotX = (col / cols) * containerRect.width
            const dotY = (row / rows) * containerRect.height

            // Calculate distance from mouse to dot
            const distance = Math.hypot(mousePos.x - dotX, mousePos.y - dotY)
            const maxGlowDistance = 150 // pixels
            const glowIntensity = Math.max(0, 1 - distance / maxGlowDistance)

            const dotStyle: React.CSSProperties = {
              left: `${(col / cols) * 100}%`,
              top: `${(row / rows) * 100}%`,
              opacity: glowIntensity * 0.8,
              transform: `translate(-50%, -50%) scale(${1 + glowIntensity * 0.5})`,
              boxShadow: `0 0 ${glowIntensity * 20}px ${glowIntensity * 10}px rgba(99, 102, 241, ${glowIntensity * 0.8})`,
            }

            return (
              <div
                key={`dot-${idx}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary-400 pointer-events-none transition-all duration-100 ease-out"
                style={dotStyle}
              />
            )
          })
        : null}
    </div>
  )
}
