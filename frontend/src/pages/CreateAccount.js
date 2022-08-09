import React, { useState } from 'react'

import useSignup from '../hooks/useSignup'

const CreateAccount = () => {
  const { signup, error, isLoading } = useSignup()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()

    await signup(email, password, role)
    console.log('good')
  }

  return (
    <form onSubmit={handleSignup}>
      <h3>Signup</h3>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <select
        value={role}
        onChange={(e) => {
          setRole(e.target.value)
        }}
      >
        <option value="">--Select Role--</option>
        <option value="admin">Admin</option>
        <option value="employee">Employee</option>
      </select>
      <button type="submit" disabled={isLoading}>
        Signup
      </button>
      {error && error}
    </form>
  )
}

export default CreateAccount
