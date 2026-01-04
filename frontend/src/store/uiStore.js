import { create } from "zustand"

export const useUiStore = create((set) => ({
    
    //state
    vehicleType: "Cars",
    signPopup: false,
    signState: "",

    //action
    setVehicleType: (vehicleType) => 
        set({vehicleType: vehicleType}),

    setSignPopup: (state) => 
        set({signPopup: state}),

    setSignState: (state) => 
        set({signState: state}),
    
}))