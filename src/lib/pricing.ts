// 모델별 가격 정보 (1천 토큰당 원화)
// 1천 토큰 = 한글 약 1,600자 = A4 약 1장
export interface ModelPricing {
  input: number;
  output: number;
  isImageModel?: boolean; // 이미지 생성 모델 여부
}

export const modelPricing: Record<string, ModelPricing> = {
  // OpenAI
  "gpt-5-2": { input: 2.581, output: 20.65 },
  "gpt-5-2-pro": { input: 30.975, output: 247.8 },
  "gpt-5-2-chat": { input: 2.581, output: 20.65 },
  "gpt-5-1": { input: 1.844, output: 14.75 },
  "gpt-5": { input: 1.844, output: 14.75 },
  "gpt-5-chat": { input: 1.844, output: 14.75 },
  "gpt-5-mini": { input: 0.369, output: 2.95 },
  "gpt-5-nano": { input: 0.074, output: 0.59 },
  "o4-mini": { input: 1.623, output: 6.49 },
  "o3-pro": { input: 29.5, output: 118 },
  "o3": { input: 2.95, output: 11.8 },
  "o3-mini": { input: 1.623, output: 6.49 },
  "o1": { input: 22.125, output: 88.5 },
  "gpt-4-1": { input: 2.95, output: 11.8 },
  "gpt-4-1-mini": { input: 0.59, output: 2.36 },
  "gpt-4-1-nano": { input: 0.148, output: 0.59 },
  "gpt-4o": { input: 3.688, output: 14.75 },
  "gpt-4o-mini": { input: 0.221, output: 0.885 },

  // Anthropic
  "claude-opus-4-5": { input: 7.375, output: 36.875 },
  "claude-opus-4-1": { input: 22.125, output: 110.625 },
  "claude-opus-4": { input: 22.125, output: 110.625 },
  "claude-sonnet-4-5": { input: 4.425, output: 22.125 },
  "claude-sonnet-4": { input: 4.425, output: 22.125 },
  "claude-haiku-4-5": { input: 1.475, output: 7.375 },
  "claude-haiku-3-5": { input: 1.18, output: 5.9 },
  "claude-haiku-3": { input: 0.369, output: 1.844 },

  // Google
  "gemini-3-pro": { input: 2.95, output: 17.7 },
  "nano-banana-pro": { input: 2.95, output: 17.7, isImageModel: true },
  "gemini-deep-research": { input: 3.55, output: 21.3 }, // 유지 (비즈라우터에 없음)
  "gemini-3-flash": { input: 0.738, output: 4.425 },
  "gemini-2-5-pro": { input: 1.844, output: 14.75 },
  "gemini-2-5-flash": { input: 0.443, output: 3.688 },
  "gemini-2-5-flash-lite": { input: 0.148, output: 0.59 },

  // Perplexity
  "sonar-deep-research": { input: 2.95, output: 11.8 },
  "sonar-reasoning-pro": { input: 2.95, output: 11.8 },
  "sonar-pro": { input: 4.425, output: 22.125 },
  "sonar-reasoning": { input: 3.675, output: 18.375 },
  "sonar": { input: 1.475, output: 1.475 },

  // xAI
  "grok-4-1-fast": { input: 0.295, output: 0.738 },
  "grok-4-fast": { input: 0.295, output: 0.738 },
  "grok-4": { input: 4.425, output: 22.125 },
  "grok-code-fast": { input: 0.295, output: 2.213 },
  "grok-3": { input: 4.425, output: 22.125 },
  "grok-3-mini": { input: 0.443, output: 0.738 },

  // Upstage (웍스 가격 유지)
  "solar-pro-3": { input: 4.2, output: 29 },
  "solar-pro-2": { input: 4.41, output: 4.41 },

  // LG
  "k-exaone-236b": { input: 5.2, output: 36 }, // 유지 (비즈라우터에 없음)
  "lg-exaone-4-0-1": { input: 0.885, output: 1.475 },
  "lg-exaone-4-0": { input: 0.885, output: 1.475 },
};

// A4 1장 = 약 1,600자 = 약 1천 토큰
// 대학생 레포트 평균: A4 5장 = 약 5천 토큰
// 일반적인 AI 대화 1회: 입력 500토큰 + 출력 1,500토큰 (질문 짧고, 답변 길게)
// 이미지 생성 1회: 입력 200토큰(프롬프트) + 출력 1,500토큰(이미지)

export interface PricingExample {
  icon: string;
  label: string;
  count: number;
  unit: string;
  description: string;
}

