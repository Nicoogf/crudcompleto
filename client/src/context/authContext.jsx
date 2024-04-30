import React, { createContext, useState, useContext, useEffect } from 'react'
import { registerRequest , loguinRequest} from '../api/auth'
import Cookies from "js-cookie"


export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth muse be used within an authprovider")
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [ errors , setErrors ] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            // console.log(error.response)
            setErrors(error.response.data)
        }
    }

    const signin = async( user ) => {
        try {
            const res = await loguinRequest(user)
            console.log(res)
            setIsAuthenticated(true)
            setUser(res.data)
        } catch (error) {
            console.log(error.response.data)
            if(Array.isArray(error.ressponse.data)){
                setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
           
        }
    }

    useEffect(()=> {
        if(errors.length > 0) {
            const timer = setTimeout(()=> {
                setErrors([])
            } , 5000 )
            return () => clearTimeout(timer)
        }
    },[errors])

    useEffect( () => {       
        const cookies = Cookies.get()
        console.log(cookies)
        if( cookies.token ) {
            console.log( cookies.token )
        }
    },[])

    return (
        <AuthContext.Provider value={{ signup, signin, user , isAuthenticated , errors}}>
            {children}
        </AuthContext.Provider>
    )
}

