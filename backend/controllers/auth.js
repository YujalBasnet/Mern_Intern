import database from "../database/database.js";
import bcrypt from "bcryptjs";

export const login = (req, res) => {
    try{
        const { email, password } = req.body;

        const q = "SELECT * FROM users WHERE email = ?";

        database.query(q, [email], (err, data) => {
            if(err){
                return res.status(500).send({message: "Error while fetching data", error: err});
            }
            if(data.length === 0){
                return res.status(404).send({message: "User not found"});
            }else{
                const passwordMatch= bcrypt.compareSync(password, result[0].password);

                if (passwordMatch){
                    return res.status(200).send({
                        message: "user login successfully",
                        data: result[0],
                    });
                }else{
                    return res.status(404).send({ message: "Enail or password didn't match",

                    });
                }
            }
        });
    }catch(error){
        console.log(error);
    }
};