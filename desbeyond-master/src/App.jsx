import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Navbar from "./Components/Navbar"
import './App.css'

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/services' element={ <Services />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/blog' element={ <Blog />} />
      </Routes>
    </div>
  )
}

export default App
