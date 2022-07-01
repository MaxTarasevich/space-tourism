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
    <section className='min-h-screen md:pt-[15%] pt-[23%] lg:bg-destination-bg-lg md:bg-destination-bg-md bg-destination-bg-sm bg-no-repeat bg-cover'>
      <div className="wrapper">

        <TitlePage page={'01'} text={'Pick your destination'} />

        <div className='destination flex lg:justify-between justify-center items-start gap-14 lg:flex-nowrap flex-wrap mt-16'>
          {destination[0] ? 
            <>
              <div className="destination-img 2xl:w-[50%] lg:w-fit md:w-[300px] w-[170px]">
                <img className='2xl:w-full' src={destination[slide].images.png} alt={destination[slide].name} />
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

                <h2 className="destination-title typ-heading2">
                  {destination[slide].name}
                </h2>

                <p className="destination-text md:typ-body font-Barlow text-[15px] text-purple text-center">
                  {destination[slide].description}
                </p>

                <div className="destination-description mt-14 flex justify-between pt-7 border-t border-line-grey">
                  <div className="destination-distans">
                    <p className='typ-subheading2'>AVG. DISTANCE</p> 
                    <p className='typ-subheading1 pt-3'>{destination[slide].distance}</p> 
                  </div>

                  <div className="destination-time">
                    <p className='typ-subheading2'>Est. travel time</p> 
                    <p className='typ-subheading1 pt-3'>{destination[slide].travel}</p>
                  </div>
                </div>


              </div>
            </> : 'Loading...' }

          

        </div>

      </div>
        
    </section>
  )
}

export default Destination