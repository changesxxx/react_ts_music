import Request from '@/service'
import type { IBanners, IRecommendList, INewDiscList } from './type'

/* 轮播图 */
export function fetchGetBanner() {
  return Request.get<IBanners>({
    url: '/banner'
  })
}

/* 热门推荐 */
export function fetchGetHotRecommend() {
  return Request.get<IRecommendList>({
    url: '/personalized'
  })
}

/* 新碟上架 */
export function fetchGetNewDisc() {
  return Request.get<INewDiscList>({
    url: '/album/list'
  })
}
