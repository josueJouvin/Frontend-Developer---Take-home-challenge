import { createFileRoute, Link } from '@tanstack/react-router'
import { Home } from 'lucide-react'

export const Route = createFileRoute('/favorites')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <>
      <Link to='/' className='flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300'>
        <Home className='w-5 h-5 mr-2' />
        Home
      </Link>
      <div>Hello "/favorites"!</div>
    </>
  )
}
