import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
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
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    useEffect(()=>{
      const user=  JSON.parse(localStorage.getItem('user'));
      console.log(user)
    },[])
    const navigate=useNavigate();
    const handleLogin=()=>{
        if(user.email==email && user.password==password){
            navigate("/dashboard");
        }
        else{
            alert("User Not found")
        }
    }
  return (
    <Container>
        <Form>
        <Title>Login Page</Title>
            
        <Label htmlFor="email">Email</Label><br/>
       <Input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/><br/>
       <Label htmlFor="password">Password</Label><br/>
      <Input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
      <Button type="submit" onClick={handleLogin()}>Login</Button>
        </Form>
    </Container>
  )
}

export default Login
