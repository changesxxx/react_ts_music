export interface Ititle {
  title: string
  isLink: boolean
  url: string
}

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

export {}
