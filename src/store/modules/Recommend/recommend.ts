import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchGetBanner } from '@/service/modules/home'

export const recommendAction = createAsyncThunk(
  'RecommendAsync',
  async (arg, { dispatch }) => {
    const res = await fetchGetBanner()
    dispatch(changeBanner(res.banners))
  }
)

const RecommendSlice = createSlice({
  name: 'Recommend',
  initialState: {
    banner: []
  },
  reducers: {
    changeBanner(state, { payload }) {
      state.banner = payload
    }
  }
})

export const { changeBanner } = RecommendSlice.actions

export default RecommendSlice.reducer
