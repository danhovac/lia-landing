"use client"

import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote: "진료실에서 5분 만에 끝나던 상담이 이제는 24시간 가능해졌어요. LIA 덕분에 새벽에 찾아오는 불안감도 혼자 견디지 않아도 됩니다.",
    name: "박미라",
    age: "58세",
    location: "서울",
    emoji: "👩"
  },
  {
    quote: "폐경은 병이 아닌데도 아픈 것처럼 느껴졌어요. LIA와 대화하면서 제 몸의 변화를 자연스럽게 받아들이게 되었습니다.",
    name: "김정숙",
    age: "52세",
    location: "부산",
    emoji: "👩‍🦰"
  },
  {
    quote: "남편에게도 말 못했던 고민들을 LIA에게는 편하게 털어놓을 수 있어요. 의학적 조언까지 받을 수 있어서 정말 든든합니다.",
    name: "이영희",
    age: "55세",
    location: "대전",
    emoji: "👩‍🦳"
  }
]

const expertQuotes = [
  {
    quote: "폐경기 정신건강 관리는 더 이상 미룰 수 없는 과제입니다. MedicalTica의 접근은 매우 시의적절하며 임상 현장에서도 큰 기대를 하고 있습니다.",
    name: "김정신 교수",
    role: "정신건강의학과",
    institution: "서울대학교병원"
  },
  {
    quote: "여성의 생애주기 변화를 이해하는 것이 중요합니다. AI 기술로 접근하는 것은 혁신적이고 필요한 시도입니다.",
    name: "이산부 교수",
    role: "산부인과",
    institution: "연세대학교 세브란스병원"
  }
]

export default function Testimonials() {
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
    <section ref={sectionRef} className="section-padding bg-smoke">
      <div className="container-width">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">진료실 이야기</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-2 mb-4">
            <span className="text-gradient">LIA를 기다리는</span> 목소리들
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            실제 환자분들과 의료진들이 전하는 진솔한 이야기
          </p>
        </div>

        {/* Patient Testimonials */}
        <div className="mb-16">
          <h3 className={`text-xl font-semibold text-charcoal mb-8 text-center transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            환자분들의 이야기
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${(index + 1) * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="text-4xl mb-4">{testimonial.emoji}</div>
                  <blockquote className="flex-1 text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.age}, {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Endorsements */}
        <div>
          <h3 className={`text-xl font-semibold text-charcoal mb-8 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            전문가들의 응원
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {expertQuotes.map((expert, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${(index + 3) * 100} ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (index === 0 ? '-translate-x-8' : 'translate-x-8')
                }`}
              >
                <div className="bg-gradient-to-br from-white to-primary-50 rounded-2xl p-8 shadow-lg border border-primary-100">
                  <svg className="w-12 h-12 text-primary-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    {expert.quote}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-trust bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-trust" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">{expert.name}</p>
                      <p className="text-sm text-gray-600">{expert.role}</p>
                      <p className="text-xs text-gray-500">{expert.institution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className={`mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary-500 mb-2">900만+</p>
              <p className="text-gray-600">한국 폐경기 여성</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-500 mb-2">75%</p>
              <p className="text-gray-600">적절한 치료 미수혜</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-500 mb-2">24/7</p>
              <p className="text-gray-600">LIA의 상담 가능 시간</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}