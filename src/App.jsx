
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import PropsPractice from './Components/PropsPractice'
import PropsWithArray from './Components/PropsWithArray'
import PropsWithClick from './Components/PropsWithClick'
import Laptop from './Components/Laptop'
import Events from './Components/Events'
import Counter from './Components/Counter'


function App() {

  function HamdleAlert() {
    alert("time 10AM")
  }


  // object1
  let UserObj1 = {
    name: "wakeel",
    age: "23",
    gmail: "wakeel12@gmail.com",
    address: "jaypur",
    phone: "9817890206"
  }

  // object2
  let UserObj2 = {
    name: "wakeel",
    age: "23",
    gmail: "wakeel12@gmail.com",
    address: "jaypur",
    phone: "9817890206"
  }

  // object3
  let UserObj3 = {
    name: "wakeel",
    age: "23",
    gmail: "wakeel12@gmail.com",
    address: "jaypur",
    phone: "9817890206"
  }
  // object4
  let UserObj4 = {
    name: "wakeel",
    age: "23",
    gmail: "wakeel12@gmail.com",
    address: "jaypur",
    phone: "9817890206"
  }

  // array
  // let CollageNames = ['pu','kit','nit','iit']

  let sum = 12 + 12

 function message ()
 {
  alert("ji upload kariya")
 }

  return (
    <>
      <div>

        {/* <h1>are you ready to join my live class </h1>
    <button>yes</button>
    <button onClick={HamdleAlert}>no</button> */}

      </div>
      <div>
        {/* <PropsPractice name = {name} age = {age} gmail={ gmail}></PropsPractice> */}
      </div>

      <div>

        {/* <PropsPractice user={UserObj1} />
<PropsPractice user={UserObj1} />
<PropsPractice user={UserObj1} />
<PropsPractice user={UserObj1} /> */}
      </div>

      <div>

        {/* <PropsWithArray  collage={CollageNames}></PropsWithArray> */}
      </div>


{/* 
  <div>


<Laptop  name = "hp" price="120000" brand ="Probook"/>
<Laptop  name = "dell" price="150000" brand ="yoga"/>
<Laptop  name = "lenovo" price="100000" brand ="inspiron"/>
  </div> */}

<div>
  {/* <Events Message = {message}  /> */}
</div>


<div>
<Counter />
</div>

    </>
  )
}

export default App
