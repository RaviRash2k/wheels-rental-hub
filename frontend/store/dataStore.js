import { create } from "zustand"

export const dataStore = create((set) => ({
    
    //state
    vehicles: [
            {
                type: "car",
                name: "Toyota Corolla",
                pricePerDay: 3000,
                images: ["/images/cars/corolla.jpg"],
                location: "Galle",
                fuel: "Petrol",
                seats: 4,
                year: 2021,
                available: true
            },
            {
                type: "car",
                name: "Honda Fit",
                pricePerDay: 2800,
                images: ["/images/cars/fit.jpg"],
                location: "Colombo",
                fuel: "Hybrid",
                seats: 5,
                year: 2020,
                available: true
            },

            {
                type: "bike",
                name: "Yamaha FZ",
                pricePerDay: 1800,
                images: ["/images/bikes/fz.jpg"],
                location: "Matara",
                fuel: "Petrol",
                year: 2019,
                available: true
            },
            {
                type: "bike",
                name: "Bajaj Pulsar 150",
                pricePerDay: 1500,
                images: ["/images/bikes/pulsar.jpg"],
                location: "Galle",
                fuel: "Petrol",
                year: 2021,
                available: true
            },

            {
                type: "tuktuk",
                name: "Bajaj RE",
                pricePerDay: 2500,
                images: ["/images/tuktuks/re.jpg"],
                location: "Kandy",
                fuel: "Petrol",
                seats: 3,
                available: true
            },
            {
                type: "tuktuk",
                name: "TVS King",
                pricePerDay: 2300,
                images: ["/images/tuktuks/king.jpg"],
                location: "Galle",
                fuel: "Petrol",
                seats: 3,
                available: false
            }
    ],

    //action
    setVehicles: (vehicles) => 
        set({vehicles: vehicles}),
    
}))