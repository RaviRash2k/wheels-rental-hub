import React, { useEffect, useState } from "react"
import { dataStore } from "../../store/dataStore"
import VehiclePopup from "../../components/admin/VehiclePopup";
import Loading from "../../components/Loading"
import { deleteVehicle } from "../../api/vehicle.api";
import {Search} from 'lucide-react'

const ManageVehicles = () => {

  const [typeFilter, setTypeFilter] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [mode, setMode] = useState("view");
  const [search, setSearch] = useState("");
  const {vehicles, fetchVehicles, loading, setLoading, imageURL, deleteVehicleInStore} = dataStore();

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles])

  //delete api
  const onDelete = async (id) => {
    const ok = window.confirm("Are you sure you want to delete this vehicle?");
    if (!ok) return;

    try {
      setLoading(true);

      const response = await deleteVehicle(id);

      if (response.data.success) {
        deleteVehicleInStore(id);
        toast.success("Vehicle deleted successfully!");
      } else {
        toast.error("Delete failed!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  //on Search Change
  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }

  //filter with type and search
  const filteredVehicles = vehicles.filter(v => {
    const q = search.toLowerCase();

    const matchSearch =
      v.name.toLowerCase().includes(q) ||
      v._id.toString().toLowerCase().includes(q);

    const matchType =
      typeFilter === "all" || v.type === typeFilter;

    return matchSearch && matchType;
  });

  if(loading) return <Loading/>;

  return (
    <div className="bg-background min-h-screen w-full p-4 sm:p-6">
      <div className="max-w-7xl mx-auto rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-7 sm:justify-between">

          {/* title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-theme">
            Manage Vehicles
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
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-center">
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
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
                <th className="p-4 text-center">Price / day</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredVehicles.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-text/60">
                    No vehicles found
                  </td>
                </tr>
              ) : (
                filteredVehicles.map((vehicle) => (
                  <tr
                    key={vehicle.id}
                    className="border-b last:border-none hover:bg-background transition"
                  >
                    {/* image */}
                    <td className="p-4">
                      <img
                        src={`${imageURL}/vehicles/${vehicle.image}`}
                        alt={vehicle.name}
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                    </td>

                    {/* name */}
                    <td className="p-4 font-medium">
                      {vehicle.name}
                    </td>

                    {/* type */}
                    <td className="p-4 text-center capitalize">
                      {vehicle.type}
                    </td>

                    {/* price */}
                    <td className="p-4 text-center font-semibold">
                      Rs. {vehicle.price}
                    </td>

                    {/* actions */}
                    <td className="p-4 flex gap-2 justify-center">
                      <button
                        className="px-3 py-1 text-xs rounded-md bg-blue-600 text-white hover:opacity-90"
                        onClick={() => { setSelectedVehicle(vehicle); setMode("view") }}
                      >
                        View
                      </button>

                      <button
                        className="px-3 py-1 text-xs rounded-md bg-yellow-600 text-white hover:opacity-90"
                        onClick={() => { setSelectedVehicle(vehicle); setMode("edit") }}
                      >
                        Update
                      </button>

                      <button
                        className="px-3 py-1 text-xs rounded-md bg-red-600 text-white hover:opacity-90"
                        onClick={() => onDelete(vehicle._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>

      {/* data popup */}
      {selectedVehicle && (
        <VehiclePopup
          vehicle = {selectedVehicle}
          onClose = {() => setSelectedVehicle(null)}
          mode = {mode}
          setMode = {setMode}
        />
      )}
    </div>
  )
}

export default ManageVehicles
