import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "웍스AI 모델별 특징 안내",
  description: "GPT, Claude, Gemini, Solar 등 49개 AI 모델의 특징을 한눈에 비교하세요. 웍스AI에서 제공하는 LLM 모델별 상세 안내입니다.",
  keywords: ["AI 모델", "LLM", "GPT", "Claude", "Gemini", "웍스AI", "인공지능", "챗봇"],
  authors: [{ name: "웍스AI" }],
  creator: "웍스AI",
  publisher: "웍스AI",

  // Open Graph (카카오톡, 페이스북 등)
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://llm.wrks.ai",
    siteName: "웍스AI",
    title: "웍스AI 모델별 특징 안내",
    description: "GPT, Claude, Gemini, Solar 등 49개 AI 모델의 특징을 한눈에 비교하세요.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "웍스AI 모델별 특징 안내",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "웍스AI 모델별 특징 안내",
    description: "GPT, Claude, Gemini, Solar 등 49개 AI 모델의 특징을 한눈에 비교하세요.",
    images: ["/og-image.png"],
  },

  // 기타
  robots: {
    index: true,
    follow: true,
  },

  // 아이콘
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 카카오톡 전용 메타태그 */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={`${notoSansKR.variable} font-sans antialiased bg-white text-[#272525]`}>
        {children}
      </body>
    </html>
  );
}
