import hyRequest from '@/service'

export function getTopBanner() {
  return hyRequest.get({
    url: '/banner'
  })
}
