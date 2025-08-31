"use client"

import { useEffect } from 'react'

export default function FinalCTA() {
  useEffect(() => {
    // Tally dynamic height script
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="early-access" className="section-padding bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-width relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              가장 먼저 LIA의 손을 잡아주세요
            </h2>
            <p className="text-lg text-primary-100 mb-6">
              LIA의 얼리 액세스 소식과 여성 건강 뉴스레터를 가장 먼저 보내드릴게요.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-white">
              <div className="text-2xl mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">무료 eBook</h3>
              <p className="text-sm text-primary-100">폐경기 완벽 가이드북 증정</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-white">
              <div className="text-2xl mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">평생 할인</h3>
              <p className="text-sm text-primary-100">얼리버드 50% 할인 혜택</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-white">
              <div className="text-2xl mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">우선 액세스</h3>
              <p className="text-sm text-primary-100">베타 테스터 우선 선정</p>
            </div>
          </div>

          {/* Tally Form Container with Custom Styling */}
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-[20px] p-8 shadow-[0_10px_40px_rgba(246,193,193,0.3)]">
              <iframe 
                data-tally-src="https://tally.so/embed/n98p8Y?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="LIA 얼리액세스 신청"
                className="min-h-[600px]"
                style={{ background: 'transparent', border: 'none' }}
              ></iframe>
            </div>
            
            {/* Privacy Notice */}
            <div className="text-center mt-6">
              <p className="text-xs text-white/80">
                * 수집된 정보는 얼리액세스 안내 목적으로만 사용되며, 제3자에게 제공되지 않습니다.
              </p>
              <p className="text-xs text-white/60 mt-2">
                폼이 보이지 않는 경우, <a href="https://tally.so/r/n98p8Y" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-primary-100">여기를 클릭</a>하여 새 창에서 신청해주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}