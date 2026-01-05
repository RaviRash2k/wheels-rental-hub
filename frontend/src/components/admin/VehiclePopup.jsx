import React, { useState } from "react";
import { dataStore } from "../../store/dataStore";
import { updateVehicle } from "../../api/vehicle.api";
import { toast } from 'react-toastify';
import Loading from "../../components/Loading"

const VehiclePopup = ({vehicle, onClose, mode, setMode}) => {

  const { imageURL, loading, setLoading, updateVehicleInStore } = dataStore();
  const readOnlyFields = ["_id", "createdAt", "updatedAt"];
  const isView = mode === "view";
  const [data, setData] = useState(vehicle);

  //handle change
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //on submit
  const onSubmit = async () => {
        try {
            setLoading(true);

            const response = await updateVehicle(vehicle._id, data);

            if (response.data.success) {
                toast.success("Vehicle updated successfully!");
                updateVehicleInStore(response.data.data);
                onClose();
            } else {
                toast.error("Vehicle update failed!");
            }
        } catch (error) {
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
  };


  if(loading) return <Loading/>

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-start overflow-y-auto py-10">
      
      {/* popup */}
      <div className="bg-card w-full max-w-2xl rounded-2xl p-6 shadow-xl relative">

        {/* close */}
        <button 
            className="absolute top-4 right-4 text-xl text-text/60 hover:text-text"
            onClick={() => onClose()}
        >
          ✕
        </button>

        {/* title */}
        <h2 className="text-2xl font-bold text-theme mb-6">
          Vehicle Details
        </h2>

        {/* image */}
        <img
          src={`${imageURL}/vehicles/${vehicle.image}`}
          alt={vehicle.name}
          className="w-full h-56 object-cover rounded-xl mb-6"
        />

        {/* details */}
        <div className="space-y-4 text-sm">
            {[
                ["_id", "ID"],
                ["name", "Name"],
                ["type", "Type"],
                ["price", "Price"],
                ["year", "Year"],
                ["location", "Location"],
                ["fuel", "Fuel"],
                ["seats", "Seats"],
                ["description", "Description"],
                ["createdAt", "Created At"],
                ["updatedAt", "Updated At"],

            ].map(([key, label]) => (
                <div key={key}>
                    <p className="text-text/60 mb-1">{label}</p>

                    {isView || readOnlyFields.includes(key) ? (
                        <p className="font-medium break-all">
                            {vehicle[key]}
                        </p>
                    ) : key === "description" ? (
                        <textarea
                            name={key}
                            value={data[key] || ""}
                            onChange={handleChange}
                            defaultValue={vehicle[key]}
                            className="w-full border rounded-md p-2"
                        />
                    ) : (
                        <input
                            name={key}
                            value={data[key] || ""}
                            onChange={handleChange}
                            defaultValue={vehicle[key]}
                            className="w-full border rounded-md p-2"
                        />
                    )}
                </div>
            ))}
        </div>

        {/* actions */}
        <div className="flex justify-end gap-3 mt-8">
          {isView ? (
            <>
              <button
                onClick={() => setMode("edit")}
                className="px-4 py-2 rounded-md bg-theme text-nav-text"
              >
                Edit
              </button>

              <button className="px-4 py-2 rounded-md border" onClick={() => onClose()}>
                Close
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onClose()}
                className="px-4 py-2 rounded-md border"
              >
                Cancel
              </button>

              <button 
                className="px-4 py-2 rounded-md bg-theme text-nav-text"
                onClick={onSubmit}
              >
                Update
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default VehiclePopup;
