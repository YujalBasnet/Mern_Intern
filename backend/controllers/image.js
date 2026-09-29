import database from "../database/database.js";

export const uploadImage =(req, res) => {
    const image = req.file;
    const path = `images/${image.filename}`;

    const q = `insert into profile(user_id, path) values(?, ?)`;

    database.query(q, [req.user.userId, path], (err, data) => {
        if (err){
            return res.send({
            message: "Error while uploading image",
            error: err,});
        }
        return res.send({message: "Image uploaded successfully", data: data});
    });
    
};