type pageInfo = {
  total: number
  perPage: number
}

type coverImage = {
  large: string
}
type MediaTitle = {
  english: string
  native: string
  romaji: string
}

type Media = {
  id: number
  coverImage: coverImage
  descrption: string
  genres: string[]
  title: MediaTitle
}

type Page = {
  pageInfo: pageInfo
  media: Media[]
}

export type AnimeListResponse = {
  Page: Page
}
