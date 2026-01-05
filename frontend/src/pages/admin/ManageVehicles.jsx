import React, { useEffect, useState } from "react"
import { dataStore } from "../../store/dataStore"
import VehiclePopup from "../../components/admin/VehiclePopup";
import Loading from "../../components/Loading"
import { deleteVehicle } from "../../api/vehicle.api";

const ManageVehicles = () => {

  const [typeFilter, setTypeFilter] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [mode, setMode] = useState("view");
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

  const filteredVehicles =
    typeFilter === "all"
      ? vehicles
      : vehicles.filter(v => v.type === typeFilter)

  if(loading) return <Loading/>;

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
                        src={`${imageURL}/vehicles/${vehicle.image}`}
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
                        {/* view button */}
                        <button 
                          className="px-3 py-1 rounded-md text-sm bg-blue-500 text-white hover:opacity-90"
                          onClick={() => {setSelectedVehicle(vehicle); setMode('view')}}
                        >
                          View
                        </button>

                        {/* update button */}
                        <button 
                          className="px-3 py-1 rounded-md text-sm bg-yellow-500 text-white hover:opacity-90"
                          onClick={() => {setSelectedVehicle(vehicle); setMode('edit')}}
                        >
                          Update
                        </button>

                        {/* delete button */}
                        <button
                          onClick={() => onDelete(vehicle._id)}
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
