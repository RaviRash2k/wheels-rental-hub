import { create } from "zustand"
import { adminViewBookings } from '../api/booking.api'

export const bookingStore = create((set) => ({
    
    //state
    bookings: [],
    error: null,
    loading: false,


    //action
    getAllBookings: async () => {
        try {
            set({loading: true});
            const res = await adminViewBookings();
            set({bookings: res.data.bookings, loading: false})

        } catch (error) {
            set({ loading: false, error:error });
        }
    },
    


    setLoading: (state) => 
        set({loading: state}),

}))