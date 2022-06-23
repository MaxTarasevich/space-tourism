import React from 'react'

const Wrapper =(Component:React.ElementType, ImageName:string) => function HOC () {
  return (
    <section className={`h-screen lg:bg-${ImageName}-bg-lg md:bg-${ImageName}-bg-md bg-${ImageName}-bg-sm bg-no-repeat bg-cover`}>
        <Component />
    </section>
  )
}

export default Wrapper