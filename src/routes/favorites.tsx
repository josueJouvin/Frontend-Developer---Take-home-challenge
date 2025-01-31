import { createFileRoute, Link } from '@tanstack/react-router'
import { Suspense } from 'react'
import { SkeletonCard } from '../components/SkeletonCard'
import AnimeCard from '../components/AnimeCard'
import { Heart, Home } from 'lucide-react'
import { useFavoriteStore } from '../store/favorites.store'

export const Route = createFileRoute('/favorites')({
  component: RouteComponent
})

function RouteComponent() {
  const { favorites } = useFavoriteStore()

  return (
    <>
      <h1 className='text-center text-2xl uppercase mt-5 font-bold'>Frontend Developer - Take home challenge</h1>
      <main className='px-5 container mx-auto my-5'>
        <div className='flex flex-col sm:flex-row justify-between items-center mb-5 gap-4'>
          <div className='flex gap-4'>
            <Link
              to='..'
              className='flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300 [&.active]:font-bold [&.active]:bg-gray-400'
            >
              <Home className='w-5 h-5 mr-2' />
              Home
            </Link>
            <Link
              to='/favorites'
              className='flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300 [&.active]:font-bold [&.active]:bg-gray-400'
            >
              <Heart className='w-5 h-5 mr-2' />
              Favorites
            </Link>
          </div>
        </div>
        <Suspense fallback={<SkeletonCard />}>
          {favorites.length === 0 ? (
            <div className='flex flex-col items-center justify-center p-8 text-center'>
              <p className='text-lg text-gray-600'>No tienes animes favoritos agregados</p>
              <p className='text-sm text-gray-500 mt-2'>¡Explora y agrega algunos animes a tu lista!</p>
            </div>
          ) : (
            <div className='grid grid-cols-responsive gap-12'>
              {favorites.map(anime => (
                <AnimeCard key={anime.id} anime={anime} />
              ))}
            </div>
          )}
        </Suspense>
      </main>
    </>
  )
}
