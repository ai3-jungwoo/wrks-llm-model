"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
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
  LucideIcon,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import { AIModel, providerLogos } from "@/lib/data";

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

interface ModelCardProps {
  model: AIModel;
  index: number;
}

export default function ModelCard({ model, index }: ModelCardProps) {
  const Icon = iconMap[model.iconName] || Brain;
  const logoFile = providerLogos[model.provider];
  const [logoError, setLogoError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      {/* Accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
        style={{ backgroundColor: model.color }}
      />

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: `${model.color}15` }}
        >
          {logoFile && !logoError ? (
            <Image
              src={`/logos/${logoFile}`}
              alt={`${model.provider} logo`}
              width={28}
              height={28}
              className="object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <Icon className="w-6 h-6" style={{ color: model.color }} />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-black truncate group-hover:text-brand-primary transition-colors">
            {model.name}
          </h3>
          <p className="text-sm text-gray-500">{model.provider}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#272525] leading-relaxed mb-4 line-clamp-3">
        {model.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {model.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} color={model.color}>
            {tag}
          </Badge>
        ))}
        {model.tags.length > 3 && (
          <Badge variant="outline">+{model.tags.length - 3}</Badge>
        )}
      </div>
    </motion.article>
  );
}
