import { combineReducers } from '@reduxjs/toolkit'

import { characterReducer } from '../../presentation/features/character'

/**
 * Combines all feature reducers into a single root reducer.
 * This function is used to manage the overall state structure by combining individual reducers.
 */
const reducer = combineReducers({
  character: characterReducer
})

export default reducer
