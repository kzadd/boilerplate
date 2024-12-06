import { setupWorker } from 'msw/browser'

import { characterMock } from './handlers'

/**
 * Mock worker for the browser.
 */
export const worker = setupWorker(...characterMock)
