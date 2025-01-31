import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { ItemFilters } from '../types'
import { useAnimeList } from '../hooks/useSearchAnimeList'
import AnimeCard from '../components/AnimeCard'
import { Suspense } from 'react'
import { SkeletonCard } from '../components/SkeletonCard'
import { ChevronLeft, ChevronRight, Heart, Home, Search } from 'lucide-react'

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>): ItemFilters => {
    return {
      query: search.query as string,
      page: (search.page as number) || 1
    }
  },
  component: RouteComponent
})

function RouteComponent() {
  const { query, page } = Route.useSearch()
  const { data, isLoading } = useAnimeList({ search: query || undefined, page, perPage: 30 })
  const navigate = useNavigate({ from: Route.fullPath })

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return
    navigate({
      search: prev => ({
        ...prev,
        page: newPage
      })
    })
  }

  return (
    <>
      <h1 className='text-center text-2xl uppercase mt-5 font-bold'>Frontend Developer - Take home challenge</h1>
      <main className='px-5 container mx-auto my-5'>
        <div className='flex flex-col sm:flex-row justify-between items-center mb-5 gap-4'>
          <div className='flex gap-4'>
            <Link
              to='..'
              className='flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300 [&.active]:font-bold'
            >
              <Home className='w-5 h-5 mr-2' />
              Home
            </Link>
            <Link
              to='/favorites'
              search={{ query }}
              className='flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300 [&.active]:font-bold'
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
        <div className='flex justify-center gap-4 mt-8'>
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page <= 1}
            className='flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <ChevronLeft className='w-5 h-5 mr-2' />
            Previous
          </button>
          <span className='flex items-center px-4 py-2 bg-gray-800 text-white rounded-full'>Page {page}</span>
          <button
            onClick={() => handlePageChange(page + 1)}
            className='flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300'
          >
            Next
            <ChevronRight className='w-5 h-5 ml-2' />
          </button>
        </div>
      </main>
    </>
  )
}

export default RouteComponent
