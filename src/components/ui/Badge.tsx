"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  variant?: "default" | "outline";
  className?: string;
}

export default function Badge({
  children,
  color,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium transition-colors",
        {
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
