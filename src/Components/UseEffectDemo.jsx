import React, { useState } from "react";
import { useEffect } from "react";

const UseEffectDemo=()=>{
  const [counter , setCounter]=useState(0)
  useEffect(() => {
   document.title = counter
   console.log("useEffect learning");
  }, [counter])
  
  return (
    <>
<h1>{counter}</h1>
<button onClick={()=>setCounter(counter+1)}>increase</button>
<button onClick={()=>setCounter(counter-1)}>decrease</button>
    </>


  )
}

export default UseEffectDemo