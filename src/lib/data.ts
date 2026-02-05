export interface AIModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  tags: string[];
  color: string;
  iconName: string;
  isFeatured?: boolean;
}

// 웍스AI 대표 모델 7종
export const featuredModelIds = [
  "gpt-5-2",
  "gemini-3-pro",
  "claude-opus-4-5",
  "solar-pro-3",
  "k-exaone-236b",
  "nano-banana-pro",
  "gemini-deep-research",
];

// OpenAI 모델 (19종)
export const openaiModels: AIModel[] = [
  {
    id: "gpt-5-2",
    name: "GPT-5.2",
    provider: "OpenAI",
    description: "장문 문서, 코드, 에이전트 처리에 최적화된 최신 플래그십 모델",
    tags: ["대표 모델", "자동 작업", "코딩"],
    color: "#000000",
    iconName: "Sparkles",
  },
  {
    id: "gpt-5-2-pro",
    name: "GPT-5.2 Pro",
    provider: "OpenAI",
    description: "5.2의 성능을 극한으로 끌어올려 전문가용 데이터 분석 및 연구에 특화",
    tags: ["전문가용", "연구", "데이터 분석"],
    color: "#000000",
    iconName: "GraduationCap",
  },
  {
    id: "gpt-5-2-chat",
    name: "GPT-5.2 Chat",
    provider: "OpenAI",
    description: "5.2 엔진을 대화형 인터페이스에 맞춰 튜닝한 자연어 소통 최적화 모델",
    tags: ["대화", "질문응답", "상담"],
    color: "#000000",
    iconName: "MessageSquare",
  },
  {
    id: "gpt-5-1",
    name: "GPT-5.1",
    provider: "OpenAI",
    description: "적응형 추론(Adaptive Reasoning)으로 속도와 깊이를 스스로 조절하는 범용 모델",
    tags: ["똑똑한 판단", "문제 해결", "만능"],
    color: "#000000",
    iconName: "Brain",
  },
  {
    id: "gpt-5-1-chat",
    name: "GPT-5.1 Chat",
    provider: "OpenAI",
    description: "5.1 기반의 대화 최적화 버전, 복잡한 프롬프트 지시 이행 능력 강화",
    tags: ["대화", "지시 수행", "복잡한 요청"],
    color: "#000000",
    iconName: "MessageSquare",
  },
  {
    id: "gpt-5",
    name: "GPT-5",
    provider: "OpenAI",
    description: "AGI에 근접한 지식과 상식 추론 능력을 갖춘 5세대의 표준 파운데이션",
    tags: ["기본 모델", "높은 지능", "폭넓은 지식"],
    color: "#000000",
    iconName: "Cpu",
  },
  {
    id: "gpt-5-chat",
    name: "GPT-5 Chat",
    provider: "OpenAI",
    description: "일반 사용자용으로 안전성과 응답 톤을 조정한 대화 특화 모델",
    tags: ["대화", "안전함", "누구나 사용"],
    color: "#000000",
    iconName: "MessageSquare",
  },
  {
    id: "o4-mini",
    name: "o4 mini",
    provider: "OpenAI",
    description: "코딩 및 수학 문제를 저비용 고속으로 해결하는 가성비 추론 모델",
    tags: ["논리 문제", "수학", "저렴함"],
    color: "#000000",
    iconName: "Calculator",
  },
  {
    id: "o3-pro",
    name: "o3 Pro",
    provider: "OpenAI",
    description: "심층 사고 시간을 늘려 과학 연구 및 고난도 논리 설계에 특화된 전문가용",
    tags: ["전문가용", "과학 연구", "깊은 생각"],
    color: "#000000",
    iconName: "Atom",
  },
  {
    id: "o3",
    name: "o3",
    provider: "OpenAI",
    description: "CoT(사고 사슬) 기술을 고도화하여 복잡한 문제를 오류 없이 풀어내는 추론 모델",
    tags: ["단계별 사고", "논리 문제", "정확함"],
    color: "#000000",
    iconName: "GitBranch",
  },
  {
    id: "o3-mini",
    name: "o3 Mini",
    provider: "OpenAI",
    description: "o3의 논리력을 유지하며 속도를 높인 실시간 학습 및 코딩 보조 모델",
    tags: ["소형", "빠름", "코딩 도우미"],
    color: "#000000",
    iconName: "Zap",
  },
  {
    id: "o1",
    name: "o1",
    provider: "OpenAI",
    description: "답변 전 심층 사고 과정을 거쳐 논리적 정확성을 획기적으로 높인 추론 모델의 시초",
    tags: ["최초 모델", "깊은 생각", "논리적"],
    color: "#000000",
    iconName: "Lightbulb",
  },
  {
    id: "gpt-5-mini",
    name: "GPT-5 Mini",
    provider: "OpenAI",
    description: "GPT-5의 지능을 유지하며 비용을 낮춘 상용 서비스 표준 경량 모델",
    tags: ["소형", "저렴함", "실용적"],
    color: "#000000",
    iconName: "Minimize2",
  },
  {
    id: "gpt-5-nano",
    name: "GPT-5 Nano",
    provider: "OpenAI",
    description: "모바일 및 로컬 환경 구동을 위해 극도로 경량화된 초소형 온디바이스 모델",
    tags: ["초소형", "휴대폰 사용", "인터넷 불필요"],
    color: "#000000",
    iconName: "Smartphone",
  },
  {
    id: "gpt-4-1-mini",
    name: "GPT-4.1 Mini",
    provider: "OpenAI",
    description: "이전 세대 아키텍처 기반의 고효율 저비용 텍스트 처리 모델",
    tags: ["소형", "효율적", "글 작성"],
    color: "#000000",
    iconName: "FileText",
  },
  {
    id: "gpt-4-1-nano",
    name: "GPT-4.1 Nano",
    provider: "OpenAI",
    description: "인터넷 연결 없는 엣지 디바이스에서도 구동 가능한 오프라인용 모델",
    tags: ["초소형", "인터넷 불필요", "소형 기기"],
    color: "#000000",
    iconName: "WifiOff",
  },
  {
    id: "gpt-4-1",
    name: "GPT-4.1",
    provider: "OpenAI",
    description: "GPT-4o의 아키텍처를 개량하여 안정성과 신뢰성을 높인 텍스트 모델",
    tags: ["안정적", "믿을 수 있음", "글 작성"],
    color: "#000000",
    iconName: "Shield",
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    provider: "OpenAI",
    description: "텍스트·음성·이미지를 실시간으로 처리하는 옴니(Omni) 기능을 갖춘 4세대 표준",
    tags: ["통합형", "글+이미지+음성", "실시간"],
    color: "#000000",
    iconName: "Layers",
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    provider: "OpenAI",
    description: "4o의 멀티모달 기능을 가장 저렴하게 제공하여 대중화를 이끈 가성비 모델",
    tags: ["소형", "글+이미지", "저렴함"],
    color: "#000000",
    iconName: "DollarSign",
  },
];

