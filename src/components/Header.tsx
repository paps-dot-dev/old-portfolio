import React from 'react'

function Header() {
  return (
    <header className='flex flex-col justify-between m-4'>
      <p>Moon</p>
      <h1 className='text-center text-5xl p-2 md:text-[64px]'>paps.dev</h1>
      <ul className='flex m-auto md:ml-auto md:mr-0'>
        <li>Social 1</li>
        <li>Social 2</li>
        <li>Social 3</li>
        <li>Social 4</li>
      </ul>
      <div className='w-[95vw] border-b-2 border-black m-auto p-1'></div>
    </header>
  )
}

export default Header
