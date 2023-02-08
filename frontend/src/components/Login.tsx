import React from 'react'
import axios from 'axios'

import FormContainer from '../styledComponents/FormContainer';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from 'react-redux';
import { USER } from '../types/User.types'
import { setUser } from '../redux/actions'
import {API_URL} from '../App'




function Login() {
  const dispatch = useDispatch();
  const login = async ( loginData:USER ) => {
    const response = await axios.post(`${API_URL}/api/user/login`, loginData)

    if (response.data) {
    dispatch(setUser(response.data))
      // localStorage.setItem('user', JSON.stringify(response.data))
}
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
    <FormContainer className='Login'>
      <Form onSubmit={handleLogin} className="p-3 my-2 text-muted bg-light">
        <h2 className='py-2'>Login</h2>
        <FormGroup floating>
          <Input
            id="loginEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
          <Label for="loginEmail">
          <FontAwesomeIcon icon={faEnvelope} />&nbsp;Email
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="loginPassword"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Label for="loginPassword">
          <FontAwesomeIcon icon={faLock} />&nbsp;Password
          </Label>
        </FormGroup>
        <Button className='login-submit bg-success'>
          Submit
        </Button>
      </Form>
    </FormContainer>
  )
}

export default Login