// Google 모델 (7종)
export const googleModels: AIModel[] = [
  {
    id: "gemini-3-pro",
    name: "Gemini 3.0 Pro",
    provider: "Google",
    description: "Deep Think 모드와 압도적 멀티모달 분석력을 갖춘 구글의 최상위 에이전트",
    tags: ["깊은 생각", "글+이미지", "자동 작업"],
    color: "#4285F4",
    iconName: "Brain",
  },
  {
    id: "nano-banana-pro",
    name: "Nano Banana Pro",
    provider: "Google",
    description: "4K급 상업용 이미지 생성 및 정밀 편집에 특화된 크리에이티브 모델",
    tags: ["이미지 생성", "고화질", "창작"],
    color: "#4285F4",
    iconName: "Image",
  },
  {
    id: "gemini-deep-research",
    name: "Gemini Deep Research",
    provider: "Google",
    description: "멀티모달 입력을 지원하며 웹을 심층 탐색해 구조화된 보고서와 시각 자료를 생성하는 AI 리서치 에이전트",
    tags: ["자료 조사", "보고서 작성", "정리"],
    color: "#4285F4",
    iconName: "FileSearch",
  },
  {
    id: "gemini-3-flash",
    name: "Gemini 3.0 Flash",
    provider: "Google",
    description: "높은 성능은 그대로 살리면서도 속도는 빠르게, 가격은 낮춘 최강 가성비 모델",
    tags: ["빠름", "저렴함", "좋은 성능"],
    color: "#4285F4",
    iconName: "Zap",
  },
  {
    id: "gemini-2-5-pro",
    name: "Gemini 2.5 Pro",
    provider: "Google",
    description: "안정적인 코딩 성능과 추론 능력을 바탕으로 기업 표준으로 쓰이는 고성능 모델",
    tags: ["기업용", "코딩", "안정적"],
    color: "#4285F4",
    iconName: "Building",
  },
  {
    id: "gemini-2-5-flash",
    name: "Gemini 2.5 Flash",
    provider: "Google",
    description: "대량의 문서 및 긴 컨텍스트를 가장 빠르고 저렴하게 처리하는 가성비 모델",
    tags: ["긴 문서", "대량 처리", "빠름"],
    color: "#4285F4",
    iconName: "FileStack",
  },
  {
    id: "gemini-2-5-flash-lite",
    name: "Gemini 2.5 Flash Lite",
    provider: "Google",
    description: "모바일 환경 및 단순 반복 작업에 최적화된 초경량 고속 모델",
    tags: ["초경량", "휴대폰용", "빠름"],
    color: "#4285F4",
    iconName: "Smartphone",
  },
];

