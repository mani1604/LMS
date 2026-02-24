import {useState} from 'react'

const Stock = () => {
  const [stockObj, setStockPrice] = 
  useState({name: "TCS", price: 1000, pe: 30})
  console.log(stockObj)
  const increasePrice = () => {
    setStockPrice({...stockObj, 
        price: stockObj.price + 10})
  }
  return (
    <>
        <h3>Stock name: {stockObj.name}</h3>
        <h3>Stock Price: {stockObj.price}</h3>
        <h3>PE: {stockObj.pe}</h3>
        <button onClick={increasePrice}>
            Increase Price
        </button>
    </>
  )
}

export default Stock