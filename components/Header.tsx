"use client"

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // Header height compensation
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container-width px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <span className={`text-2xl font-bold ${scrolled ? 'text-charcoal' : 'text-white'}`}>
                LIA
              </span>
            </a>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className={`text-base font-semibold px-3 py-2 rounded-lg transition-all ${
                  scrolled ? 'text-gray-700 hover:text-primary-500 hover:bg-primary-50' : 'text-white hover:text-white hover:bg-white/10'
                }`}
              >
                소개
              </a>
              <a 
                href="#features" 
                onClick={(e) => scrollToSection(e, 'features')}
                className={`text-base font-semibold px-3 py-2 rounded-lg transition-all ${
                  scrolled ? 'text-gray-700 hover:text-primary-500 hover:bg-primary-50' : 'text-white hover:text-white hover:bg-white/10'
                }`}
              >
                기능
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => scrollToSection(e, 'testimonials')}
                className={`text-base font-semibold px-3 py-2 rounded-lg transition-all ${
                  scrolled ? 'text-gray-700 hover:text-primary-500 hover:bg-primary-50' : 'text-white hover:text-white hover:bg-white/10'
                }`}
              >
                후기
              </a>
              <a 
                href="#youtube" 
                onClick={(e) => scrollToSection(e, 'youtube')}
                className={`text-base font-semibold px-3 py-2 rounded-lg transition-all ${
                  scrolled ? 'text-gray-700 hover:text-primary-500 hover:bg-primary-50' : 'text-white hover:text-white hover:bg-white/10'
                }`}
              >
                유튜브
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button className={`hidden sm:block px-5 py-2.5 text-base font-medium transition-colors ${
              scrolled 
                ? 'text-gray-600 hover:text-primary-500' 
                : 'text-white hover:text-white'
            }`}>
              로그인
            </button>
            <a 
              href="#early-access"
              onClick={(e) => scrollToSection(e, 'early-access')}
              className={`px-7 py-2.5 text-base font-semibold rounded-full transition-all inline-block ${
                scrolled
                  ? 'bg-primary-500 text-white hover:bg-primary-600'
                  : 'bg-white text-charcoal hover:bg-gray-100'
              } transform hover:scale-105 shadow-lg`}
            >
              얼리액세스 신청
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}