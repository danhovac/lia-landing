"use client"

import { useEffect, useRef, useState } from 'react'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "CBT 기반 전문 상담",
    description: "인지행동치료 기반의 체계적인 대화로 스스로 마음을 돌볼 힘을 키워드립니다.",
    color: "from-primary-400 to-primary-600"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 AI 상담",
    description: "언제 어디서나 당신의 이야기를 들어드릴 준비가 되어 있습니다.",
    color: "from-trust-light to-trust"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "안전한 가이드",
    description: "의학적 도움이 필요한 순간, 신뢰할 수 있는 전문가를 연결해 드립니다.",
    color: "from-warmth to-warmth-dark"
  }
]

export default function LiaDifferentiation() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-smoke to-white">
      <div className="container-width">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-gray-500 font-medium text-xs uppercase tracking-widest">WHAT WE DO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-2 mb-4">
            당신을 위한 AI, <span className="text-gradient">LIA가 하는 일</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            LIA(Life-stage Intelligence Assistant)는 폐경기 여성의 정신건강을 위한 대화형 AI입니다.<br />
            당신의 마음에 귀 기울이고, 스스로를 돌볼 힘을 키울 수 있도록 돕습니다.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Pillars */}
        <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">
            가장 믿고 싶었던 세 가지 전문성, 하나로
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
                </svg>
              </div>
              <h4 className="font-bold text-charcoal mb-2">산부인과 전문의의 임상 경험</h4>
              <p className="text-sm text-gray-600">10년 이상 여성의 몸을 돌봐온 산부인과 전문의로서, 여성 호르몬과 생애주기 변화를 가장 깊이 이해합니다.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-trust bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-trust" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-bold text-charcoal mb-2">임상심리 전문가의 깊이</h4>
              <p className="text-sm text-gray-600">단순한 공감을 넘어, 과학적으로 검증된 심리치료 기법에 기반한 임상심리사로서의 전문성을 갖추었습니다.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-warmth bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-warmth-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-bold text-charcoal mb-2">최전선의 의료 AI 기술</h4>
              <p className="text-sm text-gray-600">현재 삼성메디슨의 파트너로써 의료 AI 분야의 최전선에서 가장 안전하고 효과적인 기술을 개발하고 있습니다.</p>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              ※ 본 서비스는 의료행위가 아니며, 의학적 진단이나 치료를 대체할 수 없습니다. 
              응급상황이나 심각한 증상이 있을 경우 반드시 의료기관을 방문하시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}