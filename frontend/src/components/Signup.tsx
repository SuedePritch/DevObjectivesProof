import React from 'react'
import axios from 'axios'

import FormContainer from '../styledComponents/FormContainer';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserTie, faLock } from '@fortawesome/free-solid-svg-icons'


import { useDispatch } from 'react-redux';
import { USER } from '../types/User.types'
import { setUser } from '../redux/actions'
import {API_URL} from '../App'
function Signup() {
  const dispatch = useDispatch();
  const signup = async ( signupData:USER ) => {
    const response = await axios.post(`${API_URL}/user/`, signupData)

    if (response.data) {
      dispatch(setUser(response.data))
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
    <FormContainer>
      <Form onSubmit={handleSignup} className="p-3 my-2 text-muted bg-light">
      <h2 className='py-2'>Sign up</h2>
        <FormGroup floating>
          <Input
            id="signupUsername"
            name="signupUsername"
            placeholder="username"
            type="text"
          />
          <Label for="signupUsername">
          <FontAwesomeIcon icon={faUserTie} />&nbsp;Username
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="signupEmail"
            name="signupemail"
            placeholder="Email"
            type="email"
          />
          <Label for="signupEmail">
          <FontAwesomeIcon icon={faEnvelope} />&nbsp;Email
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="signupPassword"
            name="signupPassword"
            placeholder="Password"
            type="password"
          />
          <Label for="signupPassword">
          <FontAwesomeIcon icon={faLock} />&nbsp;Password
          </Label>
        </FormGroup>
        <Button className='bg-success'>
          Submit
        </Button>
      </Form>
    </FormContainer>
  )
}

export default Signup