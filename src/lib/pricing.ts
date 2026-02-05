// 모델별 가격 정보 (1천 토큰당 원화)
// 1천 토큰 = 한글 약 1,600자 = A4 약 1장
export const modelPricing: Record<string, { input: number; output: number }> = {
  // OpenAI
  "gpt-5-2": { input: 6.431, output: 51.45 },
  "gpt-5-2-pro": { input: 77.175, output: 617.4 },
  "gpt-5-2-chat": { input: 6.431, output: 51.45 },
  "gpt-5-1": { input: 4.595, output: 36.75 },
  "gpt-5": { input: 3.5, output: 28 },
  "gpt-5-chat": { input: 3.5, output: 28 },
  "gpt-5-mini": { input: 0.92, output: 7.35 },
  "gpt-5-nano": { input: 0.185, output: 1.47 },
  "o4-mini": { input: 4.042, output: 16.17 },
  "o3-pro": { input: 73.5, output: 294 },
  "o3": { input: 7.35, output: 29.4 },
  "o3-mini": { input: 3.0, output: 12.1 },
  "o1": { input: 41.4, output: 165.6 },
  "gpt-4-1": { input: 6.5, output: 26 },
  "gpt-4-1-mini": { input: 1.47, output: 5.88 },
  "gpt-4-1-nano": { input: 0.4, output: 1.6 },
  "gpt-4o": { input: 6.5, output: 26 },
  "gpt-4o-mini": { input: 0.552, output: 2.205 },

  // Anthropic
  "claude-opus-4-5": { input: 18.375, output: 91.875 },
  "claude-opus-4-1": { input: 55.125, output: 275.625 },
  "claude-opus-4": { input: 55.125, output: 275.625 },
  "claude-sonnet-4-5": { input: 11.025, output: 55.125 },
  "claude-sonnet-4": { input: 11.025, output: 55.125 },
  "claude-haiku-4-5": { input: 3.675, output: 18.375 },
  "claude-haiku-3-5": { input: 2.94, output: 14.7 },
  "claude-haiku-3": { input: 0.92, output: 4.595 },

  // Google
  "gemini-3-pro": { input: 7.35, output: 44.1 },
  "gemini-deep-research": { input: 3.55, output: 21.3 },
  "gemini-3-flash": { input: 1.8375, output: 11.025 },
  "gemini-2-5-pro": { input: 4.595, output: 36.75 },
  "gemini-2-5-flash": { input: 1.102, output: 9.187 },
  "gemini-2-5-flash-lite": { input: 0.367, output: 1.47 },

  // Perplexity
  "sonar-deep-research": { input: 7.35, output: 29.4 },
  "sonar-reasoning-pro": { input: 7.35, output: 29.4 },
  "sonar-pro": { input: 11.025, output: 55.125 },
  "sonar-reasoning": { input: 3.675, output: 18.375 },
  "sonar": { input: 3.675, output: 3.675 },

  // xAI
  "grok-4-1-fast": { input: 0.735, output: 1.837 },
  "grok-4-fast": { input: 0.735, output: 1.837 },
  "grok-4": { input: 11.025, output: 55.125 },
  "grok-code-fast": { input: 0.735, output: 5.512 },
  "grok-3": { input: 11.025, output: 55.125 },
  "grok-3-mini": { input: 1.102, output: 1.837 },

  // Upstage
  "solar-pro-3": { input: 4.2, output: 29 },
  "solar-pro-2": { input: 4.41, output: 4.41 },

  // LG
  "k-exaone-236b": { input: 5.2, output: 36 },
  "lg-exaone-4-0-1": { input: 8.82, output: 14.7 },
  "lg-exaone-4-0": { input: 8.82, output: 14.7 },
};

// A4 1장 = 약 1,600자 = 약 1천 토큰
// 대학생 레포트 평균: A4 5장 = 약 5천 토큰
// 일반적인 AI 대화 1회: 입력 500토큰 + 출력 1,500토큰 (질문 짧고, 답변 길게)

export interface PricingExample {
  icon: string;
  label: string;
  count: number;
  unit: string;
  description: string;
}

export function calculatePricingExamples(
  modelId: string,
  budget: number = 10000
): PricingExample[] | null {
  const pricing = modelPricing[modelId];
  if (!pricing) return null;

  // 1회 AI 대화 비용 계산 (입력 0.5k + 출력 1.5k 토큰)
  const conversationCost = pricing.input * 0.5 + pricing.output * 1.5;
  const conversations = Math.floor(budget / conversationCost);

  // A4 1장 출력 비용 (1k 토큰)
  const a4PageCost = pricing.output;
  const a4Pages = Math.floor(budget / a4PageCost);

  // 대학생 레포트 (A4 5장 = 5k 출력 토큰)
  const reportCost = pricing.output * 5;
  const reports = Math.floor(budget / reportCost);

  // 짧은 질문 1000회 비용 (각 입력 0.1k + 출력 0.3k)
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
