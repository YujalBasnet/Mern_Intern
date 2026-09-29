import express from "express";
import { uploadImage } from "../controllers/image.js";
import upload from "../middleware/multer.js";
import { isLoggedIn } from "../middleware/authCheck.js";


const route = express.Router();
route.post ("/profile",isLoggedIn, upload.single("image"), uploadImage);

export default route;