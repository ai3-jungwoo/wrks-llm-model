"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Brain,
  Zap,
  Sparkles,
  Eye,
  Crown,
  Atom,
  Search,
  DollarSign,
  Layers,
  Github,
  Feather,
  Shield,
  FileSearch,
  Globe,
  GraduationCap,
  MessageSquare,
  Calculator,
  GitBranch,
  Lightbulb,
  Minimize2,
  Smartphone,
  WifiOff,
  FileText,
  ImageIcon,
  Building,
  FileStack,
  Code,
  MessageCircle,
  Scale,
  Briefcase,
  Newspaper,
  Rocket,
  Sun,
  Trophy,
  FlaskConical,
  Factory,
  Cpu,
  Bot,
  LucideIcon,
} from "lucide-react";
import { useState } from "react";
import Badge from "@/components/ui/Badge";
import { aiModels, providerLogos } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Zap,
  Sparkles,
  Eye,
  Crown,
  Atom,
  Search,
  DollarSign,
  Layers,
  Github,
  Feather,
  Shield,
  FileSearch,
  Globe,
  GraduationCap,
  MessageSquare,
  Calculator,
  GitBranch,
  Lightbulb,
  Minimize2,
  Smartphone,
  WifiOff,
  FileText,
  Image: ImageIcon,
  Building,
  FileStack,
  Code,
  MessageCircle,
  Scale,
  Briefcase,
  Newspaper,
  Rocket,
  Sun,
  Trophy,
  FlaskConical,
  Factory,
  Cpu,
};

export default function ModelDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [logoError, setLogoError] = useState(false);

  const model = aiModels.find((m) => m.id === params.id);

  if (!model) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            모델을 찾을 수 없습니다
          </h1>
          <Link
            href="/"
            className="text-brand-primary hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[model.iconName] || Brain;
  const logoFile = providerLogos[model.provider];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 md:px-6">
        <nav className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-base text-black">웍스AI 모델</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="py-6 md:py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-brand-primary transition-colors min-h-[44px] min-w-[44px]"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">뒤로 가기</span>
          </motion.button>

          {/* Model Detail Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          >
            {/* Accent Bar */}
            <div
              className="h-2"
              style={{ backgroundColor: model.color }}
            />

            <div className="p-6 md:p-10">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: `${model.color}15` }}
                >
                  {logoFile && !logoError ? (
                    <Image
                      src={`/logos/${logoFile}`}
                      alt={`${model.provider} logo`}
                      width={48}
                      height={48}
                      className="object-contain md:w-14 md:h-14"
                      onError={() => setLogoError(true)}
                    />
                  ) : (
                    <Icon
                      className="w-10 h-10 md:w-12 md:h-12"
                      style={{ color: model.color }}
                    />
                  )}
                </div>

                {/* Title & Provider */}
                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
                    {model.name}
                  </h1>
                  <p
                    className="text-base md:text-lg font-medium"
                    style={{ color: model.color }}
                  >
                    {model.provider}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {model.tags.map((tag) => (
                  <Badge key={tag} color={model.color} size="lg">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Description Section */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-black mb-4">모델 소개</h2>
                <p className="text-base text-[#272525] leading-relaxed mb-4">
                  {model.description}
                </p>
                {model.detailDescription && (
                  <p className="text-base text-[#272525] leading-relaxed">
                    {model.detailDescription}
                  </p>
                )}
              </div>

              {/* Source Link */}
              {model.sourceUrl && (
                <div className="pt-6 border-t border-gray-200">
                  <a
                    href={model.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
                    style={{ backgroundColor: model.color }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    공식 페이지에서 자세히 보기
                  </a>
                </div>
              )}
            </div>
          </motion.article>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-xs text-gray-400">
          <p>&copy; 2026 웍스AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
