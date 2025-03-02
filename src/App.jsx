import React, { useEffect, useState,useContext } from 'react'
import Login from './componenets/Auth/Login'
import EmployeeDashboard from './componenets/Dashborad/EmployeeDashboard'
import AdminDashboard from './componenets/Dashborad/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import {AuthContext} from './context/AuthProvider'

const App = () => {
  const [user,setUser]=useState(null);
  const authData=useContext(AuthContext);

  useEffect(() => {
    if(authData){
      const loggedInUser=localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  
    
  }, [authData])
  
  
  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(authData && authData.employees.find((e)=>email==e.email && e.password==password)){
      setUser('employees')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }
    else{
      alert('Invalid Credentials')
    }
  }

  useEffect(() => {
    setLocalStorage()
  },)
  useEffect(() => {
    getLocalStorage()
  },)
  
  

  return (
    <>

      {!user? <Login handleLogin={handleLogin}/>:''}
      {user=='admin'?<AdminDashboard/>:<EmployeeDashboard/>}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
