import React from 'react'

const Home = () => {
  return (
    <section className='relative lg:flex lg:items-end lg:pt-0 pt-[202px] min-h-screen lg:bg-home-bg-lg sm:bg-home-bg-md bg-home-bg-sm bg-no-repeat bg-cover'>
        <div className="container flex lg:flex-row flex-col xl:justify-between lg:justify-evenly lg:items-end items-center lg:text-left text-center text-white-100 lg:pb-[8.5%] pb-[90px]  font-bell">
            <div className="max-w-[444px]">
              <div className="subtitle text-purple font-Barlow lg:text-head5 text-head5-tab">
                SO, YOU WANT TO TRAVEL TO
              </div>
              <h1 className="title text-head1">
                SPACE
              </h1>
              <p className="text-purple font-Barlow lg:text-body text-nav tracking-body">
                Let’s face it; if you want to go to space, you might as well 
                genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div className="relative xl:w-[274px] w-[242px] xl:h-[274px] h-[242px] lg:mt-0 mt-[156px] flex justify-center items-center
                           bg-white-100 rounded-full text-dark text-head4 tracking-btn cursor-pointer 
                            before:block before:absolute before:xl:w-[450px] before:w-[370px] before:xl:h-[450px] before:h-[370px] before:rounded-full before:transparent before:opacity-10
                            hover:before:bg-white-100 before:transition-all before:duration-700">
              EXPLORE
            </div>
        </div>
    </section>
  )
}

export default Home