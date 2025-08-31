export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Medical Disclaimer Banner */}
      <div className="bg-gray-800 py-4">
        <div className="container-width px-6">
          <p className="text-sm text-gray-300 text-center">
            ⚕️ 본 서비스는 의료행위가 아니며, 의학적 진단이나 치료를 대체할 수 없습니다. 
            응급상황이나 심각한 증상이 있을 경우 반드시 의료기관을 방문하시기 바랍니다.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-width px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-400">LIA</span> by MedicalTica
            </h3>
            <p className="text-gray-400 mb-4">
              산부인과 전문의가 만든 폐경기 여성을 위한 AI 헬스케어 플랫폼
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.youtube.com/@YourGoToOBGYNFriend" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@medicaltica.com?subject=LIA%20서비스%20문의&body=안녕하세요,%0D%0A%0D%0ALIA%20서비스에%20대해%20문의하고%20싶습니다.%0D%0A%0D%0A[문의%20내용을%20작성해주세요]%0D%0A%0D%0A감사합니다."
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                title="이메일 문의하기"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#lia" className="text-gray-400 hover:text-primary-400 transition-colors">
                  LIA 소개
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-primary-400 transition-colors">
                  이용 후기
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">법적 고지</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="/medical-disclaimer" className="text-gray-400 hover:text-primary-400 transition-colors">
                  의료 면책사항
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="md:flex justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 MedicalTica. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>이메일: contact@medicaltica.com</span>
              <span>|</span>
              <span>사업자등록번호: 113-88-03524</span>
              <span>|</span>
              <span>대표: 이예지</span>
            </div>
          </div>
        </div>

        {/* Additional Medical Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>중요 고지:</strong> LIA는 의료 정보 제공 및 심리적 지원을 목적으로 하는 서비스입니다. 
            본 서비스는 의료행위가 아니며, 전문 의료진의 진단, 치료, 처방을 대체할 수 없습니다. 
            심각한 신체적, 정신적 증상이 있을 경우 반드시 의료기관을 방문하여 전문의의 진료를 받으시기 바랍니다. 
            응급상황 발생 시 즉시 119에 연락하거나 가까운 응급실을 방문하십시오.
          </p>
        </div>
      </div>
    </footer>
  )
}