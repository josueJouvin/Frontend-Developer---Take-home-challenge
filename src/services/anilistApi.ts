import { request, gql } from 'graphql-request'
import { AnimeListResponse } from '../types'

const API_URL = 'https://graphql.anilist.co'

const GET_ANIME_LIST = gql`
  query ($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
      }
      media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
        id
        coverImage {
          large
        }
        title {
          romaji
          english
          native
        }
        description
        type
        genres
      }
    }
  }
`
export async function fetchAnimeList(): Promise<AnimeListResponse> {
  const data = await request<AnimeListResponse>(API_URL, GET_ANIME_LIST)
  return data
}