// Claude 모델 (8종)
export const claudeModels: AIModel[] = [
  {
    id: "claude-opus-4-5",
    name: "Claude Opus 4.5",
    provider: "Anthropic",
    description: "현존 최고 지능, 복잡한 R&D 및 정교한 글쓰기에 최적화된 전문가용 모델",
    tags: ["최고 성능", "연구개발", "글쓰기"],
    color: "#D4A27F",
    iconName: "Crown",
  },
  {
    id: "claude-sonnet-4-5",
    name: "Claude Sonnet 4.5",
    provider: "Anthropic",
    description: "Opus급 지능에 속도를 더해 실무 코딩 및 업무 자동화에 가장 적합한 모델",
    tags: ["코딩", "업무 자동화", "빠름"],
    color: "#D4A27F",
    iconName: "Code",
  },
  {
    id: "claude-haiku-4-5",
    name: "Claude Haiku 4.5",
    provider: "Anthropic",
    description: "즉각적인 반응 속도와 준수한 지능을 갖춘 대고객 챗봇 및 번역용 모델",
    tags: ["즉시 응답", "고객 상담", "번역"],
    color: "#D4A27F",
    iconName: "MessageCircle",
  },
  {
    id: "claude-opus-4-1",
    name: "Claude Opus 4.1",
    provider: "Anthropic",
    description: "금융/법률 등 정밀성이 요구되는 분야를 위해 논리 안정성을 강화한 모델",
    tags: ["금융", "법률", "정밀함"],
    color: "#D4A27F",
    iconName: "Scale",
  },
  {
    id: "claude-sonnet-4",
    name: "Claude Sonnet 4",
    provider: "Anthropic",
    description: "준수한 성능과 데이터 추출 능력으로 비즈니스 실무 표준으로 자리 잡은 모델",
    tags: ["업무용", "데이터 정리", "실용적"],
    color: "#D4A27F",
    iconName: "Briefcase",
  },
  {
    id: "claude-opus-4",
    name: "Claude Opus 4",
    provider: "Anthropic",
    description: "긴 사고 과정을 통해 난해한 논리 퍼즐이나 수학적 검증을 수행하는 모델",
    tags: ["논리 문제", "수학", "검증"],
    color: "#D4A27F",
    iconName: "Calculator",
  },
  {
    id: "claude-haiku-3-5",
    name: "Claude Haiku 3.5",
    provider: "Anthropic",
    description: "뉴스 요약 및 단순 분류 작업에 최고의 가성비를 보여주는 실무형 모델",
    tags: ["요약", "분류", "저렴함"],
    color: "#D4A27F",
    iconName: "Newspaper",
  },
  {
    id: "claude-haiku-3",
    name: "Claude Haiku 3",
    provider: "Anthropic",
    description: "API 비용 최소화 및 테스트 환경에 적합한 초기 경량 모델",
    tags: ["저렴함", "테스트용", "가벼움"],
    color: "#D4A27F",
    iconName: "Feather",
  },
];

