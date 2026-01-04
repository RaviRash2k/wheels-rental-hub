import api from "../config/axios";
import axios from "axios";

//get vehicles
export const getVehicles = () => {
    return axios.get("http://localhost:3000/api/vehicle/all");
}

//get vehicle by id
export const getVehicleById = (id) => {
    return axios.get(`http://localhost:3000/api/vehicle/get/${id}`);
}

//add vehicle
export const addVehicle = (data) => {
    return api.post('/vehicle/add-vehicle', data);
}
