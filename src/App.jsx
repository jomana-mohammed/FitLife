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
import Footer from './components/Footer/Footer.jsx'
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx'

const App = () => {

  const [playState , setPlayState] = React.useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle="Our Programs" title="Train Smarter, Get Stronger" />
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subTitle="Workout Gallery" title="Inside Our Fitness Studio" />
        <Campus/>
        <Title subTitle="Member Stories" title="What Our Athletes Say" />
        <Testimonials/>
        <Title subTitle="Contact Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
