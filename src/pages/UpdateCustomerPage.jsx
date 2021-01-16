import React, {useEffect,useContext } from 'react'
import {useHistory }from 'react-router-dom'
import UserInformation from '../components/UserInformation'
import { CustomerContext } from '../contexts/CustomerContext'
import { ButtonStyled, HeadingStyled, InputStyled, TableStyled } from '../styles/ProjectStyles'
export default function UpdateCustomerPage(props) {
    const customerId = props.match.params.id
    const history=useHistory()
    const {customerDetail,setCustomerDetail}=useContext(CustomerContext)
  function getCustomerItem() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
    const token = localStorage.getItem("User")
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setCustomerDetail(data)
    })
  }

  useEffect( () => {
    getCustomerItem()
  }, [])

  function handleOnChange(e) {
    const name = e.target.name
    const value = e.target.value
    const newObj = {...customerDetail, [name]: value}
    setCustomerDetail(newObj)
  }

  function renderInput(name, label, type) {
    return (
      <tr>
       <td> <label htmlFor={name}>{label}</label></td>
        <td><InputStyled secondary
          type={type || "text"} 
          name={name}
          value={customerDetail[name] || ""}
          id={name}
          onChange={handleOnChange}
        /></td>
      </tr>
    )
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
    const token = localStorage.getItem("User")
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(customerDetail),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then((data) => {console.log(data)
     history.push(`/customers/${customerId}`)})
  }

  return (
    <div>
      <UserInformation />
      <HeadingStyled>Update Customer</HeadingStyled>
      <form onSubmit={handleOnSubmit}>
        <TableStyled>
          <tbody>
            {renderInput("name", "Customer Name")}
            {renderInput("organisationNr", "Organisation Number")}
            {renderInput("vatNr", "Vat Number")}
            {renderInput("reference", "Reference")}
            {renderInput("paymentTerm", "Payment Term", "number")}
            {renderInput("website", "Website", "url")}
            {renderInput("email", "Customer Email", "email")}
            {renderInput("phoneNumber", "Phone Number", "tel")} 
        </tbody>
        </TableStyled>
        <ButtonStyled className="mx-auto" type="submit">Update Customer</ButtonStyled>
        
      </form>

    </div>
  )
}

