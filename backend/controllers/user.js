export const getUser = (req, res) => {
    const user={
        name: "Yujal Khulal Basnet",
        email: "yujal@gmail.com",
        contact: "9800000000",
        address: "Gothgaun, Morang",
        role: "user",
    };
    console.log(user);
    
    return res.send(user);
};