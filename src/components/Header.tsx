import React, { useState } from 'react'

import Logo from '../svg-components/Logo'


const Header = () => {
    const nav = ['HOME','DESTINATION','CREW', 'TECHNOLOGY']

    const [burger, setBurger] = useState<boolean>(false)

    console.log(window.navigator.product)

  return (
    <header className='overflow-hidden absolute sm:py-0 py-6 flex items-center justify-between lg:text-nav sm:text-subhead2 text-nav uppercase font-Barlow  z-10 w-full lg:top-10 top-0'>

        <div className="ml-[55px]">
            <Logo />
        </div>
        <div className="absolute xl:right-[800px] right-[640px] 2xl:w-[33%] lg:w-[25%]  w-0 h-0.5 bg-white-100 opacity-25 z-20">

        </div>
        <nav>
            <ul className={`flex justify-center xl:min-w-[830px] lg:min-w-[650px] sm:min-w-[450px] lg:gap-x-12
                            sm:gap-x-9 sm:bg-white-40 backdrop-blur-[81px] text-white-100 
                            sm:static sm:flex-row sm:px-0 flex-col items-start px-8 fixed z-40 bg-grey-40 -right-full top-0 
                            ${burger ? '-right-0 w-[80%] min-h-screen': ''}`}>

                {nav.map((el, index)=>(
                    <li className='py-[34px] first-of-type:border-white-100 lg:first-of-type:-ml-10 cursor-pointer 
                                    border-b-4 border-transparent hover:border-white-50 transition-all duration-700'
                         key={index}>
                        <a href="1">
                            <span className='sm:hidden lg:inline font-bold mr-3'>0{index}</span>
                            {el}
                        </a>
                    </li>
                ))}   

            </ul>
            <ul className='sm:hidden w-6 h-5 mr-6 flex flex-col justify-between cursor-pointer hover:scale-125 transition-transform duration-300'
                onClick={()=>setBurger(!burger)}
            >
                <li className={`h-0.5 bg-purple ${burger ? 'rotate-45 translate-y-[9px]' : ''} transition-transform duration-300`}></li>
                <li className={`h-0.5 bg-purple ${burger ? 'opacity-0' : ''} transition-transform duration-300` }></li>
                <li className={`h-0.5 bg-purple ${burger ? '-rotate-45 -translate-y-[9px]' : ''} transition-transform duration-300`}></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header