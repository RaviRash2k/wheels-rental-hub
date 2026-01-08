import express from 'express';
import {protect} from '../middlewares/auth.js'
import {admin} from '../middlewares/admin.js'
import { createBooking, editBooking, viewOwnBookings, getBookingById, adminViewBookings, adminEditBooking } from '../controllers/bookingController.js';

const bookingRoute = express.Router();

bookingRoute.post('/add', protect, createBooking)
bookingRoute.post('/update', protect, editBooking)
bookingRoute.get('/my-bookings', protect, viewOwnBookings)
bookingRoute.get('/my-booking/:id', protect, getBookingById) 
bookingRoute.get('/admin/bookings', admin, adminViewBookings) 
bookingRoute.get('/admin/update-bookings', admin, adminEditBooking) 

export default bookingRoute;