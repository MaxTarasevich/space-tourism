import React from 'react'

interface Title{
    page:string
    text:string
    classCustom?:string
}

const TitlePage = ({page, text, classCustom}:Title) => {
  return (
    <h2 className={`typ-heading5 md:text-left text-center ${classCustom}`}>
        <span className='mr-5 font-bold opacity-25'>{page}</span> {text}
    </h2>
  )
}

export default TitlePage