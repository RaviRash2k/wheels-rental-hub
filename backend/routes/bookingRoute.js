import express from 'express';
import {protect} from '../middlewares/auth.js'
import { createBooking } from '../controllers/bookingController.js';

const bookingRoute = express.Router();

bookingRoute.post('/add', protect, createBooking)

export default bookingRoute;