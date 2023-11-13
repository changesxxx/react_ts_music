/* 轮播图*/
export interface IBanner {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  exclusive: boolean
  encodeId: string
  scm: string
  bannerBizType: string
}

export interface IBanners {
  banners: IBanner[]
}

/* 推荐热门歌单 */
export interface IRecommend {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

export interface IRecommendList {
  result: IRecommend[]
}
/*新碟上架*/
export interface INewDisc {
  newAlbum: boolean
  albumId: number
  albumName: string
  artistName: string
  price: number
  coverUrl: string
  pubTime: number
  productId: number
  saleNum: number
  albumType: number
  saleType: number
  area: number
  artistType: number
  status: number
}

export interface INewDiscList {
  products: INewDisc[]
}

export {}
