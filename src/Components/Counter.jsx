import { useState } from "react";

const Counter=()=>{
const [counter,setCounter]=useState(0)
  const increaseBy1=()=>{
    // counter++;
    setCounter(counter+1)
  
  }                                                                              
  const decreaseBy1=()=>{
    // counter--;
    setCounter(counter-1)
  
  }
  return (
    <>
    <h1>{counter}</h1>
    <button onClick={increaseBy1}>increase</button>
     <button onClick={decreaseBy1}>decrease</button>
    </>
  )
}

export default Counter