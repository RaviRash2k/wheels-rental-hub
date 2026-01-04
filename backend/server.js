import express from 'express';
import cors from 'cors';
import { conn } from './configs/db.js';
import 'dotenv/config'
import userRoute from './routes/userRoute.js';
import vehicleRoute from './routes/vehicleRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

//DB connection
conn();

//routes
app.use('/api/user', userRoute);
app.use('/api/vehicle', vehicleRoute);
app.use('/api/images', express.static('uploads'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});