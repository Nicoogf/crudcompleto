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
        res.status(500).json({message : error.message})
    }   
};

export const loguin = async ( req, res ) => {
    const { email, password } = req.body

    try {
        const userFound = await User.findOne({ email })

        if( !userFound ) return res.status(400).json({message: "Usuario no encontrado"})

        const isMatch = await bcrypt.compare( password , userFound.password )

        if(!isMatch) return res.status(400).json({message: "Contraseña incorrecta"})
 
       const token = await createAccesToken( {id: userFound._id})

       
        res.cookie( "token" , token )
       
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createAt : userFound.createdAt ,
            updateAt : userFound.updatedAt
        })

    } catch (error) {
        res.status(500).json({message : error.message})
    }   
};


export const logout = (req, res) => {
    res.cookie("token" , "" , {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}