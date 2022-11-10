import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth'

const Navbar = () => {
  const { isAuthenticated } = useAuth()
  return (
    <AppBar position='sticky' sx={{ boxShadow: 'sm' }}>
      <Toolbar>
        <Typography
          variant='h4'
          component={Link}
          to='/'
          sx={{ color: 'white', textDecoration: 'none' }}>
          iShop
        </Typography>
        <Box
          sx={{
            ml: 8,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
          }}>
          <div>
            <Typography
              variant='body2'
              component={Link}
              to='/'
              sx={{ color: 'white' }}>
              Home
            </Typography>
            <Typography
              sx={{ ml: 3, color: 'white' }}
              variant='body2'
              component={Link}
              to='/shop'>
              Shop
            </Typography>
          </div>
          <div>
            {isAuthenticated ? (
              <IconButton>
                <Avatar />
              </IconButton>
            ) : (
              <Typography
                variant='body2'
                component={Link}
                to='/login'
                sx={{ color: 'white' }}>
                Login
              </Typography>
            )}
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
