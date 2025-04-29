import React from 'react'
// import './App.scss'

import Navbar from '../../components/Navbar/Navbar'
import  Hero from '../../components/Hero/Hero'
import Feature from '../../components/Feature/Feature'
import Accordian1 from '../../components/Accordian1/Accordian1'
import Accordian2 from '../../components/Accordian2/Accordian2'
import Slider from '../../components/Slider/Slider'
import Que from '../../components/Que/Que'
import Services from '../../components/Services/Services'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Feature/>
      <Accordian1/>
      <Accordian2/>
      <Slider/>
      <Que/>
      <Services/> 
      <Footer/>
    </div>
  )
}

export default Home




