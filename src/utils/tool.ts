type Fn = () => void
type Timer = ReturnType<typeof setInterval> | null

/* 节流 */
export function _throttle(fn: Fn, wait: number, frist = true, end = false) {
  let timer: Timer = null

  let startTime = 0

  function throttle() {
    const nowTime: number = new Date().getTime()

    //首次执行
    if (!frist && startTime === 0) {
      startTime = nowTime
    }

    if (wait - (nowTime - startTime) <= 0) {
      if (timer) clearTimeout(timer)

      fn.apply(this)
      startTime = nowTime
      timer = null

      return
    }

    /* 尾部控制 */
    if (end && !timer) {
      timer = setTimeout(function () {
        fn.apply(this)
        /* 修改开始时间
            原因:如果不修改开始时间 startTime实际保存的是上一次执行fn赋值的startTime
         */

        startTime = new Date().getTime()
        timer = null
      }, wait)
    }
  }
  return throttle
}

/* 防抖 */
export function _shake(fn: Fn, delay = 1000) {
  let timer: Timer = null

  function shake() {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this)
    }, delay)
  }

  return shake
}

export {}
