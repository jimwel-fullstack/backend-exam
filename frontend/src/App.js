import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminCompanyList from './pages/admin/Company/AdminCompanyList'
import AdminCompanyCreate from './pages/admin/Company/AdminCompanyCreate'
import AdminCompanyUpdate from './pages/admin/Company/AdminCompanyUpdate'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminCompanyList />} />
      <Route path="/admin/add/company" element={<AdminCompanyCreate />} />
      <Route
        path="/admin/edit/company/:companyId"
        element={<AdminCompanyUpdate />}
      />
      <Route path="/admin/employees" element={<AdminCompanyList />} />
      <Route path="/admin/add/employee" element={<AdminCompanyList />} />
      <Route path="/admin/edit/employee" element={<AdminCompanyList />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default App
