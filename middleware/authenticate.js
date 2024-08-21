import { compare } from "bcrypt";
import jwt from 'jsonwebtoken';
import { config } from "dotenv";
import { loginUserDB } from "../model/usersDB.js";

config()

const checkUser = async (req, res, next) => {
    const {emailAdd, userPass} = req.body;
    let hashedPassword = (await loginUserDB(emailAdd)).userPass

    let result = await compare(userPass, hashedPassword)
    try {
        if (result == true) {
            let token = jwt.sign({emailAdd: emailAdd}, process.env.SECRET_KEY, {expiresIn: '1h'})
    
            req.body.token = token 
            next()
            return
        } else {
            res.status(400).json({message: "Invalid email or password"})
        }
    } catch (err) {
        console.log({
            status: 400, 
            message: "Invalid email or password",
            error: err
        })
    }
    
}

const verifyToken = (req, res, next) => {
    let {cookie} = req.headers

    let token = cookie && cookie.split('=')[1]

    console.log(cookie);
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {

            res.json({message: 'Token has expired'})
            return
        }
        req.body.user = decoded.userProfile
        next()
    })
}

export { checkUser, verifyToken }