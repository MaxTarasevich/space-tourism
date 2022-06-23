import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul className='fixed flex justify-center items-center py-3 gap-2 text-white-100'>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'/Crew'}>Crew</Link>
        </li>
        <li>
            <Link to={'/Destination'}>Destination</Link>
        </li>
        <li>
            <Link to={'/Technology'}>Technology</Link>
        </li>
    </ul>
  )
}

export default Navigation