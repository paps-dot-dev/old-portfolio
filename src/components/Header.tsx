import React from 'react'
import { FaInstagram, FaGithub, FaPaperPlane } from 'react-icons/fa'
function Header() {
  return (
    // Change
    <header className='flex flex-col justify-between  md:m-4  py-10'>
      {/* Megans suggestion: Add Image Carousel (use locomotion and do cards!)the size of header div, move paps.dev to the left side */}

      <div className='flex flex-col md:flex-row justify-between items-center w-[95vw] md:w-full'>
        <h1 className='text-center text-4xl p-2 md:text-[48px]'>paps.dev</h1>
        <h1 className='text-2xl md:text-4xl mb-4 md:mb-0'>Shawn Papineau</h1>
        <div className='flex flex-col justify-between items-start'>
          <button className='flex justify-center items-center ring-1 ring-black  w-full p-3 m-auto hover:bg-indigo-400 hover:ring-2 hover:ring-gray-500 ease-linear transition-all duration-200 hover:text-white text-xl rounded-xl'>
            <FaPaperPlane />
            <span className='mx-8'>Contact Me</span>
          </button>
          <ul className='flex justify-center w-full'>
            <a
              href='https://www.github.com/paps-dot-dev'
              target='_blank'
              className='text-4xl hover:mt-4 hover:-translate-y-2 hover:ring-2 hover:ring-purple-500 hover:rounded-full duration-200 ease-linear p-2'>
              <li>
                <FaGithub />
              </li>
            </a>
            <a
              href='https://www.instagram.com/paps_dot_creative'
              target='_blank'
              className='text-4xl hover:mt-4 hover:-translate-y-2 hover:ring-2 hover:ring-purple-500 hover:rounded-full duration-200 ease-linear p-2'>
              <li>
                <FaInstagram />
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className='w-[95vw] border-b-2 border-black m-auto p-1'></div>
    </header>
  )
}

export default Header
