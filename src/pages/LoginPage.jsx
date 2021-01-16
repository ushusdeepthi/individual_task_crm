import React, { useState,useContext} from 'react'
import { FiLogIn} from 'react-icons/fi'
import { ButtonStyled, DivStyled, HeadingStyled, InputStyled } from '../styles/ProjectStyles'
import { CustomerContext } from '../contexts/CustomerContext'


export default function LoginPage() {
      const {history,setUserInfo}=useContext(CustomerContext) 
        const [formData,setFormData]=useState({
        email:"Deepthi.Ushus@yh.nackademin.se",
        password: "javascriptoramverk"
    })
    function handleOnSubmit(e){
        e.preventDefault()
        const url="https://frebi.willandskill.eu/api-token-auth/"
        const payload={
            email:formData.email,
            password:formData.password
        }
        fetch(url,{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(resp=> resp.json())
        .then(data=>{
            localStorage.setItem("User",data.token)
           getUserInfo()
            history.push('/customers')
        })    
    }
   
    function handleOnChange(e){
        setFormData({...formData, [e.target.name]:e.target.value})
        console.log(formData)
    }
     function getUserInfo(){
        const token=localStorage.getItem("User")
    fetch("https://frebi.willandskill.eu/api/v1/me/", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setUserInfo(data)})
    }
    return (
        <DivStyled secondary >
            <HeadingStyled>Login page</HeadingStyled>
            <FiLogIn  />
            <form onSubmit={handleOnSubmit} >
                <label htmlFor="email">Email</label>
                <InputStyled secondary
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleOnChange}/>
                <label htmlFor="password">Password</label>
                <InputStyled secondary
                    type="text"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleOnChange}/>
                <ButtonStyled type="submit">Login</ButtonStyled>
            </form>
            
        </DivStyled>
    )
}