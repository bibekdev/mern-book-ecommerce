import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/auth'

const Register = () => {
  const { registerUser } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = inputs => {
    registerUser(inputs)
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
          Register
        </Typography>
        <Box width='50%' sx={{ mx: 'auto' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              placeholder='Name'
              type='text'
              fullWidth
              sx={{ mt: 3 }}
              {...register('name', { required: true })}
            />
            {errors.name && (
              <Typography
                variant='body1'
                component='span'
                sx={{ color: 'red' }}>
                Name is required
              </Typography>
            )}
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
              Register
            </Button>
          </form>
          <Typography variant='body1' sx={{ mt: 2 }}>
            Already have account?{' '}
            <Typography
              variant='body1'
              sx={{ color: '#000' }}
              component={Link}
              to='/login'>
              Login
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Register
