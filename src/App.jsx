import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Program from './components/programs/Program.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Program/>
      </div>
    </div>
  )
}

export default App
