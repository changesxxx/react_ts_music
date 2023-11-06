export interface Ititle {
  title: string
  isLink: boolean
  url: string
}

type ITab = Omit<Ititle, 'isLink'>

export const titleArr: Ititle[] = [
  {
    title: '发现音乐',
    isLink: true,
    url: '/home'
  },
  {
    title: '我的音乐',
    isLink: true,
    url: '/mine'
  },
  {
    title: '关注',
    isLink: true,
    url: '/focus'
  },
  {
    title: '商城',
    isLink: false,
    url: 'https://music.163.com/store/product'
  },
  {
    title: '音乐人',
    isLink: false,
    url: 'https://music.163.com/st/musician'
  },
  {
    title: '云推歌',
    isLink: false,
    url: 'https://music.163.com/st/ad-song/login'
  },
  {
    title: '下载客户端',
    isLink: true,
    url: '/download'
  }
]

export const HomeTabItem: ITab[] = [
  {
    title: '推荐',
    url: '/home'
  },
  {
    title: '排行榜',
    url: '/home/rank'
  },
  {
    title: '歌单',
    url: '/home/songMenu'
  },
  {
    title: '主播电台',
    url: '/home/station'
  },
  {
    title: '歌手',
    url: '/home/singer'
  },
  {
    title: '新碟上架',
    url: '/home/newDisc'
  }
]

export {}
