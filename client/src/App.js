import { Typography } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Toaster position='top-right' reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
