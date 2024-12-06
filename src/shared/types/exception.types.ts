export interface BaseError {
  code: number | null
  originalError: Error
  reason: string
}

export interface CreateErrorOptions {
  code?: number | null
  originalError?: unknown
  reason?: string | null
}

export interface CreateErrorResponse {
  code: number | null
  originalError: Error
  reason: string
  toJSON: () => string
  toObject: () => BaseError
}
