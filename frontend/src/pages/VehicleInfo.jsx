import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useParams } from "react-router-dom"
import { dataStore } from "../store/dataStore"
import { getVehicleById } from "../api/vehicle.api"
import Loading from "../components/Loading"

const VehicleInfo = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [vehicle, setVehicle] = useState(null);

  const { id } = useParams();
  const {imageURL, loading, setLoading} = dataStore();

  //fetch data by id
  useEffect(() => {
    const fetchVehicle = async () => {

        setLoading(true)
        const response = await getVehicleById(id);

        if (response.data.success) {
            setVehicle(response.data.data);
            setLoading(false)
        }
    };

    fetchVehicle();
    }, [id]);

    useEffect(()=>{
        console.log(startDate)
    }, [startDate])


  const unavailableDates = [
    new Date("2026-01-10"),
    new Date("2026-01-11"),
    new Date("2026-01-15"),
  ]

  const days =
    startDate && endDate
      ? Math.max(
          Math.ceil(
            (endDate - startDate) / (1000 * 60 * 60 * 24)
          ),
          0
        )
      : 0

  const total = days * vehicle?.price

  if (loading) return <Loading/>;

  if (!vehicle) return <p className="bg-background min-h-screen py-20 mt-10">Vehicle not found</p>;

  return (
    <div className="bg-background min-h-screen py-20 mt-10">
        <div className="container mx-auto px-4 max-w-6xl">

            {/* layout */}
            <div className="grid lg:grid-cols-2 gap-10">

                {/* image */}
                <img
                    src={`${imageURL}/vehicles/${vehicle?.image}`}
                    alt={vehicle.name}
                    className="w-full h-72 sm:h-96 object-cover rounded-2xl"
                />

                {/* details */}
                <div className="space-y-6">

                    <h1 className="text-3xl sm:text-4xl font-bold text-theme">
                    {vehicle?.name}
                        <span className="text-text/60 ml-2">
                            ({vehicle?.year})
                        </span>
                    </h1>

                    <p className="text-text/80">
                    Comfortable, reliable vehicle perfect for city and long trips.
                    </p>

                    {/* info */}
                    <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
                        <p><strong>Location:</strong> {vehicle?.location}</p>
                        <p><strong>Fuel:</strong> {vehicle?.fuel}</p>
                        <p><strong>Seats:</strong> {vehicle?.seats}</p>
                        <p className="text-theme font-semibold">
                            Rs. {vehicle?.price} / day
                        </p>
                    </div>

                    {/* date pickers */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm mb-1 block">Pickup date</label>
                            <DatePicker
                                selected={startDate}
                                onChange={setStartDate}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                excludeDates={unavailableDates}
                                minDate={new Date()}
                                className="w-full p-2 rounded-md border"
                            />
                        </div>

                        <div>
                            <label className="text-sm mb-1 block">Return date</label>
                            <DatePicker
                                selected={endDate}
                                onChange={setEndDate}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                excludeDates={unavailableDates}
                                className="w-full p-2 rounded-md border"
                            />
                        </div>
                    </div>

                    {/* bill */}
                    <div className="bg-card rounded-xl p-6 shadow-xl/10 text-left">
                        <p className="text-text/60 text-sm">
                            Total days: <strong>{days}</strong>
                        </p>

                        <p className="text-2xl font-bold text-theme mt-2">
                            Total: Rs. {total}
                        </p>

                        <button className="w-full px-4 py-2 rounded-xl bg-theme text-nav-text mt-4 text-lg">
                            Pay here
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default VehicleInfo
