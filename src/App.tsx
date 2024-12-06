import './shared/styles/globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import { store } from './core/state'
import { router } from './presentation/routing'

/**
 * The main application component
 */
const App = () => {
  const browserRouter = createBrowserRouter(router)

  return (
    <ReduxProvider store={store}>
      <RouterProvider router={browserRouter} />
    </ReduxProvider>
  )
}

export default App
