import React from "react";

const Practices = () => {
  const data = [
    { id: 1, name: "wakeel", age: "23", address: "jaypur", department: "it" },
    { id: 2, name: "amitas", age: "20", address: "gujrata", department: "cse" },
    { id: 3, name: "karan", age: "25", address: "mumbai", department: "it" }

  ]
  const FilterProducts = data.filter((value1) => value1.department === "it")
  return (
    <>
      <div>

        {/* {
  data.map((value)=><div key={value.id}>
<h1>{value.name}</h1>
<h1>{value.age}</h1>
<h1>{value.address}</h1>
  </div>)
} */}

        {
          FilterProducts.map((value2) => <div key={value2.id}>

            <h1>{value2.name}</h1>
            <h1>{value2.age}</h1>
            <h1>{value2.address}</h1>
          </div>)
        }
      </div>


    </>
  )
}

export default Practices