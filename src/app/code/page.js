import React from 'react'
import Projects from './components/Projects'

function page() {
  return (
    <main>
      <h1 className='text-[5em] text-right border-b-2 w-1/2 ml-auto md:w-1/3 md:text-left md:mr-auto md:ml-0'>
        Code
      </h1>
      <p className='text-4xl my-4'>
        I am a software developer versed in multiple different technologies.
        Here are some of my favorites:
      </p>
      <div className='flex flex-col md:flex-row flex-wrap items-center justify-between bg-indigo-500 rounded-xl w-1/2 p-6 bg-opacity-70'>
        <ul className='grid grid-cols-2 gap-4'>
          <li>React</li>
          <li>Next</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
          <li>JQuery</li>
        </ul>
        <ul>
          <li>Firebase</li>
          <li>AWS</li>
          <li>Azure</li>
        </ul>
        <ul>
          <li>Python</li>
          <li>SQL</li>
        </ul>
      </div>
      <h2 className='text-4xl font-bold mb-[32px] mt-[64px]'>
        Check Out Some Projects that I've built with these technologies:
      </h2>
      <div className='flex justify-center items-center'>
        <Projects />
      </div>
    </main>
  )
}

export default page
