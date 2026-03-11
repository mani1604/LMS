import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='text-light'>
        <nav className='navbar container'>
            <Link className='navbar-brand text-light' to='/'>Learning App</Link>
            <div className='ms-auto'>
                <Link to="/login">
                  <button className='btn btn-outline-light me-2'>Login</button>
                </Link>
                
                <Link to="/register">
                  <button className='btn btn-primary'>Register</button>
                </Link>      
            </div>
        </nav>
    </div>
  )
}

export default Header
