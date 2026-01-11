import api from "../config/axios";
import axios from "axios";

//admin
//admin View Bookings
export const adminViewBookings = () => {
    return api.get('/booking/admin/bookings')
}