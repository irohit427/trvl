import '../App.css';
import HeroSection from '../components/HeroSection/HeroSection'
import React from 'react'
import CardsSection from '../components/CardsSection/CardsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CardsSection />
    </div>
  )
}
