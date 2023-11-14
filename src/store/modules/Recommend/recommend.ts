import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { idArr } from '@/assets/data/rank-id'

import type { IRankList, IRank } from '@/service/modules/home/type'

import {
  fetchGetBanner,
  fetchGetHotRecommend,
  fetchGetNewDisc,
  fetchGetRankList
} from '@/service/modules/home'

import type { IInitialState } from './type'

const initialState: IInitialState = {
  banners: [],
  recommendList: [],
  newDiscList: [],
  rankList: []
}

export const recommendAction = createAsyncThunk(
  'RecommendAsync',
  async (arg, { dispatch }) => {
    /*   const res = await fetchGetBanner()
    dispatch(changeBanner(res.banners)) */

    fetchGetHotRecommend().then((res) => {
      dispatch(changeRecommendList(res.result))
    })

    fetchGetNewDisc().then((res) => {
      dispatch(changeNewDisc(res.products))
    })
  }
)

export const rankListAction = createAsyncThunk(
  'rankListAsync',
  async (arg, { dispatch }) => {
    //请求数组
    const requestList: Promise<IRankList>[] = []
    //遍历id 发送请求 将请求暂存请求数组中
    idArr.forEach((id) => {
      requestList.push(fetchGetRankList(id))
    })
    //Promise.all 统一调用请求数组
    Promise.all(requestList).then((res) => {
      const playlist: IRank[] = res.map((item) => item.playlist)
      dispatch(changeRankList(playlist))
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
    },
    /* 新碟上架 */
    changeNewDisc(state, { payload }) {
      state.newDiscList = payload
    },
    /* 榜单 */
    changeRankList(state, { payload }) {
      console.log(payload)
      state.rankList = payload
    }
  }
})

export const {
  changeBanner,
  changeRecommendList,
  changeNewDisc,
  changeRankList
} = RecommendSlice.actions

export default RecommendSlice.reducer
