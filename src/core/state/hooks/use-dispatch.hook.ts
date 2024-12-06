import { useDispatch as useDispatchRedux } from 'react-redux'

import store from '../store.config'

/**
 * Custom hooks that provide typed access to `dispatch` from Redux.
 * Use these instead of the plain `useDispatch` to ensure type safety.
 */
export const useDispatch = useDispatchRedux.withTypes<typeof store.dispatch>()
