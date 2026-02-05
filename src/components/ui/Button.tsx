"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles - Touch target minimum 44x44px
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200",
          "min-h-[44px] min-w-[44px] touch-manipulation",
          "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Variants
          {
            "bg-brand-primary text-white hover:bg-brand-primary/90 active:scale-[0.98]":
              variant === "primary",
            "bg-brand-secondary text-white hover:bg-brand-secondary/90 active:scale-[0.98]":
              variant === "secondary",
            "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10 active:scale-[0.98]":
              variant === "outline",
            "text-brand-primary hover:bg-brand-primary/10": variant === "ghost",
          },
          // Sizes
          {
            "px-3 py-2 text-sm": size === "sm",
            "px-4 py-2.5 text-base": size === "md",
            "px-6 py-3 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
