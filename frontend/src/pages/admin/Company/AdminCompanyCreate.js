import React from 'react'
import { Link } from 'react-router-dom'

import AdminTemplate from '../../../components/templates/AdminTemplate'

const AdminCompanyCreate = () => {
  return (
    <AdminTemplate>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">Add Company</h3>
          <Link className="btn btn-primary" to="/admin">
            Back
          </Link>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <label class="form-label">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label class="form-label">Email</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label class="form-label">Logo</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="mb-3">
                  <label class="form-label">Website</label>
                  <input type="text" className="form-control" />
                </div>
                <div class="d-grid">
                  <button class="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  )
}

export default AdminCompanyCreate
