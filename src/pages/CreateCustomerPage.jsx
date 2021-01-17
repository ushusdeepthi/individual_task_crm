import React, { useState,useContext} from 'react'
import UserInformation from '../components/UserInformation'
import { CustomerContext } from '../contexts/CustomerContext'
import { ButtonStyled, HeadingStyled, InputStyled} from '../styles/ProjectStyles'

export default function CreateCustomerPage() {
    const [createCustomer,setCreateCustomer]=useState({})
    const {history,setCustomerList, customerList,getItem}=useContext(CustomerContext) 
    function renderInput(name, label, type) {
      return (
        <div className="m-2 col-md-12 align-self-center">
          <label className="w-25"htmlFor={name}>{label}</label>
          <InputStyled
            type={type || "text"} 
            name={name} 
            onChange={handleOnChange}
            id={name} 
          />
          <br/>
        </div>
      )
    }
    const handleOnChange=((e)=>{
      setCreateCustomer({...createCustomer,[e.target.name]:e.target.value})
    
    })
    const handleOnSubmit= ((e)=>{
      e.preventDefault()
    
      if(validateVat()===true){
      const url = "https://frebi.willandskill.eu/api/v1/customers/"
      const token=localStorage.getItem("User")
      fetch(url, {
      method: "POST",
      body: JSON.stringify(createCustomer),
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      }
      })
      .then( res => res.json())
      .then( data => {
        setCustomerList([...customerList,data])
        // getItem()
        //context variable updated here but not required?
         //push to /customers fetches data again within useEffect and thus updates page from backend
          history.push('/customers')
      })
    }
  
    })
    function validateVat(){
      let vatNr=document.getElementById("vatNr").value.trim()
      let letters=vatNr.slice(0,2)
      let digits=vatNr.slice(2,13)
      if(letters=="SE" && digits.length===10 && !isNaN(digits)) return true
      else{ 
        alert("Vat Number should be in format SE followed by 10 digits without any space or special characters")
      return false
      } 

    }
    return (<>
      <UserInformation />
      <HeadingStyled >Let's create a new customer</HeadingStyled>
        <div className="container">
          {/* <div className="row "> */}
            <form className="row" onSubmit={handleOnSubmit}>
                {renderInput("name", "Customer Name")}
                {renderInput("organisationNr", "Organisation Number")}
                {renderInput("vatNr", "Vat Number")}
                {renderInput("reference", "Reference")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("website", "Website", "url")}
                {renderInput("email", "Customer Email", "email")}
                {renderInput("phoneNumber", "Phone Number", "tel")}   
                <ButtonStyled className="col-md-6 m-5" type="submit">Create Customer</ButtonStyled>
            </form>
          {/* </div> */}
            <code>{JSON.stringify(createCustomer)}</code>
        </div>
        </>
    )
}
