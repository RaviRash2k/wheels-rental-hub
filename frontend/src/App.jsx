import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Vehicles from './pages/Vehicles'
import MyBookings from './pages/MyBookings'
import AdminDashBoard from './pages/admin/AdminDashBoard'
import Footer from './components/Footer'
import VehicleInfo from './pages/VehicleInfo'
import { authStore } from '../store/authStore'

const App = () => {

  const {token, user} = authStore();

  return (
    <>
        {user?.role === "admin" ?
          <>
            <Routes>
              <Route path='/' element={<AdminDashBoard/>}/>
            </Routes>
          </>
          :
          <>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/mybookings" element={<MyBookings />} />
              <Route path="/vehicle/:id" element={<VehicleInfo />} />
            </Routes>

            <Footer/>
          </>
        }

        
    </>
  )
}

export default App
