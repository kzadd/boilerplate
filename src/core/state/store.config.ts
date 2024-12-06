import { configureStore } from '@reduxjs/toolkit'

import { environment } from '../../shared/configs'
import { storeLogger } from '../middlewares'
import reducer from './reducer.config'

/**
 * Configures and initializes the Redux store.
 * This function sets up the store with middleware, devTools, and the root reducer.
 */
const store = configureStore({
  devTools: environment.mode !== 'prod' || import.meta.env.VITE_APP_ENVIRONMENT !== 'prod',
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(storeLogger),
  reducer
})

export default store
