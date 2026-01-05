import { create } from "zustand"
import { getVehicles } from "../api/vehicle.api";

export const dataStore = create((set) => ({
    
    //state
    vehicles: [],
    error: null,
    loading: false,
    imageURL: 'http://localhost:3000/api/images',

    //action

    //fetch vehicles
    fetchVehicles: async () => {
        set({loading: true, error: null});

        try {
            const res = await getVehicles();
            set({ vehicles: res.data.data, loading: false });

        } catch (error) {
            set({loading: false, error: "Failed to load vehicles"})
        }
    },

    //update vehicle store
    updateVehicleInStore: (updatedVehicle) =>
        set((state) => ({
            vehicles: state.vehicles.map((v) =>
                v._id === updatedVehicle._id ? updatedVehicle : v
            ),
        })),

    //delete vehicle store
    deleteVehicleInStore: (id) =>
        set((state) => ({
            vehicles: state.vehicles.filter(v => v._id !== id),
        })),

    //loading
    setLoading: (state) => 
        set({loading: state}),
}))