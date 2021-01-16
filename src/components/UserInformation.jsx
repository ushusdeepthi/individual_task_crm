import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {RiShutDownLine} from "react-icons/ri";
import { CustomerContext } from '../contexts/CustomerContext';

export default function UserInformation() {
    const {userInfo,history}=useContext(CustomerContext)  
    function handleOnClick(){
       localStorage.removeItem("User")
        history.push('/login')
        alert('Will you discontinue the session!!!')
    }
    return (
        <nav className="d-flex justify-content-between bg-info p-3 ">
            <div>
            {userInfo && (<>
            <h6>User: {userInfo.firstName} {userInfo.lastName} </h6>
            <h6>E-mail: {userInfo.email} </h6> </>)}
            </div>
            <h6 className="align-self-center"><Link className="text-dark" to="/customers">Home</Link></h6>
            <h6 className="align-self-center"><Link className="text-dark" to="/Create">Create</Link></h6>
            <h6 className="align-self-center" onClick={handleOnClick}>Logout <RiShutDownLine /></h6>
        </nav>
    )
}
