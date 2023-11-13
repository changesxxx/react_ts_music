import Request from '@/service'
import type { IBanners, IRecommendList } from './type'

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
