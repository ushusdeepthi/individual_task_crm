import React,{ useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import CustomerListItem from '../components/CustomerListItem'
import UserInformation from '../components/UserInformation'
import {CustomerContext} from '../contexts/CustomerContext'
import { DivStyled,ButtonStyled, HeadingStyled } from '../styles/ProjectStyles'

export default function CustomerListPage() {
    const {customerList,getItem}=useContext(CustomerContext)  
    useEffect(()=>{
        getItem()
    },[])
   
    
    return (
       <>
            <UserInformation />
            <HeadingStyled >List of Customers</HeadingStyled>
            <div className="container">
             <div className="row">
            {customerList && customerList.map((customer)=>{
                return  <CustomerListItem key={customer.id} {...customer} />     
            })}
                </div>
            <ButtonStyled className="row  justify-content-center ">
                <Link className="text-dark" to="/create">
                    Create a new customer
                </Link>
            </ButtonStyled>
        </div>
        
        </>
    )
}
