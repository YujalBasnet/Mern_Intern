import jwt from "jsonwebtoken";

export const isLoggedIn = (req, res, next)=>{
    const token = req?.headers?.authorization?.split(" ")[1];

    if(!token){
        return res.status(400).send({
            message: "Token not found",
        });
    }

    const decryptedToken = jwt.verify(token, "secretKey");

    req.userRole = 
    decryptedToken.userRole === "admin" ?
    "admin" : decryptedToken.userRole === "user" ?
    "user" : decryptedToken.userRole === "superAdmin" ?
    "superAdmin" : null;

    next();
    
};

export const isAdmin = (req, res, next)=>{
    const role= req.userRole;
    if(role === "admin"){
        next();
    } else {
        res.status(401).send({
            message: "Unauthorized access",
        });
    }
};

export const isSuperAdminOrAdmin = (req, res, next)=> {
    const role= req.userRole;

    if(role === "superAdmin" || role === "admin"){
        next();
    } else{
        res.status(401).send({
            message: "Unauthorized access",
        });
    }
};

export const isSuperAdmin = (req, res, next)=> {
    const role= req.userRole;

    if(role === "superAdmin"){
        next();
    } else{
        res.status(401).send({
            message: "Unauthorized access",
        });
    }
};