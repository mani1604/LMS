import React, { useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosInstance'

const Dashboard = () => {
  const accessToken = localStorage.getItem("accessToken")

  useEffect(() => {
    const getData = async () => {
      try {
        // Send API request
        const response = await axiosInstance.get("/dashboard-protected/", {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
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