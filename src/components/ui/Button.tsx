'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none';

    const variantClasses = cn({
      'bg-navy-700 text-white hover:bg-navy-800': variant === 'primary',
      'bg-white text-navy-700 border border-navy-200 hover:bg-navy-50': variant === 'secondary',
      'border-2 border-navy-700 text-navy-700 hover:bg-navy-50': variant === 'outline',
      'text-navy-700 hover:bg-navy-50': variant === 'ghost',
    });

    const sizeClasses = cn({
      'h-9 px-4 py-2 text-sm': size === 'sm',
      'h-10 px-6 py-2': size === 'md',
      'h-12 px-8 py-3 text-lg': size === 'lg',
    });

    const classes = cn(
      baseClasses,
      variantClasses,
      sizeClasses,
      className
    );

    // If asChild is true, we'll use the child element as the button
    if (props.asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(children.props.className, classes),
        disabled: disabled || isLoading,
        ...props,
      } as any);
    }

    return (
      <motion.button
        whileHover={variant !== 'ghost' ? { scale: 1.02 } : {}}
        whileTap={variant !== 'ghost' ? { scale: 0.98 } : {}}
        className={classes}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };