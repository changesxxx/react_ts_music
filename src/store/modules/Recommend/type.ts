import type {
  IBanner,
  IRecommend,
  INewDisc,
  IRank
} from '@/service/modules/home/type'

export interface IInitialState {
  banners: IBanner[]
  recommendList: IRecommend[]
  newDiscList: INewDisc[]
  rankList: IRank[]
}

export {}
