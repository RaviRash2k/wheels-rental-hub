import React, { useEffect, useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import { useUiStore } from "../store/uiStore"
import { dataStore } from "../store/dataStore"
import CarCard from "../components/CarCard"
import { vehicles, options ,locations, fuels } from "../assets/assets"
import BikeCard from "../components/BikeCard"
import TuktukCard from "../components/TukTukCard"

const Vehicles = () => {

  const [open, setOpen] = useState(false)
  const { vehicleType, setVehicleType } = useUiStore()

  const [location, setLocation] = useState("Location")
  const [fuel, setFuel] = useState("Fuel")

  const [locationOpen, setLocationOpen] = useState(false)
  const [fuelOpen, setFuelOpen] = useState(false)

  const [search, setSearch] = useState("")

  // const { vehicles, setVehicles } = dataStore()
  
  //search change
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="bg-background min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">

        {/* heading */}
        <div>
          <h2 className="text-3xl font-bold text-center text-theme mb-2">
            Available Vehicles
          </h2>
          <p className="text-center text-text/80 text-md max-w-2xl mx-auto">
            Browse our selection of premium vehicles available for your next adventure
          </p>
        </div>

        {/* search & dropdown */}
        <div className="mt-8 flex flex-col gap-4 items-center">

          {/* search */}
          <div
            className="
              rounded-full bg-card flex items-center gap-4 shadow-xl/10
              w-full sm:w-full md:w-4/5 xl:w-2/3
              px-4 py-2 xl:px-6 xl:py-3
            "
          >

            <Search className="text-text/60" />
            <input
              type="text"
              name="search"
              value={search}
              onChange={onSearchChange}
              placeholder="Search vehicles..."
              className="w-full bg-transparent outline-none text-sm xl:text-base"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 w-full sm:w-full md:w-auto">
            {/* vehivle type dropdown */}
            <div className="relative w-auto">
              <button
                onClick={() => setOpen(!open)}
                className="
                  w-full flex items-center justify-between
                  px-4 py-2 xl:px-6 xl:py-3
                  rounded-full bg-card shadow-xl/10
                  hover:bg-gray-50 transition
                "
              >
                <span className="text-theme text-xs xl:text-base">
                  {vehicleType}
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform xl:size-5 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open && (
                <div className="absolute z-20 mt-2 w-full bg-card rounded-xl shadow-lg overflow-hidden">
                  {options.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setVehicleType(item)
                        setOpen(false)
                      }}
                      className="
                        w-full text-left px-4 py-2 xl:px-6 xl:py-3
                        text-xs xl:text-base
                        hover:bg-theme hover:text-white transition
                      "
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* location dropdown */}
            <div className="relative w-auto">
              <button
                onClick={() => setLocationOpen(!locationOpen)}
                className="w-full flex items-center justify-between px-4 py-2 xl:px-6 xl:py-3
                          rounded-full bg-card shadow-xl/10 hover:bg-gray-50 transition"
              >
                <span className="text-theme text-xs xl:text-base">
                  {location}
                </span>
                <ChevronDown size={18} />
              </button>

              {locationOpen && (
                <div className="absolute z-20 mt-2 w-full bg-card rounded-xl shadow-lg">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setLocation(loc)
                        setLocationOpen(false)
                      }}
                      className="w-full text-xs xl:text-base text-left px-4 py-2 hover:bg-theme hover:text-white"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* fuel dropdown */}
            {vehicleType !== "Bikes" && (
              <div className="relative w-auto">
                <button
                  onClick={() => setFuelOpen(!fuelOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 xl:px-6 xl:py-3
                            rounded-full bg-card shadow-xl/10 hover:bg-gray-50 transition"
                >
                  <span className="text-theme text-xs xl:text-base">
                    {fuel}
                  </span>
                  <ChevronDown size={18} />
                </button>

                {fuelOpen && (
                  <div className="absolute z-20 mt-2 w-full bg-card rounded-xl shadow-lg">
                    {fuels.map((f) => (
                      <button
                        key={f}
                        onClick={() => {
                          setFuel(f)
                          setFuelOpen(false)
                        }}
                        className="w-full text-xs xl:text-base text-left px-4 py-2 hover:bg-theme hover:text-white"
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                )}
                
              </div>
            )}
          </div>
          
        </div>


        {/* cards */}

        {/* car */}
        {vehicleType === "Cars" && (
          <>
            {vehicles.filter(
              v =>
                v.type === "car" &&
                (location === "Location" || v.location === location) &&
                (fuel === "Fuel" || v.fuel === fuel)
            ).length === 0 ? (
              <p className="mt-12 text-center text-text/60 text-lg">
                No cars found
              </p>
            ) : (
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {vehicles
                  .filter(
                    v =>
                      v.type === "car" &&
                      (location === "Location" || v.location === location) &&
                      (fuel === "Fuel" || v.fuel === fuel) &&
                      v.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((car, index) => (
                    <CarCard key={index} car={car} />
                  ))}
              </div>
            )}
          </>
        )}

        {/* bike */}
        {vehicleType === "Bikes" && (
          <>
            {vehicles.filter(
              v =>
                v.type === "bike" &&
                (location === "Location" || v.location === location)
            ).length === 0 ? (
              <p className="mt-12 text-center text-text/60 text-lg">
                No bikes found
              </p>
            ) : (
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {vehicles
                  .filter(
                    v =>
                      v.type === "bike" &&
                      (location === "Location" || v.location === location) &&
                      v.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((bike, index) => (
                    <BikeCard key={index} bike={bike} />
                  ))}
              </div>
            )}
          </>
        )}

        {/* tuk tuk */}
        {vehicleType === "Tuktuks" && (
          <>
            {vehicles.filter(
              v =>
                v.type === "tuktuk" &&
                (location === "Location" || v.location === location) &&
                (fuel === "Fuel" || v.fuel === fuel)
            ).length === 0 ? (
              <p className="mt-12 text-center text-text/60 text-lg">
                No tuktuks found
              </p>
            ) : (
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {vehicles
                  .filter(
                    v =>
                      v.type === "tuktuk" &&
                      (location === "Location" || v.location === location) &&
                      (fuel === "Fuel" || v.fuel === fuel) &&
                      v.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((tuktuk, index) => (
                    <TuktukCard key={index} tuktuk={tuktuk} />
                  ))}
              </div>
            )}
          </>
        )}


      </div>
    </div>
  )
}

export default Vehicles
