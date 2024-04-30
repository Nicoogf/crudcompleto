import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from './pages/RegisterPage'
import LoguinPage from './pages/LoguinPage'
import { AuthProvider } from './context/authContext'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1> Home page </h1>} />
          <Route path='/loguin' element={<LoguinPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/tasks' element={<h1> taskpage </h1>} />
          <Route path='/add-task' element={<h1> new task </h1>} />
          <Route path='/tasks/:id' element={<h1> updatetaks </h1>} />
          <Route path='/profile' element={<h1> profile </h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App