
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import PropsPractice from './Components/PropsPractice'
import PropsWithArray from './Components/PropsWithArray'


function App() {

  function HamdleAlert()
  {
    alert("time 10AM")
  }

  // variables 
  // let name = "wakeel"
  // let  age = 23
  // let gmail = "wakeel12@gmail.com"


  // object1
  let UserObj1 = {
    name : "wakeel",
    age:"23",
    gmail:"wakeel12@gmail.com",
    address :"jaypur",
    phone: "9817890206"
  }

    // object2
  let UserObj2 = {
    name : "wakeel",
    age:"23",
    gmail:"wakeel12@gmail.com",
    address :"jaypur",
    phone: "9817890206"
  }

    // object3
  let UserObj3 = {
    name : "wakeel",
    age:"23",
    gmail:"wakeel12@gmail.com",
    address :"jaypur",
    phone: "9817890206"
  }
    // object4
  let UserObj4 = {
    name : "wakeel",
    age:"23",
    gmail:"wakeel12@gmail.com",
    address :"jaypur",
    phone: "9817890206"
  }

  let CollageNames = ['pu','kit','nit','iit']

  return (
    <>
    {/* <h1>are you ready to join my live class </h1>
    <button>yes</button>
    <button onClick={HamdleAlert}>no</button> */}

{/* <PropsPractice name = {name} age = {age} gmail={ gmail}></PropsPractice> */}




{/* <PropsPractice user={UserObj1} />
<PropsPractice user={UserObj1} />
<PropsPractice user={UserObj1} />
<PropsPractice user={UserObj1} /> */}

<PropsWithArray  collage={CollageNames}></PropsWithArray>






    </>
  )
}

export default App
