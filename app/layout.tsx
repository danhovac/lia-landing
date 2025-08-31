import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "LIA - 의사가 만든 나의 첫 AI 마음친구 | 폐경기 AI 헬스케어",
  description: "산부인과 전문의가 만든 폐경기 여성을 위한 AI 헬스케어 플랫폼. 24시간 감정케어와 개인맞춤 HRT 추천으로 당신의 새로운 계절을 함께합니다.",
  keywords: "폐경기, 갱년기, AI 헬스케어, 호르몬 치료, HRT, 여성 건강, 정신건강, LIA, 리아, MedicalTica",
  authors: [{ name: "이예지", url: "https://youtube.com/@YourGoToOBGYNFriend" }],
  creator: "MedicalTica",
  publisher: "MedicalTica",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "LIA - 의사가 만든 나의 첫 AI 마음친구",
    description: "혼자가 아니에요, 리아가 과학적 근거와 공감으로 지켜드립니다. 산부인과 전문의의 임상 경험과 AI 기술로 당신의 일상을 더 단단하게.",
    url: "https://lia.medicaltica.com",
    siteName: "LIA by MedicalTica",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LIA - 폐경기 여성을 위한 AI 헬스케어",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LIA - 의사가 만든 나의 첫 AI 마음친구",
    description: "산부인과 전문의가 만든 폐경기 AI 헬스케어. 24시간 감정케어와 개인맞춤 HRT 추천",
    images: ["/twitter-image.png"],
    creator: "@YourGoToOBGYNFriend",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
