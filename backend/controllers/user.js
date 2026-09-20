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


export const postUser = () => {
    const {name, email, password, phone_number, address,} = req.body;

    const q=`INSERT INTO users (name, email, password, phone_number, address) VALUES(${name},
     ${email}, ${password}, ${phone_number}, ${address})`;

     database.query(q, (err, result) => {
        if (err) {
            return res.send({message: "Error while inserting data", error: err});
        }
        return res.send({message: "Data inserted successfully", result: result});
     });
     