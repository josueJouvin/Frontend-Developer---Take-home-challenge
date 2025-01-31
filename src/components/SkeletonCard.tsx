// components/SkeletonCard.tsx
export const SkeletonCard = () => {
  return (
    <div className='grid grid-cols-responsive gap-12'>
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <div key={index} className='w-full h-[400px] bg-gray-600 rounded-lg overflow-hidden animate-pulse'>
            <div className='w-full h-[250px] bg-gray-800'></div>
            <div className='p-4 space-y-3'>
              <div className='h-4 bg-gray-400 rounded w-3/4'></div>
              <div className='h-4 bg-gray-400 rounded w-1/2'></div>
              <div className='h-4 bg-gray-400 rounded w-1/4'></div>
            </div>
          </div>
        ))}
    </div>
  )
}
