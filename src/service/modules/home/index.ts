import Request from '@/service'

export function test() {
  return Request.request({
    url: '/home/multidata'
  })
}
