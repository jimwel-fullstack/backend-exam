import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AdminRoutes = ({ auth }) => {
  if (!auth) {
    return <Navigate to="/" replace={true} />
  } else if (auth.role === 'admin') {
    return <Outlet />
  } else {
    return <Navigate to="/" replace={true} />
  }
}

export default AdminRoutes
