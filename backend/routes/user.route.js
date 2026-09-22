import express from "express";
import {getUser, postUser, getUserById, editUser, deleteUser} from "../controllers/user.js";


const route = express.Router();


route.get("/user", getUser);
route.post("/post-user",postUser);
route.get("/getUserById/:id", getUserById);
route.put("/editUser/:id", editUser);
route.delete("/deleteUser/:id", deleteUser);

export default route;