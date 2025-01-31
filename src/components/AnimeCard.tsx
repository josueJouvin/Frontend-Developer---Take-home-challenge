import { Star } from 'lucide-react'
import { AnimeCardProps } from '../types'
import { useState } from 'react'
import ModalInformation from './ModalInformation'
import { useFavoriteStore } from '../store/favorites.store'

const AnimeCard = ({ anime }: AnimeCardProps) => {
  const { addFavorite, favorites } = useFavoriteStore()
  const [modal, setModal] = useState(false)
  const isFavorite = favorites.some(fav => fav.id === anime.id)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    addFavorite(anime)
  }

  const handleClick = () => {
    setModal(!modal)
  }

  return (
    <>
      <div
        onClick={handleClick}
        className='group relative h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-gray-800 hover:cursor-pointer'
      >
        {modal && <ModalInformation anime={anime} />}

        <img
          loading='lazy'
          src={anime.coverImage.large}
          alt={anime.title.romaji}
          className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
        />

        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80'></div>

        <button
          onClick={handleFavoriteClick}
          className='absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-full text-yellow-400 hover:fill-yellow-300 transition-colors duration-300 z-10'
        >
          <Star className='w-6 h-6 hover:fill-yellow-300' fill={isFavorite ? 'currentColor' : 'none'} />
        </button>

        <div className='absolute inset-0 flex flex-col justify-end p-6 text-white'>
          <h3 className='text-2xl text-white font-bold mb-2 line-clamp-2'>{anime.title.english || anime.title.romaji}</h3>
          <p className='text-sm text-gray-300 mb-2'>{anime.title.native}</p>

          <div className='flex items-center mb-2'>
            <Star className='w-5 h-5 text-yellow-400 mr-1' />
            <span className='font-semibold'>{anime.averageScore}</span>
          </div>

          <div className='flex flex-wrap gap-2 mb-3'>
            {anime.genres.map(genre => (
              <span key={genre} className='px-2 py-1 text-xs font-semibold bg-gray-700 text-gray-200 rounded-full'>
                {genre}
              </span>
            ))}
          </div>

          <div className='flex justify-between items-center text-sm mb-4 text-gray-300'>
            <span>
              {anime.episodes} {anime.episodes === 1 ? 'episode' : 'episodes'}
            </span>
            <span>Release: {anime.seasonYear}</span>
          </div>

          <div className='flex justify-between items-center text-sm mb-4 text-gray-300'>
            <span>{anime.format}</span>
            <span>{anime.type}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnimeCard
