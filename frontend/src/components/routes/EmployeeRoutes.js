import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const EmployeeRoutes = ({ auth }) => {
  if (!auth) {
    return <Navigate to="/" replace={true} />
  } else if (auth.role === 'employee') {
    return <Outlet />
  } else {
    return <Navigate to="/" replace={true} />
  }
}

export default EmployeeRoutes
