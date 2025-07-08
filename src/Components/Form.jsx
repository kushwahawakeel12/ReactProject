
import React from "react"
import { useState } from "react"

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const HandlerSubmit=(e)=>{
e.preventDefault();
alert("your form has been submitted"+" " +name+" "+email+" "+password)
setEmail('')
setName('')
setPassword('')
  }
  return (
    <div>

      <div>
        <form onSubmit={HandlerSubmit}>
          <div>
            Name:- <input type="text" name="" id="" value={name}
              onChange={(e) => setName(e.target.value)} />
            <h3>{name}</h3>

          </div>
          <div>
            gmail:- <input type="mail" name="" id="" value={email}
              onChange={(e) => setEmail(e.target.value)} />
                <h3>{email}</h3>
          </div>
          <div>
            password:- <input type="password" name="" id="" value={password}
              onChange={(e) => setPassword(e.target.value)} />
                <h3>{password}</h3>
          </div>

          <div>
            <button > submit </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form