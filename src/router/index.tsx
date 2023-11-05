import React from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/Home'))
const Mine = React.lazy(() => import('@/views/Mine'))
const Focus = React.lazy(() => import('@/views/Focus'))
const Download = React.lazy(() => import('@/views/Download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
