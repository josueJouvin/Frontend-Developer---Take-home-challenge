import { useQuery } from '@tanstack/react-query'
import { fetchAnimeList } from './services/anilistApi'
import AnimeCard from './components/AnimeCard'

function App() {
  const { data, isError, isLoading } = useQuery({ queryKey: ['animes'], queryFn: async () => fetchAnimeList() })

  return (
    <div className=''>
      <main className='px-5 container mx-auto my-5'>
        <div className='grid grid-cols-responsive gap-12'>{data?.Page.media.map(anime => <AnimeCard key={anime.id} anime={anime} />)}</div>
      </main>
    </div>
  )
}

export default App
