import { EnvironmentConfig } from '../types/enviroment.types'

const {
  VITE_APP_API_BASE_URL = '',
  VITE_APP_BASE_URL = '',
  VITE_APP_ENABLE_MOCKING = 'false',
  VITE_APP_ENVIRONMENT = '',
  VITE_APP_PORT = ''
} = import.meta.env

/**
 * Application environment configuration.
 * Stores the API base URL and the current environment mode (e.g., development, production)
 */
const environment: EnvironmentConfig = {
  apiBaseUrl: VITE_APP_API_BASE_URL,
  baseUrl: VITE_APP_BASE_URL,
  enableMocking: VITE_APP_ENABLE_MOCKING,
  mode: VITE_APP_ENVIRONMENT,
  port: VITE_APP_PORT
}

export default environment
