import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import FounderStory from '@/components/sections/FounderStory'
import LiaDifferentiation from '@/components/sections/LiaDifferentiation'
import ConversationPreview from '@/components/sections/ConversationPreview'
import Testimonials from '@/components/sections/Testimonials'
import YouTubeChannel from '@/components/sections/YouTubeChannel'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Modern Navigation Header */}
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section - 메인 메시지 */}
        <div id="home">
          <Hero />
        </div>
        
        {/* Founder Story - 창업자 스토리 */}
        <div id="about">
          <FounderStory />
        </div>
        
        {/* LIA Differentiation - LIA 차별점 및 3가지 전문성 */}
        <div id="features">
          <LiaDifferentiation />
        </div>
        
        {/* Conversation Preview - 대화 미리보기 */}
        <div id="preview">
          <ConversationPreview />
        </div>
        
        {/* Testimonials - 환자 및 전문가 증언 */}
        <div id="testimonials">
          <Testimonials />
        </div>
        
        {/* YouTube Channel - 유튜브 채널 연결 */}
        <div id="youtube">
          <YouTubeChannel />
        </div>
        
        {/* Final CTA - 얼리액세스 신청 */}
        <div id="early-access">
          <FinalCTA />
        </div>
        
        {/* Footer - 푸터 및 의료 면책사항 */}
        <Footer />
      </main>
    </>
  );
}
