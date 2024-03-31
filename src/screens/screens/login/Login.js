import React, { useState } from 'react';
import { signIn } from '../../../api/user';
import { LoginScreenContainer, Form, Input, SubmitBtn, PasswordContainer, PWButton } from './Login.styles';
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = ({ user, setUser, notify }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)

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
        console.log(signInResponse)
      }
    } catch(e) {
      notify(`something went wrong`, 'danger')
      console.log('something went wrong')
    }
  }

  const handleChangeShowPassword = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowPassword(!showPassword)
  }

  return (
    <LoginScreenContainer>
      <Form onSubmit={onRegister}>
        <Input type="text" name="email" value={email} placeholder="email" onChange={onChange} required/>
        
        <PasswordContainer>
          <Input type={showPassword ? "text" : "password"} name="password" value={password} placeholder="password" onChange={onChange} required/>
          { showPassword ? 
            <PWButton onClick={handleChangeShowPassword}>
              <FaEyeSlash size={25}/>
            </PWButton>
           : 
             <PWButton onClick={handleChangeShowPassword}>
              <FaRegEye size={25}/>
             </PWButton>
           }
        </PasswordContainer>
        <SubmitBtn type="submit">Login</SubmitBtn>
      </Form>
    </LoginScreenContainer>
  )
}

export default Login