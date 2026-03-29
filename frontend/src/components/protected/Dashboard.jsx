import { useEffect } from 'react'
import axiosInstance from '../../axiosInstance'

const Dashboard = () => {

  useEffect(() => {
    const getData = async () => {
      try {
        // Send API request
        const response = await axiosInstance.get("/dashboard-protected/")
        console.log("Response: ", response.data)
      } catch(error) {
        console.error("Some error occurred while fetching protected API", error)
      }
    }

    getData()
  }, [])
  return (
    <div className='container'>
        <div className='p-5 text-center'>
            <h1 className='text-light'>Dashboard</h1>
        </div>
    </div>
  )
}

export default Dashboard