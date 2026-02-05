"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { providers } from "@/lib/data";

interface CategoryFilterProps {
  selectedProvider: string;
  onSelect: (provider: string) => void;
}

export default function CategoryFilter({
  selectedProvider,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-2">
      <div className="flex gap-2 px-4 md:px-0 md:justify-center min-w-max">
        {providers.map((provider) => (
          <button
            key={provider}
            onClick={() => onSelect(provider)}
            className={cn(
              "relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
              "min-h-[44px] whitespace-nowrap touch-manipulation",
              selectedProvider === provider
                ? "text-white"
                : "text-gray-600 hover:text-brand-primary hover:bg-gray-100"
            )}
          >
            {selectedProvider === provider && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-brand-primary rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{provider}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
