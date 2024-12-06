import { BaseError } from '@shared/types/exception.types'
import { Character } from '../domain/character.entity'

export enum CharacterActionTypes {
  GET_CHARACTERS = 'character/onGetCharacters',
  GET_CHARACTERS_ERROR = 'character/onGetCharactersError',
  GET_CHARACTERS_SUCCESS = 'character/onGetCharactersSuccess'
}

export interface CharacterApiResponse {
  informacion: {
    cantidad: number
    paginas: number
  }
  resultados: {
    especie: string
    estado: string
    genero: string
    id: string
    nombre: string
    tipo: string
  }[]
}

export interface CharacterError {
  error: BaseError
}

export interface CharacterState {
  characters: Character[]
  error: BaseError | null
  loading: boolean
}

export interface CharacterSuccess {
  characters: Character[]
}
