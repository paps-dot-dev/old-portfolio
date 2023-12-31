'use client'
import Image from 'next/image'
import Link from 'next/link'
import headshot from '../../public/headshot.png'
import mobileHeadShot from '../../public/IMG_2593.png'

const pageTitles = [
  {
    name: 'Web Dev',
    slug: '/code',
  },
  { name: 'Web Design', slug: '/design' },
  { name: 'Audio', slug: 'http://www.deadwingrecordings.com' },
  { name: 'Photography', slug: '/photography' },
]

export default function Home() {
  return (
    <main>
      <Image
        className='md:hidden mt-[64px] mr-2 ml-auto opacity-80 '
        src={mobileHeadShot}
        alt='Headshot of Shawn "Paps" Papineau, Web Dev and Designer'
      />
      <ul className='flex flex-col md:flex-row justify-between w-[80%] text-[4em] text-bold m-auto py-[64px] md:py-[240px]'>
        {pageTitles.map((title, idx) => (
          <Link
            className='cursor-pointer hover:-translate-y-2 hover:border-b-2 hover:border-black transition-all duration-200'
            href={title.slug}>
            <li key={idx}>{title.name}</li>
          </Link>
        ))}
      </ul>

      <div className='sticky bottom-0'>
        <Image
          className='hidden md:block md:w-screen max-h-[50vh] m-auto rounded-xl '
          src={headshot}
          alt='Headshot of Shawn "Paps" Papineau, Web Dev and Designer'
        />
      </div>

      <footer className='p-4 text-center bg-slate-400'>
        Copyright Shawn Papineau 2023
      </footer>
    </main>
  )
}
