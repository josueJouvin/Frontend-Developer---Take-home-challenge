type PageInfo = {
  total: number
  perPage: number
}

type CoverImage = {
  large: string
}

type MediaTitle = {
  english?: string
  native: string
  romaji: string
}

export type Media = {
  id: number
  coverImage: CoverImage
  genres: string[]
  title: MediaTitle
  episodes?: number | null
  format?: string
  averageScore?: number | undefined
  isFavourite?: boolean
  seasonYear?: number
  type: string
  mediaListEntry: null | any // Añadido
  description: string // Añadido
  status: string // Añadido
  bannerImage: string // Añadido
  siteUrl: string // Añadido
}

type Page = {
  pageInfo: PageInfo
  media: Media[]
}

export type AnimeListResponse = {
  Page: Page
}

export type AnimeQueryVariables = {
  search: string | null | undefined
  page: number
  perPage: number
}

export type AnimeCardProps = {
  anime: Media
}

export type ItemFilters = {
  query: string
}
