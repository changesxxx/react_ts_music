import Request from '@/service'
import type { IBanner } from './type'

export function fetchGetBanner() {
  return Request.get<IBanner>({
    url: '/banner'
  })
}
