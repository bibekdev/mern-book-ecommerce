import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { api } from '../api'

const Login = () => {
  const handleSubmit = async e => {
    e.preventDefault()
    const { data } = await api.post('/user/login', data)
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
          <form onClick={handleSubmit}>
            <TextField
              placeholder='Email'
              type='email'
              fullWidth
              margin='0 10px'
              sx={{
                my: 3,
                '&:hover': {
                  outline: 0,
                },
              }}
            />
            <TextField type='password' fullWidth placeholder='Password' />
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
