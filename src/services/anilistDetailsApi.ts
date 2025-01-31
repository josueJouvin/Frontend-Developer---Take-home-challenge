/*import { request, gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

const API_URL = 'https://graphql.anilist.co'

const GET_ANIME_DETAILS = gql`
  query ($id: Int!) {
    Media(id: $id, type: ANIME) {
      id
      description
      duration
      status
      startDate {
        year
        month
        day
      }
    }
  }
`

export function useAnimeDetails(id: number | null) {
  return useQuery({
    queryKey: ['animeDetails', id],
    queryFn: async () => {
      if (!id) return null
      const data = await request(API_URL, GET_ANIME_DETAILS, { id })
      console.log(data)
      return data
    },
    enabled: !!id
  })
}*/

//Pueba para realizar llamado de detalles con otra consulta
