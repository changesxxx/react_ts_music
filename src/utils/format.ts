export function imgUrlFormat(imgUrl: string, weight: number, height?: number) {
  return `${imgUrl}?param=${weight}y${height}`
}
export {}
