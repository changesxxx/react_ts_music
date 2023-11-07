import React, {
  memo,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle
} from 'react'
import type { FC, ReactElement } from 'react'

import CarouselWrapper from './style'

type Iprops = {
  children?: ReactElement[]
  autoplay?: boolean
  autoplaySpeed?: number
  speed?: number
}

export interface CarouselRef {
  slickNext: () => void
  slickPrev: () => void
}

const Carousel: React.ForwardRefRenderFunction<CarouselRef, Iprops> = (
  props,
  ref
) => {
  const {
    children,
    autoplay = true,
    autoplaySpeed = 3500,
    speed = 2500
  } = props

  //轮播图容器el
  const carouselRef = useRef<HTMLDivElement>(null)
  //容器宽度
  const carouselWidth = useRef<number>(0)
  //容器子节点
  const childrenLength = useRef<number>(0)

  //当前index
  const currentIndex = useRef<number>(0)

  //手动点击下一个(+1)/上一个(-1)
  function switchHandle(num: number) {
    //计算切换后的index
    currentIndex.current += num

    if (carouselRef.current) {
      //初始化动画
      carouselRef.current.style.transition = `transform ${speed}ms ease`
      /*
        如果计算后的index小于了最小值0 判断为是第一页进行上一个操作
        将index设置为最后一个节点 并且将动画取消
       */
      if (currentIndex.current < 0) {
        carouselRef.current.style.transition = 'transform 0s'

        currentIndex.current = childrenLength.current
      }
      /*
        如果计算后的index大于了最后一个节点 判断为是最后一页进行下一个操作
        将index设置为第一个节点 并且将动画取消
       */
      if (currentIndex.current > childrenLength.current) {
        carouselRef.current.style.transition = 'transform 0s'

        currentIndex.current = 0
      }

      /*
        节点*节点宽度
      */
      carouselRef.current.style.transform = `translateX(-${
        currentIndex.current * carouselWidth.current
      }px)`
    }
  }

  /* 对外暴漏方法 下一个 */
  function slickNext() {
    switchHandle(+1)
  }

  /* 对外暴漏方法 上一个 */
  function slickPrev() {
    switchHandle(-1)
  }
  function createTimer() {
    const timer = setInterval(() => {
      switchHandle(+1)
    }, autoplaySpeed)
  }

  useEffect(() => {
    if (carouselRef.current) {
      if (autoplay) {
        createTimer()
      }
      carouselWidth.current = carouselRef.current.offsetWidth
      childrenLength.current = carouselRef.current.children.length - 1
    }
  })

  // 使用 useImperativeHandle 声明要暴露的方法
  useImperativeHandle(ref, () => ({
    slickNext,
    slickPrev
  }))

  return (
    <CarouselWrapper>
      <div className="carousel-container" ref={carouselRef}>
        {children?.map((el, index) => {
          return (
            <div key={index} className="carousel-item">
              {el}
            </div>
          )
        })}
      </div>
    </CarouselWrapper>
  )
}
// 使用 forwardRef 包裹组件以确保正确处理 ref
const ForwardedCarousel = forwardRef(Carousel)
// export default forwardRef(memo(Carousel))
// export default forwardRef(Carousel)
export default memo(ForwardedCarousel)
// export default memo()forwardRef(memo(Carousel))
