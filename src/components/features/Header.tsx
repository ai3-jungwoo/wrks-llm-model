"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { providers, providerColors } from "@/lib/data";

interface HeaderProps {
  selectedProvider: string;
  onSelectProvider: (provider: string) => void;
}

export default function Header({ selectedProvider, onSelectProvider }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 md:px-6">
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-base text-black">웍스AI 모델</span>
          </a>

          {/* Desktop Navigation - Provider Filter */}
          <div className="hidden md:flex items-center gap-1 overflow-x-auto">
            {providers.map((provider) => (
              <button
                key={provider}
                onClick={() => onSelectProvider(provider)}
                className={cn(
                  "relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  "min-h-[40px] whitespace-nowrap",
                  selectedProvider === provider
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                {selectedProvider === provider && (
                  <motion.div
                    layoutId="activeProviderDesktop"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      backgroundColor: providerColors[provider] || "#5D5FEF"
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{provider}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-600 hover:text-brand-primary transition-colors"
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-3 grid grid-cols-2 gap-2">
              {providers.map((provider, index) => (
                <motion.button
                  key={provider}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => {
                    onSelectProvider(provider);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "px-4 py-3 rounded-lg font-medium transition-all text-sm",
                    "min-h-[44px] flex items-center justify-center",
                    selectedProvider === provider
                      ? "text-white"
                      : "text-gray-600 bg-gray-50 hover:bg-gray-100"
                  )}
                  style={
                    selectedProvider === provider
                      ? { backgroundColor: providerColors[provider] || "#5D5FEF" }
                      : undefined
                  }
                >
                  {provider}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
