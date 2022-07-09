import React from 'react'
import { Link } from 'react-router-dom'

const MainButton = () => {
  return (
   <button className='flex-center relative z-[1] uppercase md:text-head4 text-head5-tab text-dark font-Bellefair lg:px-16 md:px-11 px-7 bg-white-100 rounded-full aspect-square 
                      before:absolute before:bg-white-10 before:w-full before:min-h-full hover:before:scale-150 focus:before:scale-150 before:rounded-full 
                      before:animate-hover before:z-[-1]'>
     <Link to={'/Destination'}>EXPLORE</Link>
   </button>
  )
}

export default MainButton