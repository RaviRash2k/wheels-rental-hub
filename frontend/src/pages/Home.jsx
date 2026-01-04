import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

// components
import CarCard from '../components/CarCard'
import TuktukCard from '../components/TukTukCard'
import BikeCard from '../components/BikeCard'
import FeedbackCard from '../components/FeedbackCard'
import { useUiStore } from '../store/uiStore'
import { dataStore } from "../store/dataStore"
import Loading from "../components/Loading";

// other images
import luxry from '../assets/luxry.jpg'
import pixel from '../assets/pixel.jpg'

const Home = () => {

    const navigate = useNavigate();
    const { vehicleType, setVehicleType } = useUiStore();
    const { vehicles, fetchVehicles, loading, error } = dataStore();

    useEffect(() => {
        fetchVehicles();
    }, [fetchVehicles]);


    const feedbacks = [
        { name: "John Doe", location: "Colombo", image: pixel, rating: 5, feedback: "Great service and well-maintained vehicles. Highly recommend!" },
        { name: "Jane Smith", location: "Galle", image: pixel, rating: 4, feedback: "Excellent service and clean vehicles. Will rent again." },
        { name: "Michael Johnson", location: "Kandy", image: pixel, rating: 5, feedback: "Fast and reliable service. Very satisfied with the experience." }
    ]


  if (loading) return <Loading/>;

  return (
    <div className="bg-background min-h-screen pt-16">

        {/* hero section */}
        <img src={luxry} className='w-full h-180 object-cover pb-10' alt="" />

        {/* card section */}
        <div className="space-y-20 pb-10">
            {/* cars */}
            <div className="container mx-auto px-4">
                {/* topic */}
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-4">

                    <h2 className="text-2xl sm:text-3xl font-bold text-theme text-center sm:text-left">
                        Cars
                    </h2>

                    <button onClick={() => {navigate("/vehicles"); setVehicleType("Cars")}} className="self-center sm:self-auto px-4 py-2 border rounded-md text-sm sm:text-base hover:bg-theme hover:text-nav-text transition-colors">
                        Explore all cars
                    </button>

                </div>
                
                {/* card */}
                <div className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-hide flex-nowrap">

                    {vehicles.filter(v => v.type === "car").slice(0, 5).map((car, index) => (
                        <CarCard key={index} car={car} />
                    ))}

                </div> 
            </div>

            {/* tuk tuks */}
            <div className="container mx-auto px-4">
                {/* topic */}
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-4">

                    <h2 className="text-2xl sm:text-3xl font-bold text-theme text-center sm:text-left">
                        Tuk tuks
                    </h2>

                    <button onClick={() => {navigate("/vehicles"); setVehicleType("Tuktuks")}} className="self-center sm:self-auto px-4 py-2 border rounded-md text-sm sm:text-base hover:bg-theme hover:text-nav-text transition-colors">
                        Explore all tuk tuks
                    </button>

                </div>
                
                {/* card */}
                <div className="flex gap-6 overflow-x-auto pb-6 pt-4 scrollbar-hide flex-nowrap">

                    {vehicles.filter(v => v.type === "tuktuk").slice(0, 5).map((tuktuk, index) => (
                        <TuktukCard key={index} tuktuk={tuktuk} /> 
                    ))}
                </div> 
            </div>

            {/* bikes */}
            <div className="container mx-auto px-4">
                {/* topic */}
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-4">

                    <h2 className="text-2xl sm:text-3xl font-bold text-theme text-center sm:text-left">
                        Bikes
                    </h2>

                    <button onClick={() => {navigate("/vehicles"); setVehicleType("Bikes")}} className="self-center sm:self-auto px-4 py-2 border rounded-md text-sm sm:text-base hover:bg-theme hover:text-nav-text transition-colors">
                        Explore all bikes
                    </button>

                </div>
                
                {/* card */}
                <div className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-hide flex-nowrap">

                    {vehicles.filter(v => v.type === "bike").slice(0, 5).map((bike, index) => (
                        <BikeCard key={index} bike={bike} /> 
                    ))}

                </div> 
            </div>
        </div>

        {/* customer feedback */}
        <div className='container mx-auto px-4 py-12'>
            <div className=' mb-12'>
                <h2 className='text-3xl font-bold text-center text-theme mb-2'>What Our Customers Say</h2>
                <p className='text-center text-text/80 text-md'>Discover why discerning travelers choose StayVenture for their luxury accommodations around the world.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {feedbacks.map((feedback, index) => (
                    <FeedbackCard key={index} feedback={feedback} />
                ))}
            </div>
        </div>

    </div>
  )
}

export default Home
