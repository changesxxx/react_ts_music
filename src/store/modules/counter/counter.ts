import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {
    count: 100
  },
  reducers: {}
})

export default counterSlice.reducer
