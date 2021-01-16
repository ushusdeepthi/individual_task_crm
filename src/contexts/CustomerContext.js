import React, {useState,createContext} from 'react'
import {useHistory }from 'react-router-dom'

export const CustomerContext = createContext()

export function CustomerProvider({children}){
  const [customerList,setCustomerList]=useState([])
  const [userInfo,setUserInfo]=useState({})
  const [customerDetail,setCustomerDetail]=useState({})
  const [customerItem, setCustomerItem] = useState(null)
  const history=useHistory()
  
    const getItem=(()=>{
      const url = "https://frebi.willandskill.eu/api/v1/customers/"
      const token=localStorage.getItem("User")
        fetch(url,{
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then((data)=> {
            console.log(data.results)
            setCustomerList(data.results)
        })
     })
    // function getUserInfo() {
    //   const token=localStorage.getItem("User")
    // fetch("https://frebi.willandskill.eu/api/v1/me/", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${token}`
    //   }
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //   setUserInfo(data)})
    // }
  const customerContextValue = {
    customerList, setCustomerList, 
    userInfo, setUserInfo,
    getItem,
    // getUserInfo,
    customerDetail,setCustomerDetail,
    customerItem, setCustomerItem,
    history
  } 
  return (
      <CustomerContext.Provider value={customerContextValue}>
          {children}
      </CustomerContext.Provider>
  )
}

