import React, { useState } from "react"

const ManageVehicles = () => {
  const [typeFilter, setTypeFilter] = useState("all")

  const vehicles = [
  {
    id: "v1",
    name: "Toyota Corolla",
    type: "car",
    year: 2021,
    price: 8500,
    location: "Colombo",
    fuel: "Petrol",
    seats: 5,
    description: "Comfortable sedan ideal for city and long-distance travel.",
    image: "/images/corolla.jpg",
  },
  {
    id: "v2",
    name: "Honda Civic",
    type: "car",
    year: 2020,
    price: 9000,
    location: "Galle",
    fuel: "Petrol",
    seats: 5,
    description: "Reliable car with excellent fuel efficiency.",
    image: "/images/civic.jpg",
  },
  {
    id: "v3",
    name: "Yamaha FZ",
    type: "bike",
    year: 2022,
    price: 3500,
    location: "Colombo",
    fuel: "Petrol",
    seats: 2,
    description: "Perfect bike for daily commuting and short trips.",
    image: "/images/yamaha-fz.jpg",
  },
  {
    id: "v4",
    name: "Bajaj Pulsar",
    type: "bike",
    year: 2021,
    price: 3200,
    location: "Kandy",
    fuel: "Petrol",
    seats: 2,
    description: "Sporty bike with smooth performance.",
    image: "/images/pulsar.jpg",
  },
  {
    id: "v5",
    name: "Bajaj RE",
    type: "tuktuk",
    year: 2019,
    price: 4500,
    location: "Negombo",
    fuel: "Petrol",
    seats: 3,
    description: "Affordable tuk tuk suitable for short city rides.",
    image: "/images/bajaj-re.jpg",
  },
  {
    id: "v6",
    name: "TVS King",
    type: "tuktuk",
    year: 2020,
    price: 4800,
    location: "Jaffna",
    fuel: "Petrol",
    seats: 3,
    description: "Spacious tuk tuk with good mileage.",
    image: "/images/tvs-king.jpg",
  },
]


  const filteredVehicles =
    typeFilter === "all"
      ? vehicles
      : vehicles.filter(v => v.type === typeFilter)

  return (
    <div className="bg-background min-h-screen w-full p-4 sm:p-6">
      <div className="max-w-7xl mx-auto bg-card rounded-2xl shadow-xl p-4 sm:p-6">

        <h1 className="text-2xl sm:text-3xl font-bold text-theme mb-6">
          Manage Vehicles
        </h1>

        {/* table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base border-collapse">
            <thead>
              <tr className="border-b text-left text-text/70">

                <th className="py-3 px-2">Image</th>
                <th className="py-3 px-2">Name</th>

                {/* type filter */}
                <th className="py-3 px-2">
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="bg-background border rounded-md px-2 py-1"
                  >
                    <option value="all">All types</option>
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                    <option value="tuktuk">Tuk Tuk</option>
                  </select>
                </th>

                <th className="py-3 px-2">Price / day</th>
                <th className="py-3 px-2 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredVehicles.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-6 text-center text-text/60">
                    No vehicles found
                  </td>
                </tr>
              ) : (
                filteredVehicles.map((vehicle) => (
                  <tr
                    key={vehicle.id}
                    className="border-b last:border-none hover:bg-black/5 transition"
                  >
                    {/* image */}
                    <td className="py-3 px-2">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-20 h-14 object-cover rounded-lg"
                      />
                    </td>

                    {/* name */}
                    <td className="py-3 px-2 font-medium">
                      {vehicle.name}
                    </td>

                    {/* type */}
                    <td className="py-3 px-2 capitalize">
                      {vehicle.type}
                    </td>

                    {/* price */}
                    <td className="py-3 px-2">
                      Rs. {vehicle.price}
                    </td>

                    {/* actions */}
                    <td className="py-3 px-2">
                      <div className="flex justify-center gap-2">
                        <button className="px-3 py-1 rounded-md text-sm bg-blue-500 text-white hover:opacity-90">
                          View
                        </button>

                        <button className="px-3 py-1 rounded-md text-sm bg-yellow-500 text-white hover:opacity-90">
                          Update
                        </button>

                        <button
                          onClick={() => window.confirm("Delete this vehicle?")}
                          className="px-3 py-1 rounded-md text-sm bg-red-500 text-white hover:opacity-90"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default ManageVehicles
