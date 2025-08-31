"use client"

import { useEffect, useRef, useState } from 'react'

export default function YouTubeChannel() {
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
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-primary-50 via-white to-smoke">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">유튜브 채널</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-2 mb-6">
              더 깊은 이야기가 궁금하신가요?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              유튜브 채널 <span className="font-bold text-primary-600">'산부인과 지정소'</span>에서 
              의사 친구를 만나보세요. 폐경기 건강에 대한 의학 정보와 
              실제 사례, 그리고 따뜻한 위로를 전해드립니다.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">매주 새로운 의학 정보 업데이트</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">실제 환자 사례와 Q&A</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">호르몬 치료와 생활 관리 팁</span>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@YourGoToOBGYNFriend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>산부인과 지정소 구독하기</span>
            </a>

            <p className="text-sm text-gray-500 mt-4">
              @YourGoToOBGYNFriend
            </p>
          </div>

          {/* YouTube Preview */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-200 to-primary-200 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* YouTube Player Mockup */}
                <div className="aspect-video bg-gray-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mb-4 mx-auto hover:bg-red-700 transition-colors cursor-pointer">
                        <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                      </div>
                      <p className="text-white text-lg font-medium">산부인과 지정소</p>
                      <p className="text-gray-400 text-sm mt-1">의사가 직접 알려주는 폐경기 건강</p>
                    </div>
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-6">
                  <h3 className="font-bold text-charcoal mb-2">
                    [폐경기 특집] 호르몬 치료, 꼭 받아야 할까요?
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>조회수 15.2만회</span>
                    <span>•</span>
                    <span>2주 전</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      이
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">산부인과 지정소</p>
                      <p className="text-xs text-gray-500">구독자 8.5만명</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Channel Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-500">150+</p>
                <p className="text-sm text-gray-600">영상</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-500">8.5만</p>
                <p className="text-sm text-gray-600">구독자</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-500">500만+</p>
                <p className="text-sm text-gray-600">총 조회수</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}