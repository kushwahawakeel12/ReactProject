import React from "react";

const MapProducts=()=>{
const Product = [
  {id:1,tittle:"iphone - 15", price:"100000"},
  {id:2,tittle:"iphone - 16", price:"200000"},
  {id:3,tittle:"iphone - 17", price:"300000"},
  {id:4,tittle:"iphone - 18", price:"400000"}

]

  return (
    <>
    
    <div>
     {
      Product.map((data)=> 
      <div key={data.id}>
        <hr />
       <h1> tittle = {data.tittle}</h1>
       <h1> price = {data.price}</h1>
      
      </div>)
     }

    </div>
 
    </>
  )
}
export default MapProducts