import { createContext, useContext, useState } from 'react'
import { api } from '../api'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [token, setToken] = useState('')
  const [user, setUser] = useState(null)

  const loginUser = async value => {
    try {
      const { data } = await api.post('/user/login', value)
      console.log(data)
      localStorage.setItem('auth-token', JSON.stringify(data))
      setIsAuthenticated(true)
      toast.success('User logged in successfully.')
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.error)
    }
  }

  const registerUser = async value => {
    try {
      const { data } = await api.post('/user/register', value)
      console.log(data)
      toast.success('New user registered in successfully.')
      navigate('/login')
    } catch (error) {
      toast.error(error.response.data.error)
    }
  }

  return (
    <AuthContext.Provider value={{ loginUser, isAuthenticated, registerUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
