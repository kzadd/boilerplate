import { configureStore } from '@reduxjs/toolkit'

import { ENVIRONMENT } from '@shared/configs/environment.config'
import { storeLogger } from '../middlewares/store-logger.middleware'
import { rootReducer } from './reducer.config'

/**
 * Configures and initializes the Redux store.
 * This function sets up the store with middleware, devTools, and the root reducer.
 */
export const store = configureStore({
  devTools: ENVIRONMENT !== 'prod',
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(storeLogger),
  reducer: rootReducer
})
