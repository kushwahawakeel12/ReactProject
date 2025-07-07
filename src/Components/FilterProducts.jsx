import React from "react";

const FilterProducts=()=>{

  const products = [
    {id:1,tittle:"iphone -15",category:"mobile",price:"100000"}
  ]
  const filterData = products.filter((data)=>data.category==="mobile")
  return (
    <>
    <div>
    {
      filterData.map((data1)=> <div key={data1.id}>
<h1>tittle ={  data1.tittle}</h1>
<h1>price = { data1.price}</h1>
<h1>  category ={ data1.category}</h1>
      </div>)
    }
    </div>
   
    </>
  )
}

export default FilterProducts