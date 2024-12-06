import { environment } from '@shared/configs'
import { getJsonRequest } from '@shared/utils'
import { CharacterRepository } from '../domain/character.repository'

/**
 * Repository implementation that handles fetching character data from an external API.
 * It retrieves raw data and converts it into domain entities using an adapter.
 */
export const ApiCharacterRepository: CharacterRepository = {
  getCharacters() {
    return getJsonRequest(`${environment.apiBaseUrl}/character`, { isPublic: true })
  }
}
