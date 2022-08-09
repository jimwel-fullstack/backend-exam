import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import EmployeeTemplate from '../../../components/templates/EmployeeTemplate'
import { SET_COMPANIES } from '../../../features/companySlice'

const EmployeeCompanyList = () => {
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
  return (
    <EmployeeTemplate page="companies">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">Companies</h3>
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
    </EmployeeTemplate>
  )
}

export default EmployeeCompanyList
