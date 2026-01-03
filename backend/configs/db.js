import mongoose from "mongoose";

export const conn = async () => {
    await mongoose.connect(process.env.MONGODB_URI + "/weels-rental-hub")
    .then(() => {console.log("DB connected!")})
}