import { useSelector as useSelectorRedux } from 'react-redux'

import store from '../store.config'

/**
 * Custom hooks that provide typed access to `selector` from Redux.
 * Use these instead of the plain `useSelector` to ensure type safety.
 */
export const useSelector = useSelectorRedux.withTypes<ReturnType<typeof store.getState>>()
