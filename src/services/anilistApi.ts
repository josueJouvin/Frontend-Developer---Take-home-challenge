import { request, gql } from 'graphql-request'
import { AnimeListResponse, AnimeQueryVariables } from '../types'

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
        episodes
        format
        averageScore
        isFavourite
        seasonYear
        type
        genres
        description
        status
        bannerImage
        siteUrl
        mediaListEntry {
          id
        }
      }
    }
  }
`

export async function fetchAnimeList({ search, page, perPage }: AnimeQueryVariables): Promise<AnimeListResponse> {
  const variables = { search, page, perPage }
  const data = await request<AnimeListResponse>(API_URL, GET_ANIME_LIST, variables)
  return data
}
