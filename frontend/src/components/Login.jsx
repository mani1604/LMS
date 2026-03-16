import React, {useState} from 'react'
import axios from "axios"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const userData = {
      username, password
    }
    console.log("Login info: ", userData)

    try {
        // POST request to django backend
        const response = await axios.post("http://127.0.0.1:8000/api/v1/token/", userData)
        localStorage.setItem("accessToken", response.data.access)
        localStorage.setItem("refreshToken", response.data.refresh)
        console.log("Login successful")
    } catch(error) {
        console.log("Some error occurred while login: ", error.response.data)
    }
  }

  return (
    <>
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-6 bg-light-dark p-5 rounded">
                    <h3 className='text-light text-center mb-4'>Login to your Account</h3>
                    <form onSubmit={handleLogin}>
                        <div className='mb-3'>
                            <input type="text" className='form-control' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <input type="password" className='form-control' placeholder='Set password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        
                       <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login