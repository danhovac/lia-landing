"use client"

import { useEffect, useRef, useState } from 'react'

const conversations = [
  {
    user: "요즘 갑자기 열이 오르고 식은땀이 나요. 이것도 폐경 증상인가요?",
    lia: "네, 말씀하신 증상은 폐경기의 대표적인 혈관운동 증상인 '열성 홍조'로 보입니다. 😊 갑작스런 열감과 식은땀은 많은 분들이 경험하시는 증상이에요. 일상생활에 불편함이 크시다면 호르몬 치료를 고려해보실 수 있고, 생활습관 개선으로도 증상 완화가 가능합니다. 구체적인 관리 방법을 알려드릴까요?",
    time: "오후 3:24"
  },
  {
    user: "밤에 잠을 못 자겠어요. 불안하고 가슴이 두근거려요.",
    lia: "밤에 잠들기 어려우시고 불안감까지 느끼신다니 정말 힘드시겠어요. 💙 폐경기에는 에스트로겐 감소로 수면 패턴이 변하고 불안감이 증가할 수 있습니다. 지금 바로 시도해보실 수 있는 4-7-8 호흡법을 알려드릴게요. 4초간 들이마시고, 7초간 멈추고, 8초간 내쉬는 방법이에요. 함께 해보실까요?",
    time: "오후 11:42"
  }
]

export default function ConversationPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeConv, setActiveConv] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConv((prev) => (prev + 1) % conversations.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container-width">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">LIA 미리보기</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-2 mb-4">
            이렇게 <span className="text-gradient">대화</span>해요
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LIA는 당신의 이야기를 듣고, 공감하며, 전문적인 조언을 제공합니다
          </p>
        </div>

        {/* Phone Mockup */}
        <div className={`max-w-md mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative">
            {/* Phone Frame */}
            <div className="bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-primary-500 px-6 py-2">
                  <div className="flex items-center justify-between text-white text-xs">
                    <span>9:41</span>
                    <span className="font-semibold">LIA</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1v0a1 1 0 110 2v0a1 1 0 01-1-1z" clipRule="evenodd"/>
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Chat Interface */}
                <div className="h-[500px] bg-gray-50 p-4 space-y-4 overflow-y-auto">
                  {/* LIA Welcome */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                      L
                    </div>
                    <div className="flex-1">
                      <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm">
                        <p className="text-sm text-gray-700">
                          안녕하세요! 저는 당신의 건강 파트너 LIA예요. 💝 
                          오늘 몸과 마음은 어떠신가요?
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 mt-1 block">오후 2:30</span>
                    </div>
                  </div>

                  {/* Active Conversation */}
                  <div className="space-y-4">
                    {/* User Message */}
                    <div className="flex items-start gap-3 justify-end">
                      <div className="flex-1 text-right">
                        <div className="inline-block bg-primary-500 text-white p-4 rounded-2xl rounded-tr-none shadow-sm">
                          <p className="text-sm">{conversations[activeConv].user}</p>
                        </div>
                        <span className="text-xs text-gray-400 mt-1 block">{conversations[activeConv].time}</span>
                      </div>
                    </div>

                    {/* LIA Response */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                        L
                      </div>
                      <div className="flex-1">
                        <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm">
                          <p className="text-sm text-gray-700 whitespace-pre-line">
                            {conversations[activeConv].lia}
                          </p>
                        </div>
                        <span className="text-xs text-gray-400 mt-1 block">방금</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="bg-white border-t border-gray-200 p-4">
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="메시지를 입력하세요..." 
                      className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      disabled
                    />
                    <button className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -left-10 w-40 h-40 bg-primary-200 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute -z-10 bottom-10 -right-10 w-40 h-40 bg-trust-light rounded-full filter blur-3xl opacity-30"></div>
          </div>

          {/* Conversation Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {conversations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveConv(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeConv ? 'w-8 bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}