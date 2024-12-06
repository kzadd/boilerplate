import axios, { AxiosResponse } from 'axios'

import { AxiosHttpResponse, HttpHeadersOptions, HttpMethod, HttpRequestOptions } from '../../types/http.types'
import { getCookie } from '../storages'

/**
 * Creates headers for HTTP requests.
 */
const createHeaders = ({
  contentType = 'application/json',
  customHeaders = {},
  isPublic = false,
  token
}: HttpHeadersOptions): Record<string, string> => {
  const headers: Record<string, string> = { ...customHeaders }

  if (contentType) {
    headers['Content-Type'] = contentType
  }

  if (!isPublic) {
    const accessToken = token ?? getCookie('access_token') ?? ''

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`
    }
  }

  return headers
}

/**
 * Creates a request to an API endpoint.
 */
const createRequest = async <T>({ data, headers, method, url }: HttpRequestOptions): Promise<AxiosHttpResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await axios.request<T>({ data, headers, method, url })

    return {
      data: response.data,
      headers: response.headers,
      request: response.config,
      status: response.status
    }
  } catch (error) {
    console.error(`Request to ${url} failed`, error)
    throw error
  }
}

/**
 * Factory function that creates a request to an API endpoint.
 */
const factoryRequest = <T>(
  method: HttpMethod,
  options: HttpHeadersOptions = {},
  url: string
): Promise<AxiosHttpResponse<T>> => {
  const { body, ...restOptions } = options

  const headers = createHeaders(restOptions)
  const data = body && JSON.stringify(body)

  return createRequest<T>({ data, headers, method, url })
}

/**
 * Collection of HTTP request methods for making JSON API calls.
 * Each method handles a specific HTTP verb (DELETE, GET, PATCH, POST, PUT).
 */
export const deleteJsonRequest = <T>(url: string, options?: HttpHeadersOptions) => {
  return factoryRequest<T>('DELETE', options, url)
}
export const getJsonRequest = <T>(url: string, options?: HttpHeadersOptions) => {
  return factoryRequest<T>('GET', options, url)
}

export const patchJsonRequest = <T>(url: string, options?: HttpHeadersOptions) => {
  return factoryRequest<T>('PATCH', options, url)
}

export const postJsonRequest = <T>(url: string, options?: HttpHeadersOptions) => {
  return factoryRequest<T>('POST', options, url)
}

export const putJsonRequest = <T>(url: string, options?: HttpHeadersOptions) => {
  return factoryRequest<T>('PUT', options, url)
}
