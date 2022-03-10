import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ticketService from './ticketService'

// 1. Create initial state
const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// 2. Create slice
export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  // 3. Add reducer
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {},
})

// 4. Export actions and reducer -> import reducer to the store
export const { reset } = ticketSlice.actions
export default ticketSlice.reducer
