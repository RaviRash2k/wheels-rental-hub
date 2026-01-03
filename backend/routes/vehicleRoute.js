import express from 'express';
import {admin} from '../middlewares/admin.js'
import { vehicleUpload } from '../middlewares/upload.js'
import { addVehicle } from '../controllers/vehicleController.js'

const vehicleRoute = express.Router();

vehicleRoute.post('/add-vehicle', admin, vehicleUpload.single("image"), addVehicle);

export default vehicleRoute;