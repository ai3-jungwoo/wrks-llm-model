"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Badge({
  children,
  color,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        {
          "px-2 py-0.5 text-[11px]": size === "sm",
          "px-2.5 py-1 text-xs": size === "md",
          "px-3 py-1.5 text-sm": size === "lg",
          "bg-gray-100 text-gray-700": variant === "default" && !color,
          "border border-gray-300 text-gray-600": variant === "outline",
        },
        className
      )}
      style={
        color && variant === "default"
          ? { backgroundColor: `${color}20`, color: color }
          : color && variant === "outline"
          ? { borderColor: color, color: color }
          : undefined
      }
    >
      {children}
    </span>
  );
}
