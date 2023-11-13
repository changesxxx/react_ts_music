import React, {
  memo,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback
} from 'react'
import type { ReactElement } from 'react'

import { _throttle, _shake } from '@/utils/tool'

import CarouselWrapper from './style'

type Iprops = {
  children?: ReactElement[]
  autoplay?: boolean
  autoplaySpeed?: number
  speed?: number
  afterChange?: (current: number) => void
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
    speed = 1500,
    afterChange
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

  /* 监听页面是否可视 */
  let hiddenTime = 0
  let visibleTime
  let timer: any = null

  //手动点击下一个(+1)/上一个(-1)
  const switchHandle = useCallback(
    function (num: number) {
      //计算切换后的index
      currentIndex.current += num

      if (afterChange) {
        currentIndex.current > childrenLength.current
          ? afterChange(0)
          : afterChange(currentIndex.current)
      }

      if (carouselRef.current) {
        //初始化动画
        carouselRef.current.style.transition = `transform ${speed}ms ease-out 0s`
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
    },
    [afterChange]
  )

  /* 对外暴漏方法 下一个 */
  const slickNext = _throttle(function () {
    clearTimer()
    switchHandle(+1)
  }, 1500)

  /* 对外暴漏方法 上一个 */
  const slickPrev = _throttle(function () {
    clearTimer()
    switchHandle(-1)
    createTimer()
  }, 1500)

  /* 创建定时器 */
  const createTimer = useCallback(
    _shake(function () {
      if (autoplay && !timerRef.current) {
        console.log('创建定时器')

        timerRef.current = setInterval(() => {
          switchHandle(+1)
        }, autoplaySpeed)
      }
    }),
    []
  )

  /* 取消定时器 */
  const clearTimer = useCallback(
    _throttle(function () {
      console.log('取消定时器')
      if (timerRef.current) clearInterval(timerRef.current)
      timerRef.current = null
    }, 1000),
    []
  )

  /* 页面可视(用户切换标签或者后台浏览器)处理 */
  function visibilityChangeHandle() {
    if (document.visibilityState === 'hidden') {
      //切换初始时间
      hiddenTime = new Date().getTime()
      //创建定时器 取消轮播动画
      timer = setTimeout(clearTimer, autoplaySpeed)
    } else if (document.visibilityState === 'visible') {
      //切换回时间
      visibleTime = new Date().getTime()
      //清除取消轮播动画定时器
      clearTimeout(timer)

      if (visibleTime - hiddenTime > autoplaySpeed) {
        //如果大于了轮播动画一次执行时长 上面定时器将会取消了轮播动画 页面返回需重新创建轮播动画
        createTimer()
      }
    }
  }

  useEffect(() => {
    if (carouselRef.current?.children.length) {
      createTimer()
      carouselWidth.current = carouselRef.current.offsetWidth
      childrenLength.current = carouselRef.current.children.length - 1
      //页面切换 处理轮播
      document.addEventListener('visibilitychange', visibilityChangeHandle)
    }

    return () => {
      document.removeEventListener('visibilitychange', visibilityChangeHandle)
    }
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

export default memo(ForwardedCarousel)
