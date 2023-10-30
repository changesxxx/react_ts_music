import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { useSelector, shallowEqual } from 'react-redux'

function App() {
  interface IState {
    counter: {
      count: number
    }
  }

  const { count } = useSelector(
    (state: IState) => ({
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
