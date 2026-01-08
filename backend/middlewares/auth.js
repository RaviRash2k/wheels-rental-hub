import jwt from 'jsonwebtoken';
import user from '../models/userModel.js';

export const protect = async (req, res, next) => {

  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    if(!token){
      return res.status(401).json({ message: "No token found!" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const currentUser = await user.findById(decoded.id).select("-password");
    if (!currentUser) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = currentUser;

    next();

  } catch (error) {
    res.status(401).json({ message: "Token is invalid or expired" });
  }
};