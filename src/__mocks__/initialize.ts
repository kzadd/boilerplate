import { environment } from '../shared/configs'

/**
 * Initializes mock service workers if the environment variable `enableMocking` is set to 'true'.
 */
export const initializeMockServiceWorker = async () => {
  if (environment.enableMocking !== 'true') return

  const { worker } = await import('./browser.mock')

  return worker.start()
}
