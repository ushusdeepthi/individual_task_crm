import React, {useState} from 'react'
import { Switch,Route } from 'react-router-dom'
import CreateCustomerPage from './pages/CreateCustomerPage'
import CustomerDetailPage from './pages/CustomerDetailPage'
import CustomerListPage from './pages/CustomerListPage'
import LoginPage from './pages/LoginPage'
import UpdateCustomerPage from './pages/UpdateCustomerPage'
import { CustomerProvider } from './contexts/CustomerContext'

export default function App() {
  
  return (
    <div>  
    <CustomerProvider>
      <Switch>  
          <Route path="/customers/:id/edit" component={UpdateCustomerPage} />
          <Route path="/customers/:id" component={CustomerDetailPage} />  
          <Route path="/customers">
            <CustomerListPage />
          </Route>
          <Route path="/create">
            <CreateCustomerPage />
          </Route>  
        <Route path="/">
          <LoginPage />
        </Route>  
      </Switch>
      </CustomerProvider>
    </div>
  )
}