// Perplexity 모델 (4종)
export const perplexityModels: AIModel[] = [
  {
    id: "sonar-deep-research",
    name: "Sonar Deep Research",
    provider: "Perplexity",
    description: "수백 개 소스를 자율 탐색 및 종합하여 심층 보고서를 작성하는 리서치 에이전트",
    tags: ["깊은 조사", "자동 검색", "보고서"],
    color: "#20808D",
    iconName: "Search",
  },
  {
    id: "sonar-reasoning-pro",
    name: "Sonar Reasoning Pro",
    provider: "Perplexity",
    description: "검색된 정보의 인과관계를 분석하고 검증하는 고지능 논리 검색 모델",
    tags: ["논리 분석", "사실 확인", "검증"],
    color: "#20808D",
    iconName: "GitBranch",
  },
  {
    id: "sonar-pro",
    name: "Sonar Pro",
    provider: "Perplexity",
    description: "방대한 검색 소스와 긴 문맥을 처리하여 포괄적인 답변을 제공하는 전문가용 검색 모델",
    tags: ["전문가용", "종합 검색", "긴 문서"],
    color: "#20808D",
    iconName: "Globe",
  },
  {
    id: "sonar",
    name: "Sonar",
    provider: "Perplexity",
    description: "웹 실시간 정보를 딜레이 없이 찾아주는 빠르고 가벼운 일반 검색용 모델",
    tags: ["실시간", "빠른 검색", "가벼움"],
    color: "#20808D",
    iconName: "Zap",
  },
];

// xAI 모델 (6종)
export const xaiModels: AIModel[] = [
  {
    id: "grok-4-1-fast",
    name: "Grok 4.1 Fast",
    provider: "xAI",
    description: "속도도 빠르고 가격도 저렴, 성능도 좋은 일론 머스크 xAI의 최상위 모델",
    tags: ["빠름", "저렴함", "최고 성능"],
    color: "#000000",
    iconName: "Rocket",
  },
  {
    id: "grok-4-fast",
    name: "Grok 4 Fast",
    provider: "xAI",
    description: "4.1 이전 버전으로, 빠른 텍스트 요약 및 대화형 서비스에 적합한 고효율 모델",
    tags: ["빠름", "요약", "대화"],
    color: "#000000",
    iconName: "Zap",
  },
  {
    id: "grok-code-fast",
    name: "Grok Code Fast",
    provider: "xAI",
    description: "복잡한 추론보다 코드 생성 및 로직 이해에 자원을 집중한 개발 전용 모델",
    tags: ["코딩 전용", "개발자용", "프로그래밍"],
    color: "#000000",
    iconName: "Code",
  },
  {
    id: "grok-4",
    name: "Grok 4",
    provider: "xAI",
    description: "깊이 있는 답변과 위트 있는 표현이 가능한 xAI의 4세대 표준 플래그십",
    tags: ["대표 모델", "재치있음", "깊은 답변"],
    color: "#000000",
    iconName: "Sparkles",
  },
  {
    id: "grok-3",
    name: "Grok 3",
    provider: "xAI",
    description: "안정적인 챗봇 기능과 기본 정보 검색을 지원하는 무난한 이전 세대 모델",
    tags: ["안정적", "대화", "검색"],
    color: "#000000",
    iconName: "MessageSquare",
  },
  {
    id: "grok-3-mini",
    name: "Grok 3 Mini",
    provider: "xAI",
    description: "개인 서버 구동 및 간단한 데이터 라벨링 처리에 적합한 초경량 모델",
    tags: ["소형", "가벼움", "단순 작업"],
    color: "#000000",
    iconName: "Minimize2",
  },
];

