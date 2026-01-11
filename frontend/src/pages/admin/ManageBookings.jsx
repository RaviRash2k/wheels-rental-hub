import React, {useEffect, useState} from "react"
import {Search} from 'lucide-react'
import {bookingStore} from '../../store/bookingStore'
import Loading from '../../components/Loading'

const statusStyle = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-700",
  declined: "bg-red-100 text-red-700",
}

const ManageBookings = () => {
  
  const [search, setSearch] = useState("");
  const [vehicleFilter, setVehicleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const {bookings, loading, error, getAllBookings} = bookingStore();

  //on Search Change
  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getAllBookings()
  }, [])

  //filter with type, status and search
  const filteredBookings = bookings.filter(b => {
    const q = search.toLowerCase();

    const matchSearch =
      b.user.name.toLowerCase().includes(q) ||
      b.vehicle.name.toLowerCase().includes(q) ||
      b._id.toString().toLowerCase().includes(q) ||
      b.user._id.toString().toLowerCase().includes(q) ||
      b.vehicle._id.toString().toLowerCase().includes(q);;

    const matchVehicle = vehicleFilter === "all" || b.vehicle.type === vehicleFilter;
    const matchStatus = statusFilter === "all" || b.status === statusFilter;

    return matchSearch && matchVehicle && matchStatus;
  });

  if (loading) return <Loading/>;

  return (
    <div className="bg-background min-h-screen p-6 w-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-7 sm:justify-between">
      
        {/* title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-theme">
          Manage Bookings
        </h1>

        {/* search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text/50" size={18} />
          <input
            type="text"
            placeholder="Search by name or ID..."
            onChange={onSearchChange}
            value={search}
            className="
              w-full pl-10 pr-4 py-2
              rounded-xl
              bg-card
              border
              border-theme/50
              shadow-xl/20
              text-sm
              focus:outline-none
              focus:ring-2 focus:ring-theme/40
            "
          />
        </div>

      </div>

      {/* table */}
      <div className="bg-card rounded-xl shadow-xl/10 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-theme text-nav-text">
            <tr>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Vehicle</th>

              {/* vehicle type */}
              <th className="p-4 text-center">
                <select
                  value={vehicleFilter}
                  onChange={(e) => setVehicleFilter(e.target.value)}
                  className="
                    bg-theme text-nav-text
                    px-3 py-1 rounded-md
                    text-xs font-semibold
                    focus:outline-none
                    cursor-pointer
                  "
                >
                  <option value="all">All</option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="tuktuk">Tuk Tuk</option>
                </select>
              </th>

              <th className="p-4">Start</th>
              <th className="p-4">End</th>
              <th className="p-4">Total</th>

              {/* status */}
              <th className="p-4 text-center">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="
                    bg-theme text-nav-text
                    px-3 py-1 rounded-md
                    text-xs font-semibold
                    focus:outline-none
                    cursor-pointer
                  "
                >
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="cancelled">Canceled</option>
                  <option value="completed">Completed</option>
                </select>
              </th>

              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-text/60">
                    No Bookings found
                  </td>
                </tr>
              ) : (
                filteredBookings.map((b) => (
                  <tr
                    key={b.id}
                    className="border-b last:border-none hover:bg-background transition"
                  >
                    <td className="p-4">{b.user.name}</td>
                    <td className="p-4">{b.vehicle.name}</td>
                    <td className="p-4 text-center">{b.vehicle.type}</td>
                    <td className="p-4 text-center">{b.startDate}</td>
                    <td className="p-4 text-center">{b.endDate}</td>
                    <td className="p-4 text-center font-semibold">
                      Rs. {b.totalPrice}
                    </td>

                    <td className="p-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[b.status]}`}
                      >
                        {b.status}
                      </span>
                    </td>

                    <td className="p-4 flex gap-2 justify-center">
                      {/* approve & decline buttons */}
                      {b.status === "pending" && (
                        <>
                          <button className="px-3 py-1 text-xs rounded-md bg-green-600 text-white hover:opacity-90">
                            Approve
                          </button>
                          <button className="px-3 py-1 text-xs rounded-md bg-red-600 text-white hover:opacity-90">
                            Decline
                          </button>
                        </>
                      )}

                      {/* cancel button */}
                      {b.status === "approved" && (
                        <>
                          <button className="px-3 py-1 text-xs rounded-md bg-red-600 text-white hover:opacity-90">
                            Cancel
                          </button>
                        </>
                      )}

                      {/* view button */}
                      <button className="px-3 py-1 text-xs rounded-md border hover:bg-theme hover:text-nav-text transition">
                        View
                      </button>
                    </td>

                  </tr>
                ))
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageBookings
