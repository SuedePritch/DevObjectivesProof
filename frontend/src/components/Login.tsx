import React from 'react'
import axios from 'axios'
import styled from 'styled-components';

import FormContainer from '../styledComponents/FormContainer';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

import { useDispatch } from 'react-redux';
import { USER } from '../types/User.types'
import { setUser } from '../redux/actions'
import {API_URL} from '../App'

import AJV from 'ajv'
const ajv = new AJV()
const loginDataSchema = {
  type: "object",
  properties:{
  email: {type: "string"},
  password: {type: "string"}
  },
  required:["email", "password"],
  additionalProperties: false
}
const RightFormContainer = styled(FormContainer)`
justify-content: right;
padding-right:3rem
`


const Login: React.FC = () => {
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
        const validLoginData = ajv.validate(loginDataSchema, loginData)
        if(validLoginData){
          login(loginData)
        }else{
          console.error(ajv.errors)
        }
       
    }

  return (
    <RightFormContainer className='Login'>
      <Form onSubmit={handleLogin} className="p-3 my-2 text-muted bg-light">
        <h2 id="login" className='py-2'>Login</h2>
        <FormGroup floating>
          <Input
            id="loginEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
          <Label for="loginEmail">
          Email
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
          Password
          </Label>
        </FormGroup>
        <Button className='login-submit bg-success'>
          Submit
        </Button>
      </Form>
    </RightFormContainer>
  )
}

export default Login