import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'

import ViewHeader from '@/components/view-header'

function App() {
  return (
    <div className="App">
      {/* <ViewHeader></ViewHeader> */}
      <Suspense fallback=""> {useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
