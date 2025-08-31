"use client"

import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern gradient background inspired by Vercel */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-gray-900 to-charcoal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-trust/20 via-transparent to-transparent"></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-soft"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-trust rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-soft animation-delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

      <div className="container-width section-padding relative z-10 pt-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 text-xs font-medium mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400/70 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-400"></span>
            </span>
            산부인과 전문의가 만든 AI 헬스케어
          </div>

          {/* Main headline - Vercel style with warm colors */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} tracking-tight`}>
            <span className="block text-white">혼자가 아니에요</span>
            <span className="block bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
              리아가 함께합니다
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-base md:text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            폐경기 여성을 위한 AI 정신건강 플랫폼.<br/>
            의학적 전문성과 공감으로 당신의 새로운 시작을 돕습니다.
          </p>

          {/* CTA Buttons - Modern style */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="group relative px-6 py-3 bg-white text-black rounded-lg text-sm font-medium transition-all hover:bg-white/90 transform hover:scale-105">
              <span className="relative z-10">LIA 먼저 만나보기</span>
            </button>
            <button className="px-6 py-3 bg-transparent backdrop-blur-sm border border-white/20 text-white rounded-lg text-sm font-medium transition-all hover:bg-white/10">
              자세히 알아보기
            </button>
          </div>

          {/* Trust indicators - Modern cards */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
              <div className="text-primary-400 text-2xl font-bold mb-1">10+</div>
              <div className="text-white/80 text-xs font-medium">년 임상 경험</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
              <div className="text-primary-400 text-2xl font-bold mb-1">24/7</div>
              <div className="text-white/80 text-xs font-medium">AI 상담 가능</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
              <div className="text-primary-400 text-2xl font-bold mb-1">100%</div>
              <div className="text-white/80 text-xs font-medium">의료정보 보호</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400">Scroll to explore</span>
          <svg className="w-5 h-5 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}