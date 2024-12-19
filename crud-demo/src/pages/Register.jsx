import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router';
import styled from 'styled-components';
const Container=styled.div`
width:100%;
height:100vh;
display:flex;
align-items:center;
justify-content:center;`
const Form=styled.div`
max-width:500px;
display:flex:
flex-direction:column;
align-items:center;
padding:20px;
border: 2px solid #5555;
border-radius: 10px;
gap:5px;
`
const Title=styled.h3`
text-align:center;
font-size:1rem`
const Input=styled.input`
margin-bottom:15px;
`
const Button=styled.button`
padding:5px;`
const Label=styled.label`
text-align:left;`

function Register() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleRegistration=()=>{
        const user={email,password}
        localStorage.setItem('user',JSON.stringify(user));
        //clear input fields after submit
        // setEmail('');
        // setPassword('');
    }
    const navigate=useNavigate();
    const goToLogin=()=>{
        navigate('/login')
    }
  return (
    <Container>

    <Form>
        <Title>Register</Title>
        <Label htmlFor="email">Email</Label><br/>
        <Input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}>
        </Input><br/>
        <Label htmlFor="password">Password</Label><br/>
      <Input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
      <Button type="submit" onClick={handleRegistration()}>Register</Button>
      <Button  onClick={goToLogin()}>Go To Login Page</Button>
    </Form>
    </Container>
  )
}

export default Register
