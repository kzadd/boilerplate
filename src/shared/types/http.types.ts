import { AxiosRequestConfig, AxiosResponseHeaders } from 'axios'

export interface ApiHttpResponse<T = unknown> extends AxiosHttpResponse<ServiceResponse<T>> {}

export interface AxiosHttpResponse<T = unknown> {
  data: T
  headers: Partial<AxiosResponseHeaders>
  request: AxiosRequestConfig
  status: number
}

export interface HttpHeadersOptions {
  body?: Record<string, unknown>
  contentType?: string
  customHeaders?: Record<string, string>
  isPublic?: boolean
  token?: string
}

export type HttpMethod = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'

export interface HttpRequestOptions {
  data?: string
  headers: Record<string, string>
  method: HttpMethod
  url: string
}

export interface ServiceResponse<T = unknown> {
  errors: null | string[]
  payload: T
  success: string
}