// Upstage 모델 (2종)
export const upstageModels: AIModel[] = [
  {
    id: "solar-pro-3",
    name: "Solar Pro 3",
    provider: "Upstage",
    description: "한국어와 영어 모두 뛰어난 Upstage 최신 모델. 긴 문서도 한 번에 읽고 정확하게 답변합니다.",
    tags: ["한국어", "영어", "긴 문서"],
    color: "#5046E5",
    iconName: "Sparkles",
  },
  {
    id: "solar-pro-2",
    name: "Solar Pro 2",
    provider: "Upstage",
    description: "한국어 처리 능력이 뛰어난 Upstage 소버린 AI 모델",
    tags: ["한국어", "국산 AI", "문서"],
    color: "#5046E5",
    iconName: "Sun",
  },
];

// LG 모델 (3종)
export const lgModels: AIModel[] = [
  {
    id: "k-exaone-236b",
    name: "K-EXAONE 236B",
    provider: "LG",
    description: "LG가 만든 한국 대표 AI 모델. 글로벌 성능 Top 10에 진입한 국산 최강 모델입니다.",
    tags: ["한국 대표", "세계 10위권", "LG"],
    color: "#A50034",
    iconName: "Trophy",
  },
  {
    id: "lg-exaone-4-0-1",
    name: "LG EXAONE 4.0.1",
    provider: "LG",
    description: "전문 분야(화학/바이오 등) 데이터 학습 및 추론 정밀도가 향상된 전문가용 모델",
    tags: ["전문가용", "화학", "바이오"],
    color: "#A50034",
    iconName: "FlaskConical",
  },
  {
    id: "lg-exaone-4-0",
    name: "LG EXAONE 4.0",
    provider: "LG",
    description: "온디바이스와 서버 환경을 모두 지원하며 멀티모달 기능을 갖춘 산업용 모델",
    tags: ["기기 내 실행", "글+이미지", "산업용"],
    color: "#A50034",
    iconName: "Factory",
  },
];

// 전체 모델 목록
export const aiModels: AIModel[] = [
  ...openaiModels,
  ...googleModels,
  ...claudeModels,
  ...perplexityModels,
  ...xaiModels,
  ...upstageModels,
  ...lgModels,
];

// Provider 목록
export const providers = [
  "웍스 대표 모델",
  "All",
  "OpenAI",
  "Google",
  "Anthropic",
  "Perplexity",
  "xAI",
  "Upstage",
  "LG",
];

// Provider별 색상 (브랜드 메인 컬러)
export const providerColors: Record<string, string> = {
  "웍스 대표 모델": "#5D5FEF",
  All: "#6B7280",
  OpenAI: "#000000",
  Google: "#4285F4",
  Anthropic: "#D4A27F",
  Perplexity: "#20808D",
  xAI: "#000000",
  Upstage: "#5046E5",
  LG: "#A50034",
};

// Provider별 로고 파일명 (public/logos/ 폴더에 저장)
export const providerLogos: Record<string, string> = {
  OpenAI: "openai.svg",
  Google: "gemini.png",
  Anthropic: "anthropic.png",
  Perplexity: "perplexity.png",
  xAI: "xai.png",
  Upstage: "upstage.svg",
  LG: "lg.png",
};
