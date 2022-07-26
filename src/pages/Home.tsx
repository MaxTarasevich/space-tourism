import React from 'react'
import MainButton from '../components/MainButton'

import {motion} from 'framer-motion'


const Home = () => {
  return (
 <section className='min-h-screen md:pt-[26%] pt-[30%] md:pb-[70px] pb-12 lg:bg-home-bg-lg md:bg-home-bg-md bg-home-bg-sm bg-no-repeat bg-cover'>

    <motion.div 
      animate={{
        scale:[0,1],
        opacity:[0,1]
      }}
      transition={{
        duration:1.0,
      }}
      className="wrapper flex lg:justify-between justify-center md:gap-y-36 gap-y-20 lg:gap-x-0 gap-x-[50%] items-end lg:flex-nowrap flex-wrap">

        <div className="home max-w-[445px]">
          <h2 className='typ-subheading1'>
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className='typ-heading1'>
            SPACE
          </h1>
          <p className=' typ-body text-purple'>Let’s face it; if you want to go to space, you might as well 
            genuinely go to outer space and not hover kind of on the edge of it. 
            Well sit back, and relax because we’ll give you a truly out of this world 
            experience!
          </p>
        </div>

        <MainButton />

    </motion.div>
  
 </section>
  )
}

export default Home
