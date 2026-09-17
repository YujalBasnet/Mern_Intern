import express from "express";
import userRoutes from "./routes/user.route.js";

const route = express.Router();

route.use("/user", userRoutes);

export default route;