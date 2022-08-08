import React from 'react'

const Home = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="text-center mb-3">Sign in</h4>

              <div className="mb-3">
                <label class="form-label">Email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label class="form-label">Password</label>
                <input type="password" className="form-control" />
              </div>
              <div class="d-grid">
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
