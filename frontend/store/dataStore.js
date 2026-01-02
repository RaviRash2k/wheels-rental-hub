import { create } from "zustand"
import fz from "../src/assets/fz.jpg"

export const dataStore = create((set) => ({
    
    //state
    vehicles: [
            {
                id: "001",
                name: "Yamaha FZ",
                year: 2021,
                price: 1200,
                location: "Colombo",
                fuel: "Petrol",
                seats: 2,
                image: fz,
            }
    ],

    //action
    setVehicles: (vehicles) => 
        set({vehicles: vehicles}),
    
}))