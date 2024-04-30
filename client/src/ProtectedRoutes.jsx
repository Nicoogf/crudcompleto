import React from 'react'
import { useAuth } from './context/authContext'
import { Navigate , Outlet} from 'react-router-dom'

const ProtectedRoutes = () => {
  const { user, isAuthenticated }  = useAuth()

  if(!isAuthenticated) return <Navigate to="/loguin" replace/>

  return (
    <Outlet />
  )
}

export default ProtectedRoutes