import { create } from "zustand"

export const useUiStore = create((set) => ({
    
    //state
    vehicleType: "Cars",

    //action
    setVehicleType: (vehicleType) => 
        set({vehicleType: vehicleType}),
    
}))