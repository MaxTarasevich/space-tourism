import { motion } from 'framer-motion'
import React from 'react'

const PageNotFound = () => {
  return (
    <section className='min-h-screen xl:pt-[23%] md:pt-[26%] pt-[30%] md:pb-[70px] pb-12 lg:bg-home-bg-lg md:bg-home-bg-md bg-home-bg-sm bg-no-repeat bg-cover'>

    <motion.div 
      animate={{
        scale:[0,1],
        opacity:[0,1]
      }}
      transition={{
        duration:1.0,
      }}
      className="wrapper flex lg:justify-between justify-center md:gap-y-36 gap-y-20 lg:gap-x-0 gap-x-[50%] items-end lg:flex-nowrap flex-wrap">

        <div className="home max-w-[445px] mx-auto">
          <h2 className='typ-subheading1 text-center'>
           Sorry, But Page Not Found!
          </h2>
         
         
        </div>

       
    </motion.div>
  
 </section>
  )
}

export default PageNotFound