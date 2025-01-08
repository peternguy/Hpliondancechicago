import React from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <main>
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <Navbar />

        <Hero />

        <About />
      </main>

    </main>
  )
}

export default App