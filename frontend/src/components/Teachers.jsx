import React from 'react'

const Teachers = (props) => {
// const Teachers = ({name, id}) => 
  return (
    <>
        <h2>Teachers</h2>
        <h3>Teacher Name: {props.name}</h3>
        <h3>Teacher Name: {props.id}</h3>
        {/* <h3>Teacher Name: {name}</h3>
        <h3>Teacher ID: {id}</h3> */}

    </>
  )
}

export default Teachers