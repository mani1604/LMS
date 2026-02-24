import { useState } from 'react'
import HelloWorld from "./components/Hello"
import Teachers from "./components/Teachers"

import StateExample from './components/StateExample'
import Stock from './components/Stock'
import Mentor from "./components/Mentor"

import './App.css'
import StudentList from './components/StudentList'
import Result from './components/Result'

function App() {
  let id = 1001
  const receiveData = (data) => {
    console.log("Data from child:", data); 
  };

  return (
    <>
      <h1>React Project</h1>
      <HelloWorld/>
      <StudentList/>
      <Teachers name="Mark" id={id}/>
      <Mentor sendData={receiveData} />
      <StateExample/>
      <Stock/>
      
    </>
  )
}

export default App
