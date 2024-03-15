import React, { useState } from 'react';
import { signIn } from '../../../api/user';
import { LoginScreenContainer, Form, Input, SubmitBtn } from './Login.styles';
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser, notify }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '', 
    password: '', 
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  
  const onRegister = async (e) => {
    e.preventDefault()
    try {
      console.log('form submit')
      const signInResponse = await signIn(formData)
      console.log(signInResponse)
      
      setUser(signInResponse.data.user);

      if (signInResponse.data.user.isAdmin === true) {
        notify('login successful')
        navigate("/contacts");
      } else {
        notify(`${signInResponse.data.msg}`, 'danger')
        console.log('not an admin')
      }
    } catch(e) {
      notify(`something went wrong`, 'danger')
      console.log('something went wrong')
    }
  }

  return (
    <LoginScreenContainer>
      <Form onSubmit={onRegister}>
        <Input type="text" name="email" value={email} placeholder="email" onChange={onChange} required/>
        <Input type="password" name="password" value={password} placeholder="password" onChange={onChange} required/>
        <SubmitBtn type="submit">Login</SubmitBtn>
      </Form>
    </LoginScreenContainer>
  )
}

export default Login