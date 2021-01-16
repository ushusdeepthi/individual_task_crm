import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerListItem({id,name}) {
    return (
       
            <div className="col-sm-4">
            <h5 className="border rounded p-3 bg-info text-center">
                <Link className="text-dark" to ={`/customers/${id}`}>
                   {name}
                </Link>   
            </h5>
            </div>
        
       
    )
}
