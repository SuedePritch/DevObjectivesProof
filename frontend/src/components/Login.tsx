import React from 'react'
import axios from 'axios'
import { USER } from '../types/User.types'
import {API_URL} from '../App'
function Login() {
  const login = async ( loginData:USER ) => {
    const response = await axios.post(`${API_URL}/user/login`, loginData)

    if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
}
console.log(response.data);
return response.data
}
    const handleLogin = (event:any) =>{
        event.preventDefault()
        const loginData:any = {
          email: event.target.email.value,
          password: event.target.password.value
        }
        login(loginData)
       
    }
  return (
    <div>
        <form action="login" onSubmit={handleLogin}>
            <input type="email" name="email" id="email" placeholder='email' autoComplete='email'/>
            <input type="password" name="password" id="password" placeholder='password' autoComplete='password'/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login