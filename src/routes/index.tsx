import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { ItemFilters } from '../types'
import { useAnimeList } from '../hooks/useSearchAnimeList'
import AnimeCard from '../components/AnimeCard'
import { Suspense } from 'react'
import { SkeletonCard } from '../components/SkeletonCard'
import { Heart, Home, Search } from 'lucide-react'

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
  const { data, isLoading } = useAnimeList({ search: query || undefined, page: 1, perPage: 30 })
  const navigate = useNavigate({ from: Route.fullPath })

  return (
    <>
      <div className=''>
        <a href='https://anilist.co/api/v2/oauth/authorize?client_id=24083&redirect_uri=http://localhost:5173&response_type=code'>
          Login with AniList
        </a>

        <main className='px-5 container mx-auto my-5'>
          <div className='flex flex-col sm:flex-row justify-between items-center mb-5 gap-4'>
            <div className='flex gap-4'>
              <Link
                to='/'
                search={{ query }}
                className='flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300'
              >
                <Home className='w-5 h-5 mr-2' />
                Home
              </Link>
              <Link
                to='/favorites'
                search={{ query }}
                className='flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300'
              >
                <Heart className='w-5 h-5 mr-2' />
                Favorites
              </Link>
            </div>
            <div className='relative w-full sm:w-auto'>
              <input
                className='w-full sm:w-64 rounded-full px-5 py-2 pl-10 bg-gray-700 text-white border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300'
                placeholder='Search...'
                type='text'
                value={query}
                onChange={e => {
                  navigate({ search: prev => ({ ...prev, query: e.target.value }) })
                }}
              />
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            </div>
          </div>
          <Suspense fallback={<SkeletonCard />}>
            {isLoading ? (
              <SkeletonCard />
            ) : (
              <div className='grid grid-cols-responsive gap-12'>{data?.Page.media.map(anime => <AnimeCard key={anime.id} anime={anime} />)}</div>
            )}
          </Suspense>
        </main>
      </div>
    </>
  )
}
