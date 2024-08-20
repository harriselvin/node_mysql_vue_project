import { compare } from "bcrypt";
import jwt from 'jsonwebtoken';
import { config } from "dotenv";
import { getUserDB } from "../model/usersDB.js";

config()

const checkUser = async (req, res, next) => {
    const {userProfile, userPass} = req.body;
    let hashedPassword = (await getUserDB(userProfile)).userPass

    let result = await compare(userPass, hashedPassword)
    if (result==true) {
        let token = jwt.sign({userProfile: userProfile}, process.env.SECRET_KEY, {expiresIn: '1h'})

        req.body.token = token 
        next()
        return
    } else {
        res.send('Invalid password')
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