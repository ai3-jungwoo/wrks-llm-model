"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  GraduationCap,
  Zap,
  Coins,
  LucideIcon,
  ImageIcon,
  Sparkles,
  LayoutGrid,
  Share2,
} from "lucide-react";
import {
  calculatePricingExamples,
  modelPricing,
  getPriceTier,
  priceTierLabels,
} from "@/lib/pricing";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  FileText,
  GraduationCap,
  Zap,
  Image: ImageIcon,
  Sparkles,
  LayoutGrid,
  Share2,
};

interface PricingSectionProps {
  modelId: string;
  color: string;
}

export default function PricingSection({ modelId, color }: PricingSectionProps) {
  const pricing = modelPricing[modelId];
  const examples = calculatePricingExamples(modelId);
  const priceTier = getPriceTier(modelId);
  const tierInfo = priceTierLabels[priceTier];
  const isImageModel = pricing?.isImageModel || false;

  if (!pricing || !examples) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-8 pt-8 border-t border-gray-200"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}15` }}
          >
            <Coins className="w-5 h-5" style={{ color }} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-black">웍스AI 이용 비용</h2>
            <p className="text-sm text-gray-500">만원으로 이만큼 할 수 있어요</p>
          </div>
        </div>
        <span
          className="px-3 py-1.5 rounded-full text-sm font-medium"
          style={{ backgroundColor: tierInfo.bgColor, color: tierInfo.color }}
        >
          {tierInfo.label}
        </span>
      </div>

      {/* Budget Info */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-black">10,000원</span>
          <span className="text-gray-500">기준</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">입력 비용:</span>
            <span className="font-semibold text-gray-900">
              {pricing.input.toFixed(2)}원 / 1천 토큰
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">출력 비용:</span>
            <span className="font-semibold text-gray-900">
              {pricing.output.toFixed(2)}원 / 1천 토큰
            </span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          {isImageModel
            ? "* 이미지 1장 생성 시 프롬프트(입력) + 이미지 데이터(출력) 토큰이 사용됩니다"
            : "* 1천 토큰 = 한글 약 1,600자 = A4 약 1장 분량"}
        </p>
      </div>

      {/* Intuitive Examples Grid */}
      <div className="grid grid-cols-2 gap-4">
        {examples.map((example, index) => {
          const Icon = iconMap[example.icon] || MessageSquare;
          return (
            <motion.div
              key={example.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${color}10` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <span className="font-medium text-gray-700">{example.label}</span>
              </div>
              <div className="mb-2">
                <span
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color }}
                >
                  {example.count >= 10000
                    ? `${(example.count / 10000).toFixed(1)}만`
                    : example.count >= 1000
                    ? `${(example.count / 1000).toFixed(1)}천`
                    : example.count.toLocaleString()}
                </span>
                <span className="text-lg text-gray-600 ml-1">{example.unit}</span>
              </div>
              <p className="text-xs text-gray-400">{example.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Comparison Tip */}
      <div className="mt-6 p-4 bg-blue-50 rounded-xl">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">참고:</span>{" "}
          {isImageModel
            ? "이미지 해상도와 프롬프트 길이에 따라 실제 비용이 달라질 수 있어요. 위 계산은 평균적인 사용량 기준 예상치입니다."
            : "일반적으로 AI에게 질문하면 입력(질문)보다 출력(답변)이 3배 정도 깁니다. 위 계산은 이를 기준으로 한 예상치예요."}
        </p>
      </div>
    </motion.div>
  );
}
