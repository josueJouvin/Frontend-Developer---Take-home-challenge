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
  episodes?: number
  format?: string
  averageScore?: number | undefined
  isFavourite?: boolean
  seasonYear?: number
  type: string
}

type Page = {
  pageInfo: PageInfo
  media: Media[]
}

export type AnimeListResponse = {
  Page: Page
}
