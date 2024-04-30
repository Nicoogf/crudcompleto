import React from 'react'
import { useForm } from "react-hook-form"
import { useAuth } from '../context/authContext'
import { Link } from 'react-router-dom'

const LoguinPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signin , errors: signInErrors } = useAuth()

  const onSubmit = handleSubmit((data) => {
    signin(data)
  })

  return (
    <div>

      { signInErrors.map((error , i) => (
            <div className='bg-red-500 text-white font-semibold' key={i}> 
                {error}
            </div>
        ))}

      
      <form className="flex flex-col gap-y-1 " onClick={onSubmit}>


        <input type='email' {...register("email", { required: true })} className='bg-gray-700 rounded-lg p-1 w-[70%] max-w-[300px] mx-auto' />

        {errors.email && (
          <p className='text-white bg-red-500'> Email es requerido </p>
        )}

        <input type='password'{...register("password", { required: true })} className='bg-gray-700 rounded-lg p-1 w-[70%] max-w-[300px] mx-auto' />

        {errors.password && (
          <p className='text-white bg-red-500'> password es requerido </p>
        )}
        <button type='submit' className='bg-blue-500 text-white font-semibold w-[70%] max-w-[300px] mx-auto p-2 rounded-lg'> Ingresar </button>
      </form>

      <p>
        No tienes una cuenta aun <Link to="/register">Registrate</Link>
      </p>
    </div>
  )
}

export default LoguinPage