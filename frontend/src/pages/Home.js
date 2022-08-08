import React, { useState } from 'react'

import useSignin from '../hooks/useSignin'

const Home = () => {
  const { signin, error, isLoading } = useSignin()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignin = async (e) => {
    e.preventDefault()

    await signin(email, password)
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <form className="card" onSubmit={handleSignin}>
            <div className="card-body">
              <h4 className="text-center mb-3">Sign in</h4>

              {error && (
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

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
                <label class="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>

              <div class="d-grid">
                <button class="btn btn-primary" disabled={isLoading}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
