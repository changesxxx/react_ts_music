import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchGetBanner } from '@/service/modules/home'

import type { IInitialState } from './type'

const initialState: IInitialState = {
  banners: []
}

export const recommendAction = createAsyncThunk(
  'RecommendAsync',
  async (arg, { dispatch }) => {
    const res = await fetchGetBanner()
    dispatch(changeBanner(res.banners))
  }
)

const RecommendSlice = createSlice({
  name: 'Recommend',
  initialState,
  reducers: {
    changeBanner(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { changeBanner } = RecommendSlice.actions

export default RecommendSlice.reducer
