import React,{ useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import CustomerListItem from '../components/CustomerListItem'
import UserInformation from '../components/UserInformation'
import {CustomerContext} from '../contexts/CustomerContext'
import { ButtonStyled, HeadingStyled } from '../styles/ProjectStyles'

export default function CustomerListPage() {
    const {customerList,getItem}=useContext(CustomerContext)  
    useEffect(()=>{
        getItem()
        console.log("hello. How are you there!!!")
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
            <div className="row justify-content-center m-3">
                <ButtonStyled >
                    <Link className="text-dark" to="/create">
                        Create a new customer
                    </Link>
                </ButtonStyled>
            </div>
        </div>
        
        </>
    )
}
