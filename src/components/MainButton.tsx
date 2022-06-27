import React from 'react'

const MainButton = () => {
  return (
   <button className='flex-center relative z-[1] uppercase text-head4 px-16 bg-white-100 rounded-full aspect-square 
                      before:absolute before:bg-white-40 before:w-full before:min-h-full hover:before:scale-150 before:rounded-full 
                      before:animate-hover before:z-[-1]'>
    EXPLORE
   </button>
  )
}

export default MainButton