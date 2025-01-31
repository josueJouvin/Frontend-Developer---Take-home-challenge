import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Media } from '../types'

type FavoriteStore = {
  favorites: Media[]
  addFavorite: (anime: Media) => void
  removeFavorite: (id: number) => void
}

export const useFavoriteStore = create<FavoriteStore>()(
  devtools(
    persist(
      set => ({
        favorites: [],
        addFavorite: anime =>
          set(state => {
            const exists = state.favorites.some(fav => fav.id === anime.id)

            if (!exists) {
              return { favorites: [...state.favorites, anime] }
            }

            return state
          }),
        removeFavorite: animeId =>
          set(state => ({
            favorites: state.favorites.filter(fav => fav.id !== animeId)
          }))
      }),
      {
        name: 'anime-favorites'
      }
    )
  )
)
