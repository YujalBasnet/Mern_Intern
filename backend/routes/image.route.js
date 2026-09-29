import express from "express";
import { uploadImage } from "../controllers/image";


const route = express.Router();
route.post ("/profile", upload.single("image"), uploadImage);

export default route;