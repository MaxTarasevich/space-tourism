import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import TitlePage from '../components/TitlePage'

import data from '../data/data.json'


interface DestinationData {
  name: string;
  images: {
      png: string;
      webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

const Destination = () => {

const [destination, setDestination] = useState<DestinationData[]>([])

const [slide, setSlide] = useState<number>(0)

useEffect(() => {
   setDestination(data.destinations)
  
}, [])

  return (
    <section className='min-h-screen 2xl:pb-[15%] xl:pb-[8%] md:pt-[15%] pt-[23%] 
                        lg:bg-destination-bg-lg md:bg-destination-bg-md bg-destination-bg-sm bg-no-repeat bg-cover overflow-hidden'>
      <motion.div
       animate={{
        scale:[0,1],
        opacity:[0,1]
        }}
        transition={{
        duration:1.0,
        }} 
        className="wrapper">

        <TitlePage page={'01'} text={'Pick your destination'} />

        <div className='destination flex lg:justify-between justify-center items-start gap-14 lg:flex-nowrap flex-wrap mt-16'>
          {destination[slide] ? 
            <>
            
              <div className="destination-img lg:w-[50%] sm:w-[300px] sm:min-h-[300px] w-[200px] min-h-[200px] relative">
                <AnimatePresence>
                  <motion.img key={destination[slide].images.png} 
                              initial={{ x: '100%', opacity: 0, scale:0.2, }} 
                              animate={{ x:'0%', opacity: 1, scale:1, }} 
                              exit={{ x: '-100%', opacity: 0, scale:0.2 }} 
                              transition={{duration:2}} 
                              className='2xl:w-full absolute' 
                              src={destination[slide].images.png} 
                              alt={destination[slide].name} />
                </AnimatePresence>
              </div>

              <div className="destination-content max-w-[445px]">

                <ul className="destination-nav flex justify-between nav-text max-w-[285px] lg:m-0 mx-auto">
                  
                  {destination.map((el,index)=>(
                      <li key={`${el.name}${index}`} 
                          className={`pb-3 tab-border animate-hover cursor-pointer text-purple 
                                      ${index===slide ? 'active' : ''}`}
                          onClick={()=>setSlide(index)}
                      >
                        {el.name}
                      </li>
                  ))}

                </ul>

              <AnimatePresence exitBeforeEnter>
                <motion.h2 key={destination[slide].name} 
                initial={{opacity:0,x:'-100%',scale:0.1}} 
                animate={{opacity:1,x:'0%',scale:1}} 
                exit={{opacity:0,x:'100%',scale:0.1}} 
                transition={{duration:1}}  
                className="destination-title typ-heading2">
                  {destination[slide].name}
                </motion.h2>
             

                <motion.p key={destination[slide].description}
                          initial={{scale:0.1,opacity:0}} 
                          animate={{scale:1,opacity:1}}
                          exit={{scale:0.25,opacity:0}}
                          transition={{duration:1}}
                        className="destination-text md:typ-body font-Barlow text-[15px] text-purple text-center">
                  {destination[slide].description}
                </motion.p>

                <motion.div key={destination[slide].distance}
                            initial={{scale:0.7,opacity:0}} 
                            animate={{scale:1,opacity:1}}
                            exit={{scale:0.7,opacity:0}}
                            transition={{duration:1}} 
                            className="destination-description mt-14 flex justify-between pt-7 border-t border-line-grey">
                  <div className="destination-distans">
                    <p className='typ-subheading2'>AVG. DISTANCE</p> 
                    <p className='typ-subheading1 pt-3'>{destination[slide].distance}</p> 
                  </div>

                  <div className="destination-time">
                    <p className='typ-subheading2'>Est. travel time</p> 
                    <p className='typ-subheading1 pt-3'>{destination[slide].travel}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              </div>

            </> : 'Loading...' }

          

        </div>

      </motion.div>
        
    </section>
  )
}

export default Destination