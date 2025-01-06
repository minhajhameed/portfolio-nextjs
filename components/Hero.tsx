"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = 'minhajham@yahoo.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  return (
    <div className='flex flex-col min-h-screen w-full items-center justify-center xl:p-20 md:p-16 p-10 cursor-default'>
      <h1
        onClick={handleCopy}
        className="md:text-2xl text-sm w-full text-start cursor-pointer text-black hover:text-pink-950"
      >
        {email}
      </h1>
      {copied && (
        <span className="absolute left-0 -bottom-6 text-sm text-green-500">
          Copied to clipboard!
        </span>
      )}
      <div className='border-2 border-pink-950 hover:border-pink-2 transition-all duration-300 flex flex-col h-[75vh] w-full items-center justify-center'>
        <h1 className='xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-3xl'>MINHAJ H<span className='text-pink-2 hover:text-pink-950'>A</span>MEED</h1>
        <div className='flex sm:gap-10 gap-5'>
          <Link href="https://www.linkedin.com/in/minhajhameed/" target='_blank' className='pt-[2px] border-2 border-pink-950 hover:border-pink-2 transition-all duration-300 w-32 text-center sm:text-base text-xs h-fit'>LinkedIn</Link>
          <Link href="https://github.com/minhajhameed" target='_blank' className='pt-[2px] border-2 border-pink-950 hover:border-pink-2 transition-all duration-300 w-32 text-center sm:text-base text-xs h-fit'>Github</Link>
        </div>
      </div>
      <h1 className='md:text-2xl text-sm w-full text-end mr-10 mt-1 text-black hover:text-pink-950'>Full Stack Web3 Developer</h1>
    </div>
  )
}

export default Hero
