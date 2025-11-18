import * as React from 'react'
import { cn } from '@/lib/utils'

export interface LitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const LitButton = React.forwardRef<HTMLButtonElement, LitButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button ref={ref} className={cn('p-[3px] relative', className)} {...props}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg" />
        <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
          {children}
        </div>
      </button>
    )
  }
)

LitButton.displayName = 'LitButton'

export { LitButton }
