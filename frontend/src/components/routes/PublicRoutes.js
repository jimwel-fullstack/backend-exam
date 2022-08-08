import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PublicRoutes = ({ auth }) => {
  if (!auth) {
    return <Outlet />
  } else if (auth.role === 'admin') {
    return <Navigate to="/admin" replace={true} />
  } else if (auth.role === 'employee') {
    return <Navigate to="/employee" replace={true} />
  }
}

export default PublicRoutes
