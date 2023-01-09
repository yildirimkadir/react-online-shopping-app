import React from 'react'
import Announcements from '../components/Announcements/Announcements'
import Navbar from '../components/navbar/Navbar'
import Slider from '../components/Slider/Slider'

const Home = () => {
  return (
    <div>
        <Announcements />
        <Navbar />
        <Slider />
    </div>
  )
}

export default Home