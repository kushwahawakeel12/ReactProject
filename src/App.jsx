import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectDemo from './Components/UseEffectDemo'
import Data_Fetch_API from './Components/Data_FetcH_API'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* useEffect */}
    <div>
       {/* <UseEffectDemo/> */}
    </div>

    {/* /fetch api  */}
    <div>

      {/* <Data_Fetch_API/> */}
    </div>
    {/* form handling */}
    <div>
      <Form></Form>
    </div>
    </>
  )
}

export default App
