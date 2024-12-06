import { Suspense } from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router-dom'

import { SuspenseLoading } from '../../shared/components'
import { publicRoutes } from '../../shared/constants'
import { Characters, NotFound } from './lazy.routes'

/**
 * Application router configuration.
 * This defines the routes and their associated components, including lazy-loaded pages and a fallback loading state.
 */
const router: RouteObject[] = [
  {
    children: [
      {
        element: <Navigate to={publicRoutes.characters} />,
        index: true
      },
      {
        element: <Characters />,
        path: publicRoutes.characters
      },
      {
        element: <NotFound />,
        path: '*'
      }
    ],
    element: (
      <Suspense fallback={<SuspenseLoading />}>
        <Outlet />
      </Suspense>
    ),
    path: publicRoutes.root
  }
]

export default router
