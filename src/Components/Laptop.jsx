import React from 'react';
import './laptop.css';


function Laptop({ name, price, brand }) {

  // const obj = {
  //   backgroundColor:"red",
  //   margin:"10px",
  //   borderRadius:"10px ",
  //   border:"2px solid blue"

  // }
  return (

    <>
      <div className='wakeel'

        // this is the inline styling 
        // style={{
        //   backgroundColor: 'gray',
        //   padding: "0px",
        //   margin: "60",
        //   borderRadius: "30px",
        //   border: '2px solid yellow ',
        //   gap: "100px"
        // }}
// style={obj}

      >

     
        <h1 >name = {name}</h1>

        <h1>price = {price}</h1>

        <h1>brand = {brand}</h1>

      </div>
    </>
  )
}

export default Laptop