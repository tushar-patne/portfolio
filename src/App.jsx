import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Connect from './components/Connect'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Work />
      <Connect />
    </div>
  )
}

export default App