import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import TitlePage from '../components/TitlePage'

import data from '../data/data.json'
import animation from '../data/animation'

interface TechData {
  name: string;
  images: {
      portrait: string;
      landscape: string;
  };
  description: string;
}


const Technology = () => {

const [tech, setTech] = useState<TechData[]>([])

const [slide, setSlide] = useState<number>(0)

useEffect(() => {
  setTech(data.technology)
}, [])





  return (
    <section className='min-h-screen md:pt-[15%] pt-[23%] pb-[7%] lg:bg-technology-bg-lg md:bg-technology-bg-md bg-technology-bg-sm bg-no-repeat bg-cover'>
      <motion.div
        animate={{
          scale:[0,1],
          opacity:[0,1]
        }}
        transition={{
          duration:1.0,
        }}
       className="mx-auto lg:mr-0 lg:max-w-[88.5%]">

        <TitlePage page={'03'} text={'SPACE LAUNCH 101'} classCustom={'lg:ml-0 md:ml-10'} />

        {tech[0] ?  
        <div className="technology flex lg:flex-nowrap flex-wrap justify-between items-center lg:mt-7 md:mt-14 mt-8">

          <div className="technology-content flex lg:flex-nowrap flex-wrap lg:justify-between justify-center gap-x-8 lg:w-fit w-full">

            <div className="technology-control flex lg:flex-col justify-center gap-y-7 gap-x-4 lg:w-fit w-full">

              {tech.map((el, index)=>(
                 <button key={index}
                 className={`technology-btn typ-heading4 text-center xl:px-9 md:px-6 px-4 aspect-square rounded-full bg-transparen border border-white-100
                             hover:bg-grey-65 hover:text-dark animate-hover 
                             ${index===slide ? 'bg-white-100 text-dark' : ''}`}
                  onClick={()=>setSlide(index)}>
                   {index+1}
                 </button>
              ))}
              
            </div>
            <AnimatePresence exitBeforeEnter>
              <motion.div key={tech[slide].description}
                          variants={animation} 
                          initial="initialText"
                          animate="animateText"
                          exit="exitText"
                          transition={{duration:0.6}}
                          className="technology-text max-w-[470px] lg:mt-0 mt-11">

                <h3 className="technology-subtitle nav-text lg:text-left text-center text-[16px]">
                  THE TERMINOLOGY…
                </h3>

                <h2
                  className="technology-title typ-heading3 mt-4">
                  {tech[slide].name}
                </h2>

                <p className="technology-description typ-body mt-4 lg:pr-6 lg:pl-0 px-6">
                  {tech[slide].description}
                </p>

              </motion.div>
            </AnimatePresence>

          </div>
          <AnimatePresence exitBeforeEnter>
          <motion.picture key={tech[slide].name} 
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          variants={animation}
                          transition={{duration:0.6}}
                          className="technology-image 2xl:w-[50%] lg:h-[527px] md:h-[310px] h-[170px] lg:order-1 -order-1 lg:mb-0 md:mb-16 mb-9">

              <source media="(min-width: 1024px)" srcSet={`${process.env.PUBLIC_URL}${tech[slide].images.portrait}`} />
            
              <img  className='h-full object-cover object-center lg:w-full w-screen' 
                    src={`${process.env.PUBLIC_URL}${tech[slide].images.landscape}`} 
                    alt={tech[slide].name} />
            
          </motion.picture>
          </AnimatePresence>

</div>: 'Loading...'}

       

      </motion.div>
    </section>
  )
}

export default Technology