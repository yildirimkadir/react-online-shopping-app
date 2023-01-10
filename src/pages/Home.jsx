import React from 'react'
import Announcements from '../components/Announcements/Announcements'
import Categories from '../components/Categories/Categories'
import Navbar from '../components/navbar/Navbar'
import Products from '../components/Products/Products'
import Slider from '../components/Slider/Slider'

const Home = () => {
  return (
    <div>
        <Announcements />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
    </div>
  )
}

export default Home