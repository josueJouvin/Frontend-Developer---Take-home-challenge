/*import { useEffect } from 'react'

const AUTH_URL = 'https://anilist.co/api/v2/oauth/authorize'
const CLIENT_ID = '24083'
const REDIRECT_URI = 'http://localhost:3000'

export function useAuth() {
  useEffect(() => {
    // Verifica si ya tienes un token en el localStorage
    const storedToken = localStorage.getItem('anilist_access_token')

    if (storedToken) {
      // Si ya tienes un token, no haces nada
      console.log('Token already present', storedToken)
    } else {
      // Si no tienes token, redirige a AniList para obtener el token
      window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`
    }
  }, [])
}
*/

//Prueba para realizar mutacion a la api de anilist
