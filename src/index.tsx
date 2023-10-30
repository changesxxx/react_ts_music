import React from 'react'
import ReactDOM from 'react-dom/client'

//router
import { HashRouter } from 'react-router-dom'
//redux
import { Provider } from 'react-redux'
//store
import store from '@/store'

//css重置
import 'normalize.css'
import '@/assets/css/index.less'

import App from '@/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>

  // </React.StrictMode>
)
