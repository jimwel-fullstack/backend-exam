import { createSlice } from '@reduxjs/toolkit'

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    value: [],
  },
  reducers: {
    SET_COMPANIES: (state, action) => {
      state.value = action.payload
    },
    CREATE_COMPANY: (state, action) => {
      state.value = [action.payload, ...state.value]
    },
    UPDATE_COMPANY: (state, action) => {
      state.value.map((company) => {
        if (company._id === action.payload.id) {
          company.title = action.payload.title
        }
      })
    },
    DELETE_COMPANY: (state, action) => {
      state.value = state.value.filter((company) => {
        return company._id !== action.payload.id
      })
    },
  },
})

export const { SET_COMPANIES, CREATE_COMPANY, UPDATE_COMPANY, DELETE_COMPANY } =
  companySlice.actions
export default companySlice.reducer
