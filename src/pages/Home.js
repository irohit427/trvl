import '../App.css';
import HeroSection from '../components/HeroSection/HeroSection'
import React from 'react'
import CardsSection from '../components/CardsSection/CardsSection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CardsSection />
      <Footer />
    </div>
  )
}
