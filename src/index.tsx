import React from 'react'
import ReactDOM from 'react-dom/client'

//router
import { HashRouter } from 'react-router-dom'
//redux
import { Provider } from 'react-redux'
//store
import store from '@/store'
//theme
import { ThemeProvider } from 'styled-components'
import { theme } from '@/assets/theme'

//css重置
import 'normalize.css'
import '@/assets/css/index.less'

import App from '@/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </HashRouter>

  // </React.StrictMode>
)
