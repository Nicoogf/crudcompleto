import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from './pages/RegisterPage'
import LoguinPage from './pages/LoguinPage'
import { AuthProvider } from './context/authContext'
import TaskPage from './pages/TaskPage'
import TaskFormPage from './pages/TaskFormPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import ProtectedRoutes from './ProtectedRoutes'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/loguin' element={<LoguinPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/tasks' element={<TaskPage />} />
            <Route path='/add-task' element={<TaskFormPage />} />
            <Route path='/tasks/:id' element={<TaskFormPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App