// 이미지 모델용 가격 계산
function calculateImagePricingExamples(
  pricing: ModelPricing,
  budget: number
): PricingExample[] {
  // 이미지 1장 생성 비용 (프롬프트 0.2k + 이미지 출력 1.5k 토큰)
  const imageCost = pricing.input * 0.2 + pricing.output * 1.5;
  const images = Math.floor(budget / imageCost);

  // 고화질(4K) 이미지 (프롬프트 0.3k + 이미지 출력 2.5k 토큰)
  const hdImageCost = pricing.input * 0.3 + pricing.output * 2.5;
  const hdImages = Math.floor(budget / hdImageCost);

  // 썸네일/저화질 이미지 (프롬프트 0.1k + 이미지 출력 0.8k 토큰)
  const thumbCost = pricing.input * 0.1 + pricing.output * 0.8;
  const thumbnails = Math.floor(budget / thumbCost);

  // SNS 콘텐츠 세트 (이미지 3장 + 캡션)
  const snsSetCost = imageCost * 3 + pricing.output * 0.5;
  const snsSets = Math.floor(budget / snsSetCost);

  return [
    {
      icon: "Image",
      label: "이미지 생성",
      count: images,
      unit: "장",
      description: "일반 품질 이미지",
    },
    {
      icon: "Sparkles",
      label: "고화질(4K)",
      count: hdImages,
      unit: "장",
      description: "상업용 고품질 이미지",
    },
    {
      icon: "LayoutGrid",
      label: "썸네일",
      count: thumbnails,
      unit: "장",
      description: "빠른 미리보기용",
    },
    {
      icon: "Share2",
      label: "SNS 세트",
      count: snsSets,
      unit: "세트",
      description: "이미지 3장 + 캡션",
    },
  ];
}

// 텍스트 모델용 가격 계산
function calculateTextPricingExamples(
  pricing: ModelPricing,
  budget: number
): PricingExample[] {
  // 1회 AI 대화 비용 계산 (입력 0.5k + 출력 1.5k 토큰)
  const conversationCost = pricing.input * 0.5 + pricing.output * 1.5;
  const conversations = Math.floor(budget / conversationCost);

  // A4 1장 출력 비용 (1k 토큰)
  const a4PageCost = pricing.output;
  const a4Pages = Math.floor(budget / a4PageCost);

  // 대학생 레포트 (A4 5장 = 5k 출력 토큰)
  const reportCost = pricing.output * 5;
  const reports = Math.floor(budget / reportCost);

  // 짧은 질문 (각 입력 0.1k + 출력 0.3k)
  const shortQACost = pricing.input * 0.1 + pricing.output * 0.3;
  const shortQAs = Math.floor(budget / shortQACost);

  return [
    {
      icon: "MessageSquare",
      label: "AI 대화",
      count: conversations,
      unit: "회",
      description: "일반적인 질문과 상세한 답변",
    },
    {
      icon: "FileText",
      label: "A4 문서",
      count: a4Pages,
      unit: "장",
      description: "AI가 작성하는 글 분량",
    },
    {
      icon: "GraduationCap",
      label: "대학 레포트",
      count: reports,
      unit: "개",
      description: "A4 5장 분량의 과제물",
    },
    {
      icon: "Zap",
      label: "간단한 질문",
      count: shortQAs,
      unit: "회",
      description: "짧은 질문과 짧은 답변",
    },
  ];
}

export function calculatePricingExamples(
  modelId: string,
  budget: number = 10000
): PricingExample[] | null {
  const pricing = modelPricing[modelId];
  if (!pricing) return null;

  // 이미지 모델인 경우 다른 예시 제공
  if (pricing.isImageModel) {
    return calculateImagePricingExamples(pricing, budget);
  }

  return calculateTextPricingExamples(pricing, budget);
}

// 가격 등급 계산 (저렴/보통/비싼)
export type PriceTier = "budget" | "standard" | "premium";

export function getPriceTier(modelId: string): PriceTier {
  const pricing = modelPricing[modelId];
  if (!pricing) return "standard";

  const avgCost = (pricing.input + pricing.output) / 2;

  if (avgCost < 5) return "budget";
  if (avgCost < 30) return "standard";
  return "premium";
}

export const priceTierLabels: Record<PriceTier, { label: string; color: string; bgColor: string }> = {
  budget: { label: "가성비", color: "#16A34A", bgColor: "#DCFCE7" },
  standard: { label: "표준", color: "#2563EB", bgColor: "#DBEAFE" },
  premium: { label: "프리미엄", color: "#9333EA", bgColor: "#F3E8FF" },
};
