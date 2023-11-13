export function imgUrlFormat(imgUrl: string, weight: number, height = weight) {
  return `${imgUrl}?param=${weight}y${height}`
}

export function playCountFormat(count: number) {
  return Math.ceil(count / 10000) + '万'
}

export {}
