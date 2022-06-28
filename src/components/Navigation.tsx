import React, { useState } from 'react'
import {NavLink } from 'react-router-dom'

import Logo from '../svg-components/Logo'

const Navigation = () => {

const Nav = ['Home','Destination','Crew','Technology']

const [burger,setBurger]= useState<boolean>(false)

  return (
    <nav className='fixed w-full lg:pl-14 md:pl-10 pl-6 lg:py-10 md:py-0 py-6 flex justify-between items-center overflow-hidden'>

        <Logo />

        <ul className={`md:flex w-[60%] sm:min-w-[450px] justify-around bg-white-40 backdrop-blur-[81px] nav-text animate-hover
                        md:static fixed top-0 ${burger ? 'right-0' : '-right-full'} z-10 md:flex-row flex-col md:p-0 pt-28 pl-8 md:min-h-fit min-h-screen
                        before:absolute before:w-[32%] before:h-px before:bg-white-50 before:top-1/2 before:right-[56%] before:lg:block before:hidden`}>

                            {Nav.map((i,index)=>(
                                <li key={i}>
                                    <NavLink to={`/${i}`} 
                                            className='inline-block md:py-9 py-3 md:w-fit w-full border-[3px] border-transparent 
                                                    hover:md:border-b-white-50 hover:md:border-r-transparent hover:border-r-white-50
                                                    focus:md:border-b-white-50 focus:md:border-r-transparent focus:border-r-white-50 
                                                    animate-hover'
                                            onClick={()=>setBurger(!burger)}
                                    >
                                        <span className='font-bold mr-3 lg:inline-block md:hidden'>
                                            0{index}
                                        </span>
                                        {i}
                                    </NavLink>
                                </li>
                            ))}

        </ul>
        <div className='md:hidden relative z-20 w-8 h-6 flex flex-col justify-between cursor-pointer mr-6 hover:animate-pulse'
                onClick={()=>setBurger(!burger)}>
            <span className={`inline-block h-[3px] w-full bg-purple ${burger ? 'rotate-45 translate-y-[10px]':''} animate-hover`}></span>
            <span className={`inline-block h-[3px] w-full bg-purple ${burger ? 'opacity-0':''} animate-hover`}></span>
            <span className={`inline-block h-[3px] w-full bg-purple  ${burger ? '-rotate-45 -translate-y-[10px]':''} animate-hover`}></span>
        </div>

    </nav>
    
  )
}

export default Navigation