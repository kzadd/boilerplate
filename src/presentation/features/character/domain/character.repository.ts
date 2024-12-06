import { ApiHttpResponse } from '@shared/types/http.types'
import { CharacterApiResponse } from '../application/character.types'

export interface CharacterRepository {
  getCharacters(): Promise<ApiHttpResponse<CharacterApiResponse>>
}
