import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AdminTemplate from '../../../components/templates/AdminTemplate'

const AdminCompanyUpdate = () => {
  let { companyId } = useParams()

  const auth = useSelector((state) => state.auth.value)

  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newLogo, setNewLogo] = useState('')
  const [newWebsite, setNewWebsite] = useState('')

  const handleUpdate = async (e) => {
    e.preventDefault()

    const Company = {
      name: newName,
      email: newEmail,
      logo: newLogo,
      website: newWebsite,
    }

    const res = await fetch(`/api/companies/${companyId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(Company),
    })
    const json = await res.json()

    if (res.ok) {
      console.log('updated blog', json)
    }
  }

  return (
    <AdminTemplate>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">Update Company</h3>
          <Link className="btn btn-primary" to="/admin">
            Back
          </Link>
        </div>

        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form className="card" onSubmit={handleUpdate}>
              <div className="card-body">
                <div className="mb-3">
                  <label class="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newName}
                    onChange={(e) => {
                      setNewName(e.target.value)
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label class="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newEmail}
                    onChange={(e) => {
                      setNewEmail(e.target.value)
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label class="form-label">Logo</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newLogo}
                    onChange={(e) => {
                      setNewLogo(e.target.value)
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label class="form-label">Website</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newWebsite}
                    onChange={(e) => {
                      setNewWebsite(e.target.value)
                    }}
                  />
                </div>
                <div class="d-grid">
                  <button class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminTemplate>
  )
}

export default AdminCompanyUpdate
