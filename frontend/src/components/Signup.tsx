import React from 'react'
import axios from 'axios'
import styled from 'styled-components';

import FormContainer from '../styledComponents/FormContainer';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faUserTie, faLock } from '@fortawesome/free-solid-svg-icons'


import { useDispatch } from 'react-redux';
import { USER } from '../types/User.types'
import { setUser } from '../redux/actions'
import {API_URL} from '../App'
import AJV from 'ajv'
const ajv = new AJV()
const signupDataSchema = {
  type: "object",
  properties:{
  username:{type:"string"},
  email: {type: "string"},
  password: {type: "string"}
  },
  required:["username", "email", "password"],
  additionalProperties: false
}
const LeftFormContainer = styled(FormContainer)`
justify-content: left;
padding-left:3rem
`

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const signup = async ( signupData:USER ) => {
    const response = await axios.post(`${API_URL}/api/user/signup`, signupData)

    if (response.data) {
      dispatch(setUser(response.data))
}
return response.data
}
    const handleSignup = (event:any) =>{
        event.preventDefault()
        const signupData:any = {
          username: event.target.signupUsername.value,
          email: event.target.signupEmail.value,
          password: event.target.signupPassword.value
        }
        const validSignupData = ajv.validate(signupDataSchema, signupData)
        if(validSignupData){
          signup(signupData)
        }else{
          console.error(ajv.errors)
        }
        
       
    }
  return (
    <LeftFormContainer className='Signup'>
      <Form onSubmit={handleSignup} className="p-3 my-2 text-muted bg-light">
      <h2 className='py-2' id='signup' >Sign up</h2>
        <FormGroup floating>
          <Input
            id="signupUsername"
            name="signupUsername"
            placeholder="username"
            type="text"
          />
          <Label for="signupUsername">
          Username
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
          Email
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
          Password
          </Label>
        </FormGroup>
        <Button className='signup-submit bg-success'>
          Submit
        </Button>
      </Form>
    </LeftFormContainer>
  )
}

export default Signup