import bookingModel from "../models/bookingModel.js"
import vehicleModel from "../models/vehicleModel.js";

//user
//user creatte booking
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

//edit booking
const editBooking = async (req, res) => {
  try {
    const { bookingId, startDate, endDate, action } = req.body;
    const userId = req.user._id;

    // Find booking
    const booking = await bookingModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // check user
    if (!booking.user.equals(userId)) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // valid status pending
    if (booking.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: "Booking cannot be modified",
      });
    }

    // update dates
    if (action === "update") {
      if (!startDate || !endDate) {
        return res.status(400).json({
          success: false,
          message: "Start and end dates required",
        });
      }

      if (new Date(endDate) <= new Date(startDate)) {
        return res.status(400).json({
          success: false,
          message: "End date must be after start date",
        });
      }

      booking.startDate = startDate;
      booking.endDate = endDate;

      // calculate price
      const vehicle = await vehicleModel.findById(booking.vehicle);
      const days = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);

      booking.totalPrice = days * vehicle.price;

      await booking.save();

      return res.status(200).json({
        success: true,
        message: "Booking updated successfully",
        booking,
      });
    }

    // cancel booking
    if (action === "cancel") {
      booking.status = "cancelled";
      await booking.save();

      return res.status(200).json({
        success: true,
        message: "Booking cancelled successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Invalid action",
    });

  } catch (error) {
    console.log("EDIT BOOKING ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//get own bookings
const viewOwnBookings = async (req, res) => {
    const user = req.user._id;

    try {
        //find bookings
        const bookings = await bookingModel.find({user});

        if(bookings.length === 0){
            return res.status(404).json({
                success: false,
                message: "No booking found!"
            })
        }

        return res.status(200).json({
            success: true,
            bookings
        })

        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//get book by Id
const getBookingById = async (req, res) => {
    try {
        const user = req.user._id;
        const bookingId = req.params.id;

        //get booking
        const booking = await bookingModel.findById(bookingId);
        if(!booking){
            return res.status(404).json({
                success: false,
                message: "No booking founded br!"
            })
        }

        //valid user
        if(!booking.user.equals(user)){
            return res.status(403).json({
                success: false,
                message: "Invalid User!"
            })
        }

        return res.status(200).json({
            success: true,
            booking
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// admin
//edit bookings
const adminEditBooking = async (req, res) => {
  try {
    const { bookingId, action } = req.body;

    const booking = await bookingModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "No booking found",
      });
    }

    // approve
    if (action === "approve") {
      if (booking.status !== "pending") {
        return res.status(409).json({
          success: false,
          message: "Booking already processed",
        });
      }

      booking.status = "approved";
      await booking.save();

      return res.status(200).json({
        success: true,
        message: "Approved!",
      });
    }

    // decline
    if (action === "decline") {
      if (booking.status !== "pending") {
        return res.status(409).json({
          success: false,
          message: "Booking already processed",
        });
      }

      booking.status = "declined";
      await booking.save();

      return res.status(200).json({
        success: true,
        message: "Declined!",
      });
    }

    // cancel
    if (action === "cancel") {
      if (booking.status !== "approved") {
        return res.status(409).json({
          success: false,
          message: "Only approved bookings can be cancelled",
        });
      }

      booking.status = "cancelled";
      await booking.save();

      return res.status(200).json({
        success: true,
        message: "Cancelled!",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Invalid action",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//admin booking view
const adminViewBookings = async (req, res) => {
    try {
        //find bookings
        const bookings = await bookingModel.find().sort({ createdAt: -1 });
        
        if(bookings.length === 0){
            return res.status(404).json({
                success: false,
                message: "no booking found!"
            })
        }

        return res.status(200).json({
            success: true,
            bookings
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export {createBooking, editBooking, viewOwnBookings, getBookingById, adminViewBookings, adminEditBooking};