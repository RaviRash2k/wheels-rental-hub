import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Vehicles from './pages/Vehicles'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/mybookings" element={<MyBookings />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
