import React from 'react'
import Projects from './components/Projects'

function page() {
  return (
    <main>
      <h1 className='text-[5em] text-right border-b-2 w-1/2 ml-auto md:w-1/3 md:text-left md:mr-auto md:ml-0'>
        Code
      </h1>
      <div className='flex justify-center items-center'>
        <Projects />
      </div>
    </main>
  )
}

export default page
