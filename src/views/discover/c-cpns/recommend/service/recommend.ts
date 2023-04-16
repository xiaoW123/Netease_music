import hyRequest from '@/service'
// 获取轮播数据
export function getTopBanner() {
  return hyRequest.get({
    url: '/banner'
  })
}
// 获取item数据
export function getHotItem(limit = 30) {
  return hyRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}
// 获取新碟上架数据
export function getNewAlbum(limit = 10) {
  return hyRequest.get({
    url: '/album/newest',
    params: {
      limit
    }
  })
}
// 获取榜单数据
export function getPlayListDetail(id: number) {
  return hyRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

// 获取入驻歌手
export function getArtistList(cat: number, limit: number) {
  return hyRequest.get({
    url: '/artist/list',
    params: {
      cat,
      limit
    }
  })
}
