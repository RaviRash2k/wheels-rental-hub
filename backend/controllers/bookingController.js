import bookingModel from "../models/bookingModel.js"
import vehicleModel from "../models/vehicleModel.js";

//user
const createBooking = async (req, res) => {

    try {
        const userId = req.user._id;
        const {vehicleId, startDate, endDate, totalPrice} = req.body;

        if (!vehicleId || !startDate || !endDate) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
        }

        // find vehicle
        const vehicle = await vehicleModel.findById(vehicleId);
        if (!vehicle) {
        return res.status(404).json({
            success: false,
            message: "Vehicle not found",
        });
        }

        // check overlapping bookings (approved only)
        const conflict = await bookingModel.findOne({
        vehicle: vehicleId,
        status: "approved",
        $or: [
            {
            startDate: { $lte: endDate },
            endDate: { $gte: startDate },
            },
        ],
        });

        if (conflict) {
        return res.status(409).json({
            success: false,
            message: "Vehicle already booked for selected dates",
        });
        }

        // create booking
        const booking = await bookingModel.create({
        user: userId,
        vehicle: vehicleId,
        startDate,
        endDate,
        totalPrice
        });

        return res.status(200).json({success: true, message: "waiting for admin approve"})

    } catch (error) {
        return res.status(500).json({success: false, message: "Internal server error"})
    }
}

const editBooking = async (req, res) => {

}

const cancelOwnBooking = async (req, res) => {

}

const viewOwnBookings = async (req, res) => {

}


//admin
const approveBooking = async (req, res) => {

}

const rejectBooking = async (req, res) => {

}

const cancelBooking = async (req, res) => {

}

const viewAllBookings = async (req, res) => {

}

export {createBooking};