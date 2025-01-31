import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { ItemFilters } from '../types'
import { useAnimeList } from '../hooks/useSearchAnimeList'
import AnimeCard from '../components/AnimeCard'

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>): ItemFilters => {
    return {
      query: search.query as string
    }
  },
  component: RouteComponent
})

function RouteComponent() {
  const { query } = Route.useSearch()
  const { data, isLoading, isError } = useAnimeList({ search: query || undefined, page: 1, perPage: 30 })
  const navigate = useNavigate({ from: Route.fullPath })

  return (
    <div className=''>
      <main className='px-5 container mx-auto my-5'>
        <div className='flex justify-end mb-5'>
          <input
            className='input rounded-full px-5 py-2 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md text-black'
            placeholder='Search...'
            type='text'
            value={query}
            onChange={e => {
              navigate({ search: prev => ({ ...prev, query: e.target.value }) })
            }}
          />
        </div>
        <div className='grid grid-cols-responsive gap-12'>{data?.Page.media.map(anime => <AnimeCard key={anime.id} anime={anime} />)}</div>
      </main>
    </div>
  )
}
