import React from 'react'
import axios from 'axios'
import { USER } from '../types/User.types'
import {API_URL} from '../App'
function Signup() {
  const signup = async ( signupData:USER ) => {
    const response = await axios.post(`${API_URL}/user/`, signupData)

    if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
}
return response.data
}
    const handleSignup = (event:any) =>{
        event.preventDefault()
        const signupData:any = {
          username: event.target.username.value,
          email: event.target.email.value,
          password: event.target.password.value
        }
        signup(signupData)
       
    }
  return (
    <div>
        <form action="signup" onSubmit={handleSignup}>
            <input type="username" name="username" id="username" placeholder='username' autoComplete='username'/>
            <input type="email" name="email" id="email" placeholder='email' autoComplete='email'/>
            <input type="password" name="password" id="password" placeholder='password' autoComplete='password'/>
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default Signup