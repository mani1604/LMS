import { useState } from 'react'
import HelloWorld from "./components/Hello"
import Teachers from "./components/Teachers"

import StateExample from './components/StateExample'
import Stock from './components/Stock'
import Mentor from "./components/Mentor"

import './App.css'
import StudentList from './components/StudentList'
import Result from './components/Result'
import StudentContext from './context/StudentContext'
import InputBox from './components/InputBox'
import MyCounter from './components/MyCounter'
import Greeting from './components/Greeting'
import NameList from './components/NameList'

function App() {
  let id = 1001
  const receiveData = (data) => {
    console.log("Data from child:", data); 
  };
  const students = [
    {id: 1, name: "Amit", marks: 81},
    {id: 2, name: "Neha", marks: 74},
    {id: 3, name: "Karan", marks: 91},
    {id: 4, name: "Arjun", marks: 88},
  ]
  const studentName = "John"

  return (
    <>
      <StudentContext.Provider value={studentName}>
        <h1>React Project</h1>
        {/* <HelloWorld/> */}
        {/* <StudentList/> */}
        {/* <Teachers name="Mark" id={id}/> */}
        {/* <Mentor sendData={receiveData} /> */}
        {/* <StateExample/> */}
        {/* <Stock/> */}
        {/* <Result students={students}/> */}
        <Teachers/>
      </StudentContext.Provider>
      <InputBox/>
      <MyCounter/>
      <Greeting isLoggedIn={false} name="John"/>
      <NameList/>
      <Stock/>
    </>
  )
}

export default App
