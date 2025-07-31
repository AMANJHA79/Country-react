import { useQuery } from '@tanstack/react-query'
import { getCountryData, getCountryIndData } from './postApi'

// Hook for fetching all countries
export const useCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const response = await getCountryData()
      return response.data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

// Hook for fetching individual country data
export const useCountry = (name) => {
  return useQuery({
    queryKey: ['country', name],
    queryFn: async () => {
      const response = await getCountryIndData(name)
      return response.data[0] // Return first item since API returns array
    },
    enabled: !!name, // Only run query if name is provided
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
} 