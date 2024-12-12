import './shared/styles/globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import { store } from './core/state/store.config'
import { rootRoutes } from './presentation/routing/root-routes'

/**
 * The main application component.
 */
const App = () => {
  const browserRouter = createBrowserRouter(rootRoutes)

  return (
    <ReduxProvider store={store}>
      <RouterProvider router={browserRouter} />
    </ReduxProvider>
  )
}

export default App
