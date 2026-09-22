import database from "../database/database.js";


export const getTodos = (req, res) => {
    try{
        const q = "SELECT * FROM todos ORDER BY id DESC";
        database.query(q, (err, data) => {
            if(err){
                return res.status(500).send({message: "Error while fetching data", error: err});
            }
            return res.status(200).send({message: "Data fetched successfully", data: data});
        });
    }catch(error){
        console.log(error);
    }
};
