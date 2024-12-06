import { useQuery } from './use-query.hook'

/**
 * Custom hook to retrieve the value of a specific query parameter from the URL.
 */
export const useQueryParam = (key: string): string => {
  const query = useQuery()

  return query.get(key) ?? ''
}
