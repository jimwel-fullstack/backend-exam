import React from 'react'
import { Link } from 'react-router-dom'

import AdminTemplate from '../../../components/templates/AdminTemplate'

const AdminCompanyList = () => {
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
                <tr className="align-middle">
                  <td>
                    <img
                      className="rounded"
                      width="50px"
                      height="50px"
                      src="https://pm1.narvii.com/6328/939399b0bc29e6982b7a59961a1f05ad15ebf494_hq.jpg"
                      alt=""
                    />
                  </td>
                  <td>Company Name</td>
                  <td>Company Email</td>
                  <td>Company Website</td>
                  <td>
                    <div
                      class="btn-group btn-group-sm"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Link
                        class="btn btn-info"
                        to="/admin/edit/company/companyId"
                      >
                        Edit
                      </Link>
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
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
