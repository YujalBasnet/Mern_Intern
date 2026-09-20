import database from "../database/database.js";

export const getUser = (req, res) => {
    const user={
        name: "Yujal Khulal Basnet",
        email: "yujal@gmail.com",
        phone_number: "9800000000",
        address: "Gothgaun, Morang",
        role: "user",
    };
    console.log(user);
    
    return res.send(user);
};



export const postUser = (req, res) => {
    const {name, email, password, phone_number, address,} = req.body;

    const q=`INSERT INTO users (name, email, password, phone_number, address) VALUES(?, ?, ?, ?, ?)`;

     database.query(q, [name, email, password, phone_number, address], (err, result) => {
        if (err) {
            return res.send({message: "Error while inserting data", error: err});
        }
        return res.send({message: "Data inserted successfully", result: result});
     });
};
