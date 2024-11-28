import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Perfil from './Components/Perfil/Perfil'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <Perfil />
      <Projects />
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App