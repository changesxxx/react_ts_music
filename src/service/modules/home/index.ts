import Request from '@/service'
import type { IBanners } from './type'

export function fetchGetBanner() {
  return Request.get<IBanners>({
    url: '/banner'
  })
}
