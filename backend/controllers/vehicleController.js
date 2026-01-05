import vehicleModel from '../models/vehicleModel.js'
import fs from 'fs'

//add vehicle
const addVehicle = async (req, res) => {

    //add
    let image_filename = `${req.file.filename}`;

    const vehicle = new vehicleModel({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        year: req.body.year,
        location: req.body.location,
        fuel: req.body.fuel,
        seats: req.body.seats,
        description: req.body.description,
        image: image_filename
    })

    try {
        await vehicle.save();
        res.json({success:true, message:"Vehicle added!"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Faild to product add!"})
    }
    
}

//get all vehicles
const getVehicles = async (req, res) => {
    
    try {
        const vehicles = await vehicleModel.find();
        res.json({success:true, data: vehicles})
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "error"});
    }
}

//update vehicle
const updateVehicle = async (req, res) => {

    const id = req.params.id;
    
    try {

        const allowedUpdates = [
            "name",
            "type",
            "price",
            "year",
            "location",
            "fuel",
            "seats",
            "description",
            "image",
        ];

        const updates = {};
        allowedUpdates.forEach((key) => {
            if (req.body[key] !== undefined) {
                updates[key] = req.body[key];
            }
        });

        const updatedVehicle = await vehicleModel.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

        if (!updatedVehicle) {
            return res.status(404).json({success: false, message: "Vehicle not found"});
        }

        res.status(200).json({success: true, data: updatedVehicle});

    }catch (error) {
        res.status(500).json({success: false, message: "Failed to update vehicle", error: error.message});
    }
}

//delete vehicle
const deleteVehicle = async (req, res) => {
    const id = req.params.id;

    try {
        const vehicle = await vehicleModel.findById(id)
        fs.unlink(`uploads/vehicles/${vehicle.image}`, ()=>{})

        await vehicleModel.findByIdAndDelete(id)
        res.json({success:true, message:"Vehicle Deleted!"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Delete error!"})
    }
}

//get vehicle by id
const getVehicleById = async (req, res) => {

    const id = req.params.id;

    try {
        const vehicle = await vehicleModel.findById(id)
        res.status(200).json({success:true, data: vehicle})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, data: "error"})
    }
}

export {addVehicle, getVehicles, updateVehicle, deleteVehicle, getVehicleById}