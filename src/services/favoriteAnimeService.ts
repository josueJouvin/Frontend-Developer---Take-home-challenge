/*import axios from 'axios'

const API_URL = 'https://graphql.anilist.co'

const FAVORITE_ANIME_MUTATION = `
  mutation ($mediaId: Int!, $isFavourite: Boolean!) {
    SaveMediaListEntry(mediaId: $mediaId, status: CURRENT, isFavourite: $isFavourite) {
      id
      isFavourite
    }
  }
`

export async function favoriteAnime(mediaId: number, isFavourite: boolean) {
  const token = localStorage.getItem('anilist_access_token')

  if (!token) {
    throw new Error('User is not authenticated')
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        query: FAVORITE_ANIME_MUTATION,
        variables: { mediaId, isFavourite }
      },
      {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    )

    console.log('Anime favorito actualizado:', response.data)
    return response.data
  } catch (error) {
    console.error('Error al actualizar el anime favorito:', error)
    throw error
  }
}*/

//Pueba para realizar mutacion del estado de favorito
