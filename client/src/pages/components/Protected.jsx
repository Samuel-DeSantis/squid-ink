import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import UserContext from '../../context/UserContext'

import Navbar from './Navbar'

function Protected() {

  const { user, sign_in, sign_out } = useContext(UserContext)

  return user ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : <Navigate to='/' />
}

export default Protected