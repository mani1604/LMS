import { Link } from "react-router-dom"
import AuthProvider, { AuthContext } from "../AuthProvider"
import { useContext } from "react"

const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const handleLogout = () => {
    localStorage.removeItem('accessToken') // Deletes Access token
    localStorage.removeItem('refreshToken') // Deletes Refresh token
    setIsLoggedIn(false) // Set the isLoggedIn to false
  }

  return (
    <div className='text-light'>
        <nav className='navbar container'>
            <Link className='navbar-brand text-light' to='/'>Learning App</Link>
            <div className='ms-auto'>
                {isLoggedIn ? (
                  <button className='btn btn-danger me-2' onClick={handleLogout}>Logout</button>
                ) : (
                  <>
                    <Link to="/login">
                      <button className='btn btn-outline-light me-2'>Login</button>
                    </Link>
                    
                    <Link to="/register">
                      <button className='btn btn-primary'>Register</button>
                    </Link>
                  </>
                )}
                  
            </div>
        </nav>
    </div>
  )
}

export default Header
