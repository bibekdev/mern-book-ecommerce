import { useAuth } from '../context/auth'

const Home = () => {
  const { isAuthenticated } = useAuth()
  console.log(isAuthenticated)
  return (
    <div>
      <h1>{isAuthenticated ? 'true' : 'false'}</h1>
      <h2>Hello</h2>
    </div>
  )
}

export default Home
