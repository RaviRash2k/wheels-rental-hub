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

//update vehicle
export const updateVehicle = (id, data) => {
    return api.put(`/vehicle/update/${id}`, data);
}

//delete vehicle
export const deleteVehicle = (id) => {
    return api.post(`/vehicle/delete/${id}`);
}