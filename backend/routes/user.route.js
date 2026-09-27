import express from "express";
import {getUser, postUser, getUserById, editUser, deleteUser} from "../controllers/user.js";
import { isAdmin, isLoggedIn, isUser } from "../middleware/authCheck.js";


const route = express.Router();



route.get("/user",isLoggedIn, isAdmin, getUser);
route.post("/post-user",postUser);
route.get("/getUserById/:id", getUserById);
route.put("/editUser/:id", editUser);
route.delete("/deleteUser/:id", deleteUser);

export default route;