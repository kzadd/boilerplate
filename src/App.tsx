import './shared/styles/globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import { store } from './core/state/store.config'
import { rootRouter } from './presentation/routing/root-router'

/**
 * The main application component
 */
const App = () => {
  const browserRouter = createBrowserRouter(rootRouter)

  return (
    <ReduxProvider store={store}>
      <RouterProvider router={browserRouter} />
    </ReduxProvider>
  )
}

export default App
