import React from 'react'

function Header() {
  return (
    // Change
    <header className='flex flex-col justify-between  md:m-4 md:py-[90px] py-10'>
      {/* Megans suggestion: Add Image Carousel (use locomotion and do cards!)the size of header div, move paps.dev to the left side */}
      <div className='flex justify-between items-center w-full'>
        <h1 className='text-center text-3xl p-2 md:text-[48px]'>paps.dev</h1>
        <ul className='flex m-auto md:ml-auto md:mr-0'>
          <li>Social 1</li>
          <li>Social 2</li>
          <li>Social 3</li>
          <li>Social 4</li>
        </ul>
      </div>
      <div className='w-[95vw] border-b-2 border-black m-auto p-1'></div>
    </header>
  )
}

export default Header
