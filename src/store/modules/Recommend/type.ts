import type { IBanner, IRecommend, INewDisc } from '@/service/modules/home/type'

export interface IInitialState {
  banners: IBanner[]
  recommendList: IRecommend[]
  newDiscList: INewDisc[]
}

export {}
