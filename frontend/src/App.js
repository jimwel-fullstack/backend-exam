import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PublicRoutes from './components/routes/PublicRoutes'
import AdminRoutes from './components/routes/AdminRoutes'
import EmployeeRoutes from './components/routes/EmployeeRoutes'

import AdminCompanyList from './pages/admin/Company/AdminCompanyList'
import AdminCompanyCreate from './pages/admin/Company/AdminCompanyCreate'
import AdminCompanyUpdate from './pages/admin/Company/AdminCompanyUpdate'
import Home from './pages/Home'
import CreateAccount from './pages/CreateAccount'
import EmployeeCompanyList from './pages/employee/Company/EmployeeCompanyList'

const App = () => {
  const auth = useSelector((state) => state.auth.value)

  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route element={<PublicRoutes auth={auth} />}>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route element={<AdminRoutes auth={auth} />}>
        <Route path="/admin" element={<AdminCompanyList />} />
        <Route path="/admin/add/company" element={<AdminCompanyCreate />} />
        <Route
          path="/admin/edit/company/:companyId"
          element={<AdminCompanyUpdate />}
        />
        <Route path="/admin/employees" element={<AdminCompanyList />} />
        <Route path="/admin/add/employee" element={<AdminCompanyList />} />
        <Route path="/admin/edit/employee" element={<AdminCompanyList />} />
      </Route>

      {/* EMPLOYEE ROUTES */}
      <Route element={<EmployeeRoutes auth={auth} />}>
        <Route path="/employee" element={<EmployeeCompanyList />} />
        <Route path="/employee/employees" element={<EmployeeCompanyList />} />
      </Route>

      {/* FALLBACK ROUTES */}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default App
