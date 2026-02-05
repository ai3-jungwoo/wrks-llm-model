"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 -z-10" />

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-brand-secondary/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span>2026 Latest AI Models</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
        >
          최신{" "}
          <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            AI 모델
          </span>
          을{" "}
          <br className="hidden md:block" />
          한눈에 비교하세요
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Claude, GPT, Gemini, Llama 등 세계 최고의 AI 모델들의 특징과 성능을
          비교하고 프로젝트에 가장 적합한 모델을 찾아보세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#models"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-brand-primary text-white font-medium rounded-xl hover:bg-brand-primary/90 transition-all active:scale-[0.98]"
          >
            모델 탐색하기
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 border-2 border-brand-primary text-brand-primary font-medium rounded-xl hover:bg-brand-primary/10 transition-all active:scale-[0.98]"
          >
            비교 가이드
          </a>
        </motion.div>
      </div>
    </section>
  );
}
