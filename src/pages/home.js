import React from 'react'
import Slider from '../components/Slider/Slider'
import Features from '../components/Features/Features'
import ProductCarousel from '../components/ProductsCarousel/ProductCarousel'

const Home = () => {
  return (
    <div>
      <Slider />
      <Features />
      <ProductCarousel />

    </div>
  )
}

export default Home