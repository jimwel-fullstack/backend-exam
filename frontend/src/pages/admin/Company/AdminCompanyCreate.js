import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import AdminTemplate from '../../../components/templates/AdminTemplate'
import { CREATE_COMPANY } from '../../../features/companySlice'

const AdminCompanyCreate = () => {
  const auth = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [logo, setLogo] = useState('')
  const [website, setWebsite] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleCreate = async (e) => {
    e.preventDefault()

    if (!auth) {
      setError('You must be logged in')
      return
    }

    const company = { name, email, logo, website }

    const res = await fetch('/api/companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(company),
    })
    const json = await res.json()

    if (!res.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }

    if (res.ok) {
      dispatch(
        CREATE_COMPANY({
          _id: json._id,
          name: name,
          email: email,
          logo: logo,
          website: website,
        })
      )
      setName('')
      setEmail('')
      setLogo('')
      setWebsite('')
      setError(null)
      console.log('new blog added', json)
    }
  }
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
            <form className="card" onSubmit={handleCreate}>
              <div className="card-body">
                {error && (
                  <div class="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <div className="mb-3">
                  <label class="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label class="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label class="form-label">Logo</label>
                  <input
                    type="text"
                    className="form-control"
                    value={logo}
                    onChange={(e) => {
                      setLogo(e.target.value)
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label class="form-label">Website</label>
                  <input
                    type="text"
                    className="form-control"
                    value={website}
                    onChange={(e) => {
                      setWebsite(e.target.value)
                    }}
                  />
                </div>
                <div class="d-grid">
                  <button class="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminTemplate>
  )
}

export default AdminCompanyCreate
