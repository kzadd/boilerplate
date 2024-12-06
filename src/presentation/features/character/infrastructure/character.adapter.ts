import { ApiHttpResponse } from '@shared/types/http.types'
import { CharacterApiResponse } from '../application/character.types'
import { Character } from '../domain/character.entity'

/**
 * Adapter for transforming API character responses into domain model entities.
 */
export const CharacterAdapter = {
  toCharacters(response: ApiHttpResponse<CharacterApiResponse>): Character[] {
    const { resultados: results = [] } = response?.data?.payload ?? {}

    if (!results.length) {
      return []
    }

    return results.map(({ id = '', nombre = '' }) => ({
      id,
      name: nombre
    }))
  }
}
