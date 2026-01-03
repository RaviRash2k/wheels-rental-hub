import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
        default: ""
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    profileImage: {
        type: String,
        default: ""
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

  },
  { timestamps: true }

);

const userModel = mongoose.models.User || mongoose.model("User", userSchema)

export default userModel;