import { API_BASE_URL } from '@shared/configs/environment.config'
import { getJsonRequest } from '@shared/utils/http.utils'
import { CharacterRepository } from '../domain/character.repository'

/**
 * Repository implementation that handles fetching character data from an external API.
 * It retrieves raw data and converts it into domain entities using an adapter.
 */
export const ApiCharacterRepository: CharacterRepository = {
  getCharacters() {
    return getJsonRequest(`${API_BASE_URL}/character`, { isPublic: true })
  }
}
