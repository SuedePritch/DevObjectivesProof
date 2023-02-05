import React from 'react'

function Login() {

    const handleLogin = (event:any) =>{
        event.preventDefault()
        
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