import React from 'react'
import TitlePage from '../components/TitlePage'


const Crew = () => {
  return (
  <section className='min-h-screen md:pt-[15%] pt-[23%] lg:bg-crew-bg-lg md:bg-crew-bg-md bg-crew-bg-sm bg-no-repeat bg-cover'>
      <div className="wrapper">
        <TitlePage page={'02'} text={'Meet your crew'} />
      </div>  
  </section>
  )
}

export default Crew
