import React from 'react'
import { Link } from 'react-router-dom'

const AdminTemplate = ({ page, children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin">
            <strong>Mini-CRM</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${page === 'companies' && 'active'}`}
                  aria-current="page"
                  to="/admin"
                >
                  Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${page === 'employees' && 'active'}`}
                  aria-current="page"
                  to="/admin/employees"
                >
                  Employees
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <p className="mb-0 me-2">jimwel@fullstack.ph</p>
              <button className="btn btn-secondary" type="submit">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">{children}</div>
    </div>
  )
}

export default AdminTemplate
