import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SIGNIN } from '../features/authSlice'

const useLogin = () => {
  const dispatch = useDispatch()

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const signin = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const res = await fetch('/api/user/signin', {
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

  return { signin, isLoading, error }
}

export default useLogin
