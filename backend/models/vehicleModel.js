import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  
    {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["car", "bike", "tuktuk"],
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    year: {
      type: Number,
    },

    location: {
      type: String,
      required: true,
    },

    fuel: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric"],
    },

    seats: {
      type: Number,
    },

    description: {
      type: String,
    },

    image: {
      type: String,
      required: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    }
  },
  { timestamps: true }

);

const vehicleModel = mongoose.models.Vehicle || mongoose.model("Vehicle", vehicleSchema)

export default vehicleModel;