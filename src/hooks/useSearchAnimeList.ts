import { useQuery } from '@tanstack/react-query'
import { fetchAnimeList } from '../services/anilistApi'
import { AnimeQueryVariables } from '../types'

export const useAnimeList = (variables: AnimeQueryVariables) => {
  return useQuery({
    queryKey: ['animeList', variables],
    queryFn: () => fetchAnimeList(variables),
    staleTime: 5 * 60 * 1000
  })
}
