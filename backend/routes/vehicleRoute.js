import express from 'express';
import {admin} from '../middlewares/admin.js'
import { vehicleUpload } from '../middlewares/upload.js'
import { addVehicle, getVehicles, updateVehicle, deleteVehicle } from '../controllers/vehicleController.js'

const vehicleRoute = express.Router();

vehicleRoute.post('/add-vehicle', admin, vehicleUpload.single("image"), addVehicle);
vehicleRoute.get('/vehicles', getVehicles)
vehicleRoute.post('/update', admin, updateVehicle)
vehicleRoute.post('/delete', admin, deleteVehicle)

export default vehicleRoute;