import React from 'react'
import HeroSlider from './components/hero-slider'
import ImageSlider from './components/ImageSlider'
import FeaturesSection from './components/features-section'
import AboutSection from './components/about-section'
import BestSellingSection from './components/best-selling-section'

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <div className="container mx-auto px-4">
      <ImageSlider />
      {/* Other content */}
    </div>
      <FeaturesSection />
      <AboutSection />
      <BestSellingSection />
    </div>
  )
}