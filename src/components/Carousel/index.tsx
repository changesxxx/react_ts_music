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

  //timer
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

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
      console.log(
        'currentIndex.current:',
        currentIndex.current,

        currentIndex.current * carouselWidth.current
      )
      carouselRef.current.style.transform = `translateX(-${
        currentIndex.current * carouselWidth.current
      }px)`
    }
  }

  /* 对外暴漏方法 下一个 */
  function slickNext() {
    switchHandle(+1)
    //清除定时器 重新新建定时器
    createTimer()
  }

  /* 对外暴漏方法 上一个 */
  function slickPrev() {
    switchHandle(-1)
  }
  function createTimer() {
    console.log('创建定时器', timerRef.current)

    //forwardRef 副作用会执行两次组件 加载组件时需判断是否有定时器如有定时器需先取消
    /*   if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
      console.log('取消定时器')
    } */
    timerRef.current = setInterval(() => {
      switchHandle(+1)
    }, autoplaySpeed)

    console.log('创建定时器成功', timerRef.current)
  }

  useEffect(() => {
    console.log('useEffect')

    /*  if (carouselRef.current) {
      if (autoplay) {
        console.log('autopla为真 创建定时器')
        // createTimer()
        carouselWidth.current = carouselRef.current.offsetWidth
        childrenLength.current = carouselRef.current.children.length - 1
        console.log('children', carouselRef.current.children)
        console.log('length', carouselRef.current.children.length)
      }
    } */

    /*  if (autoplay) {
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden') {
          console.log('hidden')
          if (timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
          }
        } else if (document.visibilityState === 'visible') {
          switchHandle(+1)
          createTimer()
        }
      })
    } */

    /*    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        if (timerRef.current) {
          clearInterval(timerRef.current)
          timerRef.current = null
        }
      } else if (document.visibilityState === 'visible') {
        if (!timerRef.current) {
          switchHandle(+1)
          createTimer()
        }
      }
    }) */
  }, [carouselRef.current?.children])

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
