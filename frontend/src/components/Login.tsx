import React from 'react'

function Login() {

  return (
    <div>
        <form action="login" style={{display: "flex",flexDirection: "column", maxWidth: "50%", padding:"3rem"}}>
            <input type="email" name="email" id="email" placeholder='email' autoComplete='email'/>
            <input type="password" name="password" id="password" placeholder='password' autoComplete='password'/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login