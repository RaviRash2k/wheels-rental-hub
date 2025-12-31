import React from 'react'
import hero from '../assets/hero.jpg'
import { Fuel, UsersRound, MapPin } from 'lucide-react'

const CarCard = ({car}) => {
  return (
    <div className="min-w-[280px] sm:min-w-[320px] lg:min-w-[280px] xl:min-w-[18%] bg-card rounded-2xl shadow-xl overflow-hidden flex flex-col
                    transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl/20">


        {/* image */}
            <img src={car.image} className="w-full h-full object-cover" alt="" />

        {/* details */}
        <div className="p-3 sm:p-4">
            <div className="flex justify-between items-start">

                <div className="flex flex-col mb-2">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-theme line-clamp-2 min-h-[3rem]">
                        {car.name}
                    </h2>

                    <h3 className="text-xs sm:text-sm text-theme/80">
                        {car.type} • {car.year}
                    </h3>
                </div>

                <h2 className="text-base sm:text-lg font-semibold text-theme">
                    LKR {car.price} <span className="text-text/60 text-xs">/day</span>
                </h2>
                
            </div>
        </div>
        

        {/* icons */}
        <div className="mt-auto grid grid-cols-2 sm:flex sm:justify-between gap-y-2 text-text/60 px-3 sm:px-4 pb-4 text-xs sm:text-sm">

            <div className="flex items-center gap-2">
                <MapPin size={14} className="sm:size-5" />
                <span>{car.location}</span>
            </div>

            <div className="flex items-center gap-2">
                <UsersRound size={14} className="sm:size-5" />
                <span>{car.seats} Seats</span>
            </div>

            <div className="flex items-center gap-2 sm:col-span-1">
                <Fuel size={14} className="sm:size-5" />
                <span>{car.fuel}</span>
            </div>
        </div>

    </div>
  )
}

export default CarCard
