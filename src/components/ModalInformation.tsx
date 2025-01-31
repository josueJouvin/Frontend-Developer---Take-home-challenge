import { createPortal } from 'react-dom'
import { AnimeCardProps } from '../types'
import { Calendar, Film, Star, Tv } from 'lucide-react'

export default function ModalInformation({ anime }: AnimeCardProps) {
  return createPortal(
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
      <div className='bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='relative'>
          <div className='h-48 md:h-64 overflow-hidden'>
            <img
              loading='lazy'
              src={anime.bannerImage || anime.coverImage.large}
              alt={anime.title.english || anime.title.romaji}
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        <div className='p-6'>
          <h2 className='text-3xl font-bold mb-2 text-white'>{anime.title.english || anime.title.romaji}</h2>
          <p className='text-xl text-gray-300 mb-4'>{anime.title.native}</p>

          <div className='flex flex-wrap gap-4 mb-6 text-gray-300'>
            <div className='flex items-center'>
              <Star className='w-5 h-5 text-yellow-400 mr-1' />
              <span>{anime.averageScore}</span>
            </div>
            <div className='flex items-center'>
              <Calendar className='w-5 h-5 mr-1' />
              <span>{anime.seasonYear}</span>
            </div>
            <div className='flex items-center'>
              <Tv className='w-5 h-5 mr-1' />
              <span>{anime.episodes} episodios</span>
            </div>
            <div className='flex items-center'>
              <Film className='w-5 h-5 mr-1' />
              <span>{anime.format}</span>
            </div>
            <span className='px-2 py-1 bg-gray-700 rounded-full text-sm'>{anime.status}</span>
          </div>

          <div className='flex flex-wrap gap-2 mb-6'>
            {anime.genres.map((genre, index) => (
              <span key={index} className='px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm'>
                {genre}
              </span>
            ))}
          </div>

          <div className='mb-6'>
            <h3 className='text-xl font-semibold mb-2 text-white'>Descripción</h3>
            <p className='text-gray-300' dangerouslySetInnerHTML={{ __html: anime.description }} />
          </div>

          <a
            href={anime.siteUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300'
          >
            Ver en AniList
          </a>
        </div>
      </div>
    </div>,
    document.body
  )
}
