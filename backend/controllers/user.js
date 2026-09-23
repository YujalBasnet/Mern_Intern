import database from "../database/database.js";
import bcrypt from "bcryptjs";

export const getUser = (req, res) => {
    // const user={
    //     name: "Yujal Khulal Basnet",
    //     email: "yujal@gmail.com",
    //     phone_number: "9800000000",
    //     address: "Gothgaun, Morang",
    //     role: "user",
    // };
    // console.log(user);
    
    // return res.send(user);
    try{
        const q = "SELECT * FROM users";

        database.query(q,(err, data) => {
            if (err){
                return res.send({message: "Error while fetching data", error: err,});
            }
            return res.send({message: "Data fetched successfully", data: data});
        });

    }catch(error){
        console.log(error);
    }
};

export const getUserById = (req, res) => {
    try{
        const {id} = req.params;

        const q = "SELECT * FROM users WHERE id = ?";

        database.query(q, [id], (err, data) => {
            if(err){
                return res.status(500).send({message: "Error while fetching data", error: err,});
            }
            return res.status(200).send({message: "Data fetched successfully", data: data});
        });

    }catch(error){
        console.log(error);
    }
};

export const deleteUser = (req, res) => {
    try{
        const {id} = req.params;

        const q = "DELETE FROM users WHERE id = ?";
        database.query(q, [id], (err, data) => {
            if(err){
                return res.status(500).send({message: "Error while deleting data", error: err,});
            }
            return res.status(200).send({message: "Data deleted successfully", data: data});
        });

    }catch(error){
        console.log(error);
    }
};

export const editUser = (req, res) => {
    try{
        const {id} = req.params;

        const {name, email, password, phone_number, address} = req.body;

        const q = "UPDATE users SET name = ?, email = ?, password = ?, phone_number = ?, address = ? WHERE id = ?";

        database.query(q, [name, email, password, phone_number, address, id], (err, data) => {
            if(err){
                return res.status(500).send({message: "Error while updating data", error: err,});
            }
            return res.status(200).send({message: "Data updated successfully", data: data});
        });

    }catch(error){
        console.log(error);
    }
};


export const postUser = (req, res) => {
    try{
    const {name, email, password, phone_number, address,} = req.body;

    const q=`INSERT INTO users (name, email, password, phone_number, address) VALUES(?, ?, ?, ?, ?)`;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log(hashedPassword);

     database.query(q, [name, email, hashedPassword, phone_number, address], (err, result) => {
        if (err) {
            return res.send({message: "Error while inserting data", error: err});
        }
        return res.send({message: "Data inserted successfully", result: result});
     });
     
    }catch(error){
        console.log(error);
    }
};
