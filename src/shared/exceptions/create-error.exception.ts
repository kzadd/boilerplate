import { AxiosError } from 'axios'

import { BaseError, CreateErrorOptions, CreateErrorResponse } from '../types/exception.types'

/**
 * Factory function that creates a standardized error.
 * This function helps to create an error with a consistent structure, which can be serialized and converted.
 * If the error is not an AxiosError, it creates a generic error response using the error message.
 */
export const createError = (options: CreateErrorOptions): CreateErrorResponse => {
  const { code, originalError, reason } = options

  const isAxiosError = originalError instanceof AxiosError
  const isError = originalError instanceof Error

  const errorCode = code ?? (isAxiosError ? (originalError.response?.status ?? null) : null)
  const errorInstance = isAxiosError || isError ? originalError : new Error(String(originalError ?? ''))
  const errorReason = reason ?? (isAxiosError ? originalError.message : 'Unknown error occurred')

  return {
    code: errorCode,
    originalError: errorInstance,
    reason: errorReason,

    toJSON(): string {
      return JSON.stringify(this.toObject())
    },

    toObject(): BaseError {
      return {
        code: this.code,
        originalError: this.originalError,
        reason: this.reason
      }
    }
  }
}
