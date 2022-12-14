import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import AdminTemplate from '../../../components/templates/AdminTemplate'
import { SET_COMPANIES, DELETE_COMPANY } from '../../../features/companySlice'

const AdminCompanyList = () => {
  const dispatch = useDispatch()

  const auth = useSelector((state) => state.auth.value)
  const companies = useSelector((state) => state.companies.value)

  useEffect(() => {
    const fetchComapnies = async () => {
      const res = await fetch('/api/companies', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      const json = await res.json()

      if (res.ok) {
        dispatch(SET_COMPANIES(json))
      }
    }

    if (auth) {
      fetchComapnies()
    }
  }, [])

  const handleDelete = async (company) => {
    if (!auth) {
      return
    }

    const res = await fetch(`/api/companies/${company._id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })

    const json = await res.json()

    if (res.ok) {
      dispatch(
        DELETE_COMPANY({
          id: company._id,
        })
      )
    }
  }

  return (
    <AdminTemplate page="companies">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">Companies</h3>
          <Link className="btn btn-primary" to="/admin/add/company">
            Add
          </Link>
        </div>

        <div className="card">
          <div className="card-body">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Logo</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.length > 0 ? (
                  companies.map((company) => {
                    return (
                      <tr className="align-middle" key={company._id}>
                        <td>
                          <div
                            className="d-flex justify-content-center align-items-center overflow-hidden"
                            style={{ width: '50px', height: '50px' }}
                          >
                            <img
                              className="rounded"
                              style={{ height: '100%' }}
                              src={`http://localhost:4000/public/uploads/${company.logo}`}
                              alt=""
                            />
                          </div>
                        </td>
                        <td>{company.name}</td>
                        <td>{company.email}</td>
                        <td>
                          <a href={company.website}>{company.website}</a>
                        </td>
                        <td>
                          <div
                            class="btn-group btn-group-sm"
                            role="group"
                            aria-label="Basic example"
                          >
                            <Link
                              class="btn btn-info"
                              to={`/admin/edit/company/${company._id}`}
                            >
                              Edit
                            </Link>
                            <button
                              class="btn btn-danger"
                              onClick={() => {
                                handleDelete(company)
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td className="text-center" colSpan="100%">
                      No results
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <nav>
              <ul class="pagination mb-0">
                <li class="page-item disabled">
                  <a
                    class="page-link"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    1
                  </a>
                </li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="/">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </AdminTemplate>
  )
}

export default AdminCompanyList
