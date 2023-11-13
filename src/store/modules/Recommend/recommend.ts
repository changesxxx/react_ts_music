import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchGetBanner, fetchGetHotRecommend } from '@/service/modules/home'

import type { IInitialState } from './type'

const initialState: IInitialState = {
  banners: [],
  recommendList: []
}

export const recommendAction = createAsyncThunk(
  'RecommendAsync',
  async (arg, { dispatch }) => {
    const res = await fetchGetBanner()
    dispatch(changeBanner(res.banners))

    fetchGetHotRecommend().then((res) => {
      dispatch(changeRecommendList(res.result))
    })
  }
)

const RecommendSlice = createSlice({
  name: 'Recommend',
  initialState,
  reducers: {
    /* 轮播图 */
    changeBanner(state, { payload }) {
      state.banners = payload
    },
    /* 热门推荐 */
    changeRecommendList(state, { payload }) {
      state.recommendList = payload
    }
  }
})

export const { changeBanner, changeRecommendList } = RecommendSlice.actions

export default RecommendSlice.reducer
