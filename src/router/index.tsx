import React from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/Home'))
const Mine = React.lazy(() => import('@/views/Mine'))
const Focus = React.lazy(() => import('@/views/Focus'))
const Download = React.lazy(() => import('@/views/Download'))

/* home 子页面*/
const Recommend = React.lazy(() => import('@/views/Home/c-views/Recommend'))
const Rank = React.lazy(() => import('@/views/Home/c-views/Rank'))
const SongMenu = React.lazy(() => import('@/views/Home/c-views/SongMenu'))
const Station = React.lazy(() => import('@/views/Home/c-views/Station'))
const Singer = React.lazy(() => import('@/views/Home/c-views/Singer'))
const NewDisc = React.lazy(() => import('@/views/Home/c-views/NewDisc'))

import Demo from '@/views/Demo'

const routes: RouteObject[] = [
  {
    path: '/home',
    element: <Home />,

    children: [
      {
        element: <Recommend />,
        index: true
      },
      {
        path: '/home/rank',
        element: <Rank />
      },
      {
        path: '/home/songMenu',
        element: <SongMenu />
      },
      {
        path: '/home/station',
        element: <Station />
      },
      {
        path: '/home/singer',
        element: <Singer />
      },
      {
        path: '/home/newDisc',
        element: <NewDisc />
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
  },
  {
    path: '/demo',
    element: <Demo />
  },
  {
    path: '/',
    element: <Navigate to="/home" />
  }
]

export default routes
