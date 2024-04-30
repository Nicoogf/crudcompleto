import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'


const RegisterPage = () => {

 const { register , handleSubmit , formState:{errors}} = useForm()
 const { signup , isAuthenticated , errors: registerErrors} = useAuth()
 const navigate = useNavigate ()

 useEffect( () => {
 if( isAuthenticated ) navigate("/tasks")
 },[isAuthenticated])

 const onSubmit = handleSubmit(async(values) => {
  signup(values)
 })

 
  return (
    <div>
        { registerErrors.map((error , i) => (
            <div className='bg-red-500 text-white font-semibold' key={i}> 
                {error}
            </div>
        ))}
        <form  className="flex flex-col gap-y-1 " onClick={onSubmit}>

            <input type='text' {...register("username" , {required : true })}  className='bg-gray-700 rounded-lg p-1  w-[70%] max-w-[300px] mx-auto'/> 

            { errors.username && (
                <p className='text-white bg-red-500'> Username es requerido </p>
            )}

            <input type='email' {...register("email" , { required : true })}  className='bg-gray-700 rounded-lg p-1 w-[70%] max-w-[300px] mx-auto'/> 

            { errors.email && (
                <p className='text-white bg-red-500'> Email es requerido </p>
            )}

            <input type='password'{...register("password" , {required : true})}  className='bg-gray-700 rounded-lg p-1 w-[70%] max-w-[300px] mx-auto'/> 

            { errors.password && (
                <p className='text-white bg-red-500'> password es requerido </p>
            )}
            <button type='submit' className='bg-blue-500 text-white font-semibold w-[70%] max-w-[300px] mx-auto p-2 rounded-lg'> Registrar </button>
        </form>

        <p>
        ya tienes una cuenta ? <Link to="/loguin">Ingresa</Link>
      </p>
    </div>
  )
}

export default RegisterPage