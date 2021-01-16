import React, { useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import UserInformation from '../components/UserInformation';
import { CustomerContext } from '../contexts/CustomerContext';
import { ButtonStyled, HeadingStyled,TableStyled,DeleteButton } from '../styles/ProjectStyles';

export default function CustomerDetailPage(props) {
     const {customerList,setCustomerList,customerItem,setCustomerItem,history}=useContext(CustomerContext)
    const customerId=props.match.params.id
  
    const url=`https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
    const token=localStorage.getItem("User");
    useEffect(()=>{
        fetch(url, {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data)
        setCustomerItem(data)})
    },[])
    function deleteCustomer(){
    // const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
    // const token = localStorage.getItem("User")
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(()=>{
        const new_list = customerList.filter(item => item.id !== customerItem.id)
        setCustomerList(new_list)
        //filter and update customer list-added fetch in customerList page, so no point in filter here if already push to customers?
        history.push('/customers')
    })
  }  
    return (
        <>
        <UserInformation />
         {customerItem && (<>
        <HeadingStyled>Details about customer- {customerItem.name}</HeadingStyled>     
        <TableStyled>
            <tbody>
                <tr>
                    <td>Organisation Number</td>
                    <td>{customerItem.organisationNr}</td>
                </tr>
                <tr>
                    <td>VAT Number</td>
                    <td>{customerItem.vatNr}</td>
                </tr>
                <tr>
                    <td>Reference</td>
                    <td>{customerItem.reference}</td>
                </tr>
                <tr>
                    <td>Payment Term</td>
                    <td>{customerItem.paymentTerm}</td>
                </tr>
                <tr>
                    <td>Website</td>
                    <td>{customerItem.website}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>

                        {customerItem.email}

                    </td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>{customerItem.phoneNumber}</td>
                </tr>
            
            </tbody>
        </TableStyled>
        <div className="d-flex justify-content-center ">
        <DeleteButton onClick={deleteCustomer}>Delete Customer</DeleteButton>
        <ButtonStyled className="ml-5"><Link  className="text-dark" to={`/customers/${customerId}/edit`}>Edit Customer</Link> </ButtonStyled>
         </div>
         </>)}
        </>
    )
}
