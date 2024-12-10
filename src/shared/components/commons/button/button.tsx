import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@shared/utils'

/**
 * Variants for the button component.
 */
const buttonVariants = cva(
  'disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2 inline-flex items-center justify-center rounded-md text-sm transition-colors whitespace-nowrap [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default'
    },
    variants: {
      size: {
        default: 'h-9 px-4 py-2',
        icon: 'h-9 w-9',
        lg: 'h-10 px-8 rounded-md',
        sm: 'h-8 px-3 rounded-md text-xs'
      },
      variant: {
        default: 'bg-primary hover:bg-primary/90 shadow text-primary-foreground',
        destructive: 'bg-destructive hover:bg-destructive/90 shadow-sm text-destructive-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'hover:underline text-primary underline-offset-4',
        outline: 'bg-background border border-input hover:bg-accent hover:text-accent-foreground shadow-sm',
        secondary: 'bg-secondary hover:bg-secondary/80 shadow-sm text-secondary-foreground'
      }
    }
  }
)

/**
 * Button component.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'

    return <Component className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
