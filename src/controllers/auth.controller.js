import { createAccesToken } from "../libs/jwt.js";
import User from "../model/user.model.js"
import bcrypt from "bcryptjs"


export const register = async (req, res) => {
    const { email, password, username } = req.body

    try {
        const passHash = await bcrypt.hash( password , 12 )

        const newUser = new User({
            username ,
            email,
            password : passHash             
        })
        

       const userSaved = await newUser.save()      
       const token = await createAccesToken( {id: userSaved._id})

       
        res.cookie( "token" , token )
       
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createAt : userSaved.createdAt ,
            updateAt : userSaved.updatedAt
        })

    } catch (error) {
        console.log(error)
    }


   
};

export const loguin = (req, res) => {
    res.send("loguin")
};