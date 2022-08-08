import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: JSON.parse(localStorage.getItem('auth')),
  },
  reducers: {
    SIGNIN: (state, action) => {
      state.value = action.payload
    },
    SIGNOUT: (state) => {
      state.value = null
    },
  },
})

export const { SIGNIN, SIGNOUT } = authSlice.actions
export default authSlice.reducer
