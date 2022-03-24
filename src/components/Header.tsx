import React from 'react'

import Logo from '../svg-components/Logo'


const Header = () => {
    const nav = ['HOME','DESTINATION','CREW', 'TECHNOLOGY']
  return (
    <header className='absolute flex items-center justify-between lg:text-nav text-subhead2 uppercase font-Barlow  z-10 w-full lg:top-10 top-0'>

        <div className="ml-[55px]">
            <Logo />
        </div>
        <div className="absolute xl:right-[800px] right-[640px] 2xl:w-[33%] lg:w-[25%]  w-0 h-0.5 bg-white-100 opacity-25 z-20">

        </div>
        <nav>
            <ul className='flex justify-center xl:min-w-[830px] lg:min-w-[650px] min-w-[450px] lg:gap-x-12 gap-x-9 bg-white-40 backdrop-blur-[81px] text-white-100'>
                {nav.map((el, index)=>(
                    <li className='py-[34px] first-of-type:border-white-100 lg:first-of-type:-ml-10 cursor-pointer 
                                    border-b-4 border-transparent hover:border-white-50 transition-all duration-700'
                         key={index}>
                        <a href="1">
                            <span className='hidden lg:inline font-bold mr-3'>0{index}</span>
                            {el}
                        </a>
                    </li>
                ))}     
            </ul>
        </nav>
    </header>
  )
}

export default Header