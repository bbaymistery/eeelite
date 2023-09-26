import React from 'react'
import Slider from '../components/Slider/Slider'
import Features from '../components/Features/Features'
import ProductCarousel from '../components/ProductsCarousel/ProductCarousel'
import OurPolicy from '../components/OurPolicy/index'
const Home = () => {
  return (
    <div>
      <Slider />
      <Features />
      <ProductCarousel />
      <OurPolicy bggray={true} />
    </div>
  )
}

export default Home