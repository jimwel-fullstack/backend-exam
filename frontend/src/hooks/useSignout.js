import { useDispatch } from 'react-redux'
import { SIGNOUT } from '../features/authSlice'

const useLogout = () => {
  const dispatch = useDispatch()

  const signout = () => {
    localStorage.removeItem('auth')

    dispatch(SIGNOUT())
  }

  return { signout }
}

export default useLogout
