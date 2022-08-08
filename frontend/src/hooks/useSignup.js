import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SIGNIN } from '../features/authSlice'

const useSignup = () => {
  const dispatch = useDispatch()

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const res = await fetch('/api/user/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const json = await res.json()

    if (!res.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (res.ok) {
      // save the user to local storage
      localStorage.setItem('auth', JSON.stringify(json))

      dispatch(SIGNIN(json))

      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}

export default useSignup
