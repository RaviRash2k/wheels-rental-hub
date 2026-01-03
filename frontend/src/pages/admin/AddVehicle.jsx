import React, { useState } from "react"

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    year: "",
    location: "",
    fuel: "",
    seats: "",
    description: "",
    image: null,
    imagePreview: null,
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    setFormData({
      ...formData,
      image: file,
      imagePreview: URL.createObjectURL(file),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="bg-background min-h-screen w-full p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-xl p-6 sm:p-8">

        <h1 className="text-2xl sm:text-3xl font-bold text-theme mb-6">
          Add New Vehicle
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Image Upload */}
          <div>
            <label className="block text-sm mb-2">Vehicle Photo</label>

            {formData.imagePreview && (
              <img
                src={formData.imagePreview}
                alt="Preview"
                className="w-full h-56 object-cover rounded-xl mb-3"
              />
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 rounded-lg border bg-background"
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Vehicle Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border bg-background"
              placeholder="Toyota Prius"
              required
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm mb-1">Vehicle Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border bg-background"
              required
            >
              <option value="">Select type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="tuktuk">Tuk Tuk</option>
            </select>
          </div>

          {/* Price & Year */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Price per day (Rs.)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border bg-background"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border bg-background"
                required
              />
            </div>
          </div>

          {/* Location & Fuel */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border bg-background"
                placeholder="Colombo"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Fuel Type</label>
              <select
                name="fuel"
                value={formData.fuel}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border bg-background"
              >
                <option value="">Select fuel</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          {/* Seats */}
          <div>
            <label className="block text-sm mb-1">Seats</label>
            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border bg-background"
              placeholder="4"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded-lg border bg-background resize-none"
              placeholder="Comfortable, fuel-efficient vehicle..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-theme text-nav-text font-semibold hover:opacity-90 transition"
          >
            Add Vehicle
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddVehicle
