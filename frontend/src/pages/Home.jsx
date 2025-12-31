import React from 'react'
import CarCard from '../components/CarCard'
import TuktukCard from '../components/TukTukCard'
import BikeCard from '../components/BikeCard'
import FeedbackCard from '../components/FeedbackCard'

// other images
import hero from '../assets/hero.jpg'
import home from '../assets/home.jpg'
import luxry from '../assets/luxry.jpg'
import pixel from '../assets/pixel.jpg'

// car images
import toyotacorolla from '../assets/toyotacorolla.jpg'
import hondacivic from '../assets/hondacivic.jpg'
import fordmustang from '../assets/fordmustang.jpg'
import chevroletspark from '../assets/chevroletspark.jpg'
import nissanaltima from '../assets/nissanaltima.jpg'

// tuktuk images
import bajajre from '../assets/Bajajre.jpg'
import tvsking from '../assets/tvsking.jpg'
import piaggioape from '../assets/piaggioape.jpg'
import atulauto from '../assets/atulauto.jpg'
import mahindraalfa from '../assets/mahindraalfa.jpg'

// bike images
import fz from '../assets/fz.jpg'
import hondacb500 from '../assets/hondacb500.jpg'
import ktm from '../assets/ktm.jpg'
import gixxer from '../assets/gixxer.jpg'
import pulzer from '../assets/pulzer.jpg'

const Home = () => {

    const cars = [
        { name: "Toyota Corolla", type: "Sedan", year: 2021, price: 300, location: "Galle", seats: 4, fuel: "Diesel", image: toyotacorolla },
        { name: "Honda Civic", type: "Sedan", year: 2020, price: 350, location: "Colombo", seats: 4, fuel: "Petrol", image: hondacivic },
        { name: "Ford Mustang", type: "Coupe", year: 2019, price: 500, location: "Kandy", seats: 4, fuel: "Petrol", image: fordmustang },
        { name: "Chevrolet Spark", type: "Hatchback", year: 2022, price: 250, location: "Negombo", seats: 4, fuel: "Diesel", image: chevroletspark },
        { name: "Nissan Altima", type: "Sedan", year: 2021, price: 320, location: "Jaffna", seats: 4, fuel: "Petrol", image: nissanaltima }
    ]

    const tuktuks = [
        { name: "Bajaj RE", price: 150, location: "Colombo", fuel: "Petrol", image: bajajre },
        { name: "TVS King", price: 180, location: "Galle", fuel: "Petrol", image: tvsking },
        { name: "Piaggio Ape", price: 160, location: "Kandy", fuel: "Diesel", image: piaggioape },
        { name: "Mahindra Alfa", price: 170, location: "Negombo", fuel: "Diesel", image: mahindraalfa },
        { name: "Atul Auto", price: 155, location: "Jaffna", fuel: "Petrol", image: atulauto }
    ]

    const bikes = [
        { name: "Yamaha FZ", year: 2020, price: 80, location: "Colombo", image: fz },
        { name: "Honda CB500", year: 2019, price: 90, location: "Galle", image: hondacb500 },
        { name: "KTM Duke", year: 2021, price: 100, location: "Kandy", image: ktm },
        { name: "Suzuki Gixxer", year: 2022, price: 85, location: "Negombo", image: gixxer },
        { name: "Bajaj Pulsar", year: 2018, price: 75, location: "Jaffna", image: pulzer }
    ]

    const feedbacks = [
        { name: "John Doe", location: "Colombo", image: pixel, rating: 5, feedback: "Great service and well-maintained vehicles. Highly recommend!" },
        { name: "Jane Smith", location: "Galle", image: pixel, rating: 4, feedback: "Excellent service and clean vehicles. Will rent again." },
        { name: "Michael Johnson", location: "Kandy", image: pixel, rating: 5, feedback: "Fast and reliable service. Very satisfied with the experience." }
    ]


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

                    <button className="self-center sm:self-auto px-4 py-2 border rounded-md text-sm sm:text-base hover:bg-theme hover:text-nav-text transition-colors">
                        Explore all cars
                    </button>

                </div>
                
                {/* card */}
                <div className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-hide flex-nowrap">

                    {cars.map((car, index) => (
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

                    <button className="self-center sm:self-auto px-4 py-2 border rounded-md text-sm sm:text-base hover:bg-theme hover:text-nav-text transition-colors">
                        Explore all tuk tuks
                    </button>

                </div>
                
                {/* card */}
                <div className="flex gap-6 overflow-x-auto pb-6 pt-4 scrollbar-hide flex-nowrap">

                    {tuktuks.map((tuktuk, index) => (
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

                    <button className="self-center sm:self-auto px-4 py-2 border rounded-md text-sm sm:text-base hover:bg-theme hover:text-nav-text transition-colors">
                        Explore all bikes
                    </button>

                </div>
                
                {/* card */}
                <div className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-hide flex-nowrap">

                    {bikes.map((bike, index) => (
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
