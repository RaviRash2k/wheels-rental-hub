import React from 'react'
import { MapPin, Calendar } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { dataStore } from '../store/dataStore'


const BikeCard = ({ bike }) => {

  const navigate = useNavigate()
  const {imageURL} = dataStore()
  
  return (
    <div 
        className="min-w-[280px] sm:min-w-[320px] lg:min-w-[280px] xl:min-w-[18%] bg-card rounded-2xl shadow-xl overflow-hidden flex flex-col
                        transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl/20"
        onClick={() => {navigate(`/vehicle/${bike._id}`)}}
    >

      {/* image (fixed size) */}
      <div className="w-full h-44">
        <img
          src={`${imageURL}/vehicles/${bike.image}`}
          className="w-full h-full object-cover"
          alt={bike.name}
        />
      </div>

      {/* details */}
      <div className="p-3 sm:p-4 flex justify-between gap-3">
        <h2 className="text-base sm:text-lg font-semibold text-theme line-clamp-2 min-h-[3rem]">
          {bike.name}
        </h2>

        <h2 className="text-base sm:text-lg font-semibold text-theme whitespace-nowrap">
          LKR {bike.price}
          <span className="text-text/60 text-xs"> /day</span>
        </h2>
      </div>

      {/* icons */}
      <div className="mt-auto flex gap-5 text-text/60 px-3 sm:px-4 pb-4 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <Calendar size={14} className="sm:size-5" />
          <span>{bike.year}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={14} className="sm:size-5" />
          <span>{bike.location}</span>
        </div>
      </div>

    </div>
  )
}

export default BikeCard
