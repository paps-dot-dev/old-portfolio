import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import placeholder from '../../../../public/adros_homepage.png'

function ProjectCard() {
  return (
    <div className='min-h-[400px] max-w-[800px] bg-gradient-to-tl from-zinc-400 to-gray-400 m-2 rounded-xl drop-shadow-xl'>
      <h1 className='text-4xl bg-white rounded-r-lg mt-4 w-[90%] p-3'>
        Project Name
      </h1>
      <Image
        className='w-[95%] rounded-xl m-auto my-4'
        src={placeholder}
        alt='Screenshot of ADR OS, a customized dashboard application.'
      />
      <p className='text-white mx-2 text-xl text-center'>Technologies</p>
      <div className='flex justify-between items-center  m-auto text-xl p-4 text-white'>
        <div className='bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-gray-400 w-[150px] p-2 text-center m-2 rounded-lg opacity-90'>
          Next.js
        </div>
        <div className='bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-gray-400 w-[150px] p-2 text-center m-2 rounded-lg opacity-90'>
          Contentful
        </div>
        <div className='bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-gray-400 w-[150px] p-2 text-center m-2 rounded-lg opacity-90'>
          Tailwind
        </div>
        <div className='bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-gray-400 w-[150px] p-2 text-center m-2 rounded-lg opacity-90'>
          Headless UI
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
