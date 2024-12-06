import { createAction, Dispatch } from '@reduxjs/toolkit'

import { createError } from '@shared/exceptions'
import { CharacterAdapter } from '../infrastructure/character.adapter'
import { ApiCharacterRepository } from '../infrastructure/character.service'
import { CharacterActionTypes, CharacterError, CharacterSuccess } from './character.types'

export const onGetCharacters = createAction(CharacterActionTypes.GET_CHARACTERS)
export const onGetCharactersError = createAction<CharacterError>(CharacterActionTypes.GET_CHARACTERS_ERROR)
export const onGetCharactersSuccess = createAction<CharacterSuccess>(CharacterActionTypes.GET_CHARACTERS_SUCCESS)
export const onGetCharactersThunk = () => async (dispatch: Dispatch) => {
  try {
    dispatch(onGetCharacters())

    const characterResponse = await ApiCharacterRepository.getCharacters()
    const adapterCharacters = CharacterAdapter.toCharacters(characterResponse)

    dispatch(onGetCharactersSuccess({ characters: adapterCharacters }))
  } catch (error) {
    const standardizeError = createError({ originalError: error, reason: 'SOMETHING_WENT_WRONG_ERROR' }).toObject()

    dispatch(onGetCharactersError({ error: standardizeError }))
  }
}
