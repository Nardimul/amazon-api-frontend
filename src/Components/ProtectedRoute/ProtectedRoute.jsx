import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider'

const ProtectedRoute = ({children, msg, redirect}) => {
  const navigate =useNavigate()
  const [{user}, dispatch] = useContext(DataContext)

  useEffect(()=>{
    if(!user){
      navigate("/auth", {state:{msg, redirect}})
    }
    // for every user
  }, [user])
  return children
}

// payment unauthenticated---> /auth ..former(/---home) Go to authentication--now redirect to payment
export default ProtectedRoute
