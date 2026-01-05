import express from 'express';
import {admin} from '../middlewares/admin.js'
import { vehicleUpload } from '../middlewares/upload.js'
import { addVehicle, getVehicles, updateVehicle, deleteVehicle, getVehicleById } from '../controllers/vehicleController.js'

const vehicleRoute = express.Router();

vehicleRoute.post('/add-vehicle', admin, vehicleUpload.single("image"), addVehicle);
vehicleRoute.get('/all', getVehicles)
vehicleRoute.get('/get/:id', getVehicleById)
vehicleRoute.put('/update/:id', admin, updateVehicle)
vehicleRoute.post('/delete/:id', admin, deleteVehicle)

export default vehicleRoute;