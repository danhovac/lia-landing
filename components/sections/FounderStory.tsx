"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function FounderStory() {
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image and Profile */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-trust-light rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex flex-col items-center text-center">
                  {/* Profile Image Placeholder */}
                  <div className="w-48 h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mb-6 flex items-center justify-center">
                    <div className="text-primary-600 text-6xl font-bold">LY</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-charcoal mb-2">이예지</h3>
                  <p className="text-primary-600 font-semibold mb-4">Founder & CEO</p>
                  
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2 justify-center">
                      <svg className="w-5 h-5 text-trust" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                      <span>산부인과 전문의</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <svg className="w-5 h-5 text-trust" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                      </svg>
                      <span>임상심리사</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <svg className="w-5 h-5 text-trust" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                      <span>의료 AI 엔지니어</span>
                    </div>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-trust-light bg-opacity-10 rounded-full">
                    <span className="text-trust font-medium text-sm">삼성메디슨 파트너</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="mb-6">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-widest">FOUNDER STORY</span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-2">
                진료실에서 시작된<br />
                <span className="text-gradient">따뜻한 혁신</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                <span className="text-charcoal font-semibold">"산부인과 전문의이자 임상심리사로서,</span> 
                저는 진료실에서 여성의 몸과 마음이 얼마나 긴밀히 연결되어 있는지 매일 목격했습니다."
              </p>
              
              <p>
                10년 이상 폐경기 여성들을 진료하면서, 5분 진료로는 그들의 깊은 불안과 외로움을 
                다 들어드릴 수 없다는 한계를 늘 느꼈습니다. 몸의 증상을 치료하면서도 마음의 
                불안까지 돌봐드리고 싶었지만, 진료실 밖의 일상에서 갑자기 찾아오는 막막함까지 
                함께하기엔 현실적 한계가 있었죠.
              </p>

              <p>
                이 간극을 메우고, 더 많은 분들께 언제나 전문적인 도움을 드리기 위해 저는 
                의료 AI 기술에 뛰어들었습니다. <span className="text-charcoal font-semibold">
                현재 삼성메디슨과 협력하며 최신 기술을 연구하고 있으며,</span> LIA는 저의 
                모든 임상 경험과 기술적 확신을 담아 시작한 약속입니다.
              </p>

              <blockquote className="border-l-4 border-primary-500 pl-6 py-4 my-6 bg-primary-50 rounded-r-lg">
                <p className="text-lg text-charcoal font-medium italic">
                  "폐경은 끝이 아닌 새로운 시작입니다.<br />
                  당신의 새로운 계절을 함께 걸어가겠습니다."
                </p>
              </blockquote>

              <div className="pt-6">
                <a 
                  href="https://www.youtube.com/@YourGoToOBGYNFriend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium transition-all hover:bg-gray-900"
                >
                  더 알아보기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}