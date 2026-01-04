import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Vehicles from './pages/Vehicles'
import MyBookings from './pages/MyBookings'
import AdminDashBoard from './pages/admin/AdminDashBoard'
import AddVehicle from './pages/admin/AddVehicle'
import ManageVehicles from './pages/admin/ManageVehicles'
import ManageBookings from './pages/admin/ManageBookings'
import Footer from './components/Footer'
import VehicleInfo from './pages/VehicleInfo'
import { authStore } from './store/authStore'
import { dataStore } from './store/dataStore'
import Sidebar from './components/admin/Sidebar'

const App = () => {

  const {token, user} = authStore();

  return (
    <>
        {user?.role === "admin" ?
          <div className='flex'>
            <Sidebar/>

            <Routes>
              <Route path='/' element={<AdminDashBoard/>}/>
              <Route path='/admin/add-vehicle' element={<AddVehicle/>}/>
              <Route path='/admin/vehicles' element={<ManageVehicles/>}/>
              <Route path='/admin/bookings' element={<ManageBookings/>}/>
            </Routes>
          </div>
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
