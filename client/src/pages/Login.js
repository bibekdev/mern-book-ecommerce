import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { api } from '../api'
import { toast } from 'react-hot-toast'
import { useAuth } from '../context/auth'

const Login = () => {
  const { loginUser } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = inputs => {
    loginUser(inputs)
  }
  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        width: '90%',
        mx: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          mx: 'auto',
          width: '40%',
          boxShadow: 'sm',
          backgroundColor: '#ededed',
          borderRadius: '1%',
          py: 8,
        }}>
        <Typography variant='h2' component='h2' sx={{ textAlign: 'center' }}>
          Login
        </Typography>
        <Box width='50%' sx={{ mx: 'auto' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              placeholder='Email'
              type='email'
              fullWidth
              sx={{ mt: 3 }}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <Typography
                variant='body1'
                component='span'
                sx={{ color: 'red' }}>
                Email is required
              </Typography>
            )}
            <TextField
              type='password'
              fullWidth
              sx={{ mt: 3 }}
              placeholder='Password'
              {...register('password', { required: true })}
            />
            {errors.password && (
              <Typography
                variant='body1'
                component='span'
                sx={{ color: 'red' }}>
                Password is required
              </Typography>
            )}
            <Button
              type='submit'
              size='small'
              variant='contained'
              fullWidth
              sx={{ mt: 3 }}>
              Login
            </Button>
          </form>
          <Typography variant='body1' sx={{ mt: 2 }}>
            Don't have account?{' '}
            <Typography
              variant='body1'
              sx={{ color: '#000' }}
              component={Link}
              to='/register'>
              Register
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
