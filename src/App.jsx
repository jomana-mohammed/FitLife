import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Program from './components/programs/Program.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle="Our Program" title="What we offer ?"/>
        <Program/>
        <About/>
        <Title subTitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subTitle="TESTIMONIALS" title="What Student Says"/>
        <Testimonials/>
        <Title subTitle="Contact Us" title="Get in Touch"/>
        <Contact/>
    </div>
    </div>
  )
}

export default App
