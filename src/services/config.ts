import { GraphQLClient } from 'graphql-request'

const API_URL = 'https://graphql.anilist.co'

export const client = new GraphQLClient(API_URL, {
  headers: {
    'Content-Type': 'application/json'
  }
})

export async function getAccessToken(code: string): Promise<string> {
  const response = await fetch('https://anilist.co/api/v2/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: import.meta.env.ANILIST_CLIENT_ID,
      client_secret: import.meta.env.ANILIST_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: import.meta.env.ANILIST_REDIRECT_URI
    })
  })

  const data = await response.json()
  return data.access_token
}
