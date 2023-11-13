export function imgUrlFormat(imgUrl: string, weight: number, height?: number) {
  return `${imgUrl}?param=${weight}y${height}`
}

export function playCountFormat(count: number) {
  console.log(count)
  return Math.ceil(count / 10000) + '万'
}

export {}
