import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col min-h-screen w-full items-center justify-center p-20'>
      <div className='border-2 border-pink-950 hover:border-pink-2 transition-all duration-300 flex flex-col h-[75vh] w-full items-center justify-center'>
        <h1 className='text-9xl'>MINHAJ H<span className='text-pink-2'>A</span>MEED</h1>
        <div className='flex gap-10'>
          <Link href="https://www.linkedin.com/in/minhajhameed/" target='_blank' className='pt-[2px] border-2 border-pink-950 hover:border-pink-2 transition-all duration-300 w-32 text-center'>LinkedIn</Link>
          <Link href="https://github.com/minhajhameed" target='_blank' className='pt-[2px] border-2 border-pink-950 hover:border-pink-2 transition-all duration-300 w-32 text-center'>Github</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
