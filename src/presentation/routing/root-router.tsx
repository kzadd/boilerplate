import { Suspense } from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router-dom'

import { SuspenseLoading } from '@shared/components/commons'
import { publicRoutes } from '@shared/constants/public-routes.constant'
import { Characters, NotFound } from './lazy.routes'

/**
 * Application router configuration.
 * This defines the routes and their associated components, including lazy-loaded pages and a fallback loading state.
 */
export const rootRouter: RouteObject[] = [
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
