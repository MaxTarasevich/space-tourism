import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import TitlePage from '../components/TitlePage'

import data from '../data/data.json'

interface CrewData{
    name: string;
    images: {
        png: string;
        webp: string;
    };
    role: string;
    bio: string;
}


const Crew = () => {

const [crew,setCrew] = useState<CrewData[]>([])

const [slide,setSlide] = useState<number>(0)

useEffect(() => {
  setCrew(data.crew)
}, [])




  return (
  <section className='min-h-screen md:pt-[15%] pt-[23%] lg:bg-crew-bg-lg md:bg-crew-bg-md bg-crew-bg-sm bg-no-repeat bg-cover'>

      <motion.div 
         animate={{
          scale:[0,1],
          opacity:[0,1]
        }}
        transition={{
          duration:1.0,
        }}
        className="wrapper">

        <TitlePage page={'02'} text={'Meet your crew'} />

        <div className='crew flex lg:justify-between justify-center items-stretch gap-14 lg:flex-nowrap flex-wrap mt-16'>
        {crew[0] ? 
        <>
        <div className="crew-content max-w-[488px] md:order-1 order-2 flex flex-col">
              
              <h3 className="crew-subtitle typ-heading4 text-white-50">
                {crew[slide].role}
              </h3>

              <h2 className="crew-title typ-heading3">
                {crew[slide].name}
              </h2>

              <p className="crew-text max-w-[444px] typ-body text-purple lg:mt-7 mt-4">
                {crew[slide].bio}
              </p>

              <div className="crew-navigation lg:absolute bottom-16 md:mt-10 md:mb-0 mb-8 flex  lg:justify-start justify-center gap-x-6 md:order-1 -order-10">

               {crew.map((el,index)=>(
                <div key={index} 
                     className={`lg:w-4 w-3 lg:h-4 h-3 rounded-full bg-white-100 cursor-pointer 
                              ${index===slide ? '' : 'opacity-[0.17]'} hover:opacity-50 animate-hover`}
                     onClick={()=>setSlide(index)}
                    >

                </div>
               ))}
               
              </div>

            </div>

            <div className="crew-image lg:-mt-24 lg:h-fit md:h-[532px] h-[230px] md:w-fit 
                            w-full md:order-2 order-1 md:border-b-transparent border-b border-line-grey">

              <img className='h-full mx-auto' src={crew[slide].images.png} alt={crew[slide].name} />

            </div>
          
        </> : 'loading'}
          

          

        </div>
      </motion.div>  
      
  </section>
  )
}

export default Crew
