import AppLayout from './components/layout/AppLayout'
import WhatsAppFloatingButton from './components/layout/WhatsAppFloatingButton'
import HeroSection from './sections/HeroSection'
import TrustBar from './sections/TrustBar'
import FeaturedCookiesSection from './sections/FeaturedCookiesSection'
import DesireQuoteSection from './sections/DesireQuoteSection'
import MenuSection from './sections/MenuSection'
import BrandStorySection from './sections/BrandStorySection'
import TestimonialsSection from './sections/TestimonialsSection'
import HowToOrderSection from './sections/HowToOrderSection'
import FinalCTASection from './sections/FinalCTASection'

export default function App() {
  return (
    <AppLayout>
      <HeroSection />
      <TrustBar />
      <FeaturedCookiesSection />
      <DesireQuoteSection />
      <MenuSection />
      <BrandStorySection />
      <TestimonialsSection />
      <HowToOrderSection />
      <FinalCTASection />
      <WhatsAppFloatingButton />
    </AppLayout>
  )
}
