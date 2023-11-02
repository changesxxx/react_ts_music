import React, { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '@/store'

import { test, airTest, longforTest } from '@/service/modules/home'

function App() {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    shallowEqual
  )
  useEffect(() => {
    /*     test().then((res) => {
      console.log('test-----------')
      console.log(res.data)
    })

    airTest().then((res) => {
      console.log('airTest-----------')
      console.log(res.data)
    }) */
    longforTest().then((res) => {
      console.log(res.title)
    })
  }, [])

  return (
    <div className="App">
      count:{count}
      {useRoutes(routes)}
    </div>
  )
}

export default App
