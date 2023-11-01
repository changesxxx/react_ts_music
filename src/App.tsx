import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '@/store'

function App() {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    shallowEqual
  )

  return (
    <div className="App">
      count:{count}
      {useRoutes(routes)}
    </div>
  )
}

export default App
