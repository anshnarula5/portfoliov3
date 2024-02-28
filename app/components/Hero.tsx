"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const Hero = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className='flex-1 md:py-[6rem] md:h-screen !overflow-hidden !sticky top-0 flex md:flex-col md:justify-between'>
      <div className='flex flex-col gap-28'>
        <div>
          <h1 className='font-bold md:text-5xl tracking-tight text-slate-50'>
            Ansh Narula
          </h1>
          <h2 className='mt-3 md:text-2xl text-slate-200'>
            Seeking new opportunities
          </h2>
          <p className='mt-4'>
            JavaScript, TypeScript, C++, Java proficient full-stack engineer integrating AWS, seeking innovative projects and collaborative growth.
          </p>
        </div>
        <div>
        <Link href="#about" className={`group flex items-center py-3 `} onClick={() => handleLinkClick('#about')}>
        <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-within:w-16 group-focus-within:bg-slate-200 motion-reduce:transition-none'></span>
        <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-within:text-slate-200'>About</span>
      </Link>
          <Link href="#experience" className='group flex items-center  py-3'>
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-within:w-16 group-focus-within:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-within:text-slate-200'>Experience</span>
          </Link>
          <Link href="#projects" className='group flex items-center  py-3'>
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-within:w-16 group-focus-within:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-within:text-slate-200'>Projects</span>
          </Link>
          <Link href="#tech" className='group flex items-center  py-3'>
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-within:w-16 group-focus-within:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-within:text-slate-200'>Tech Stack</span>
          </Link>
          <Link href="#blogs" className='group flex items-center  py-3'>
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-within:w-16 group-focus-within:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-within:text-slate-200'>Blogs</span>
          </Link>
        </div>
      </div>

      <div>
        links
      </div>
    </div>
  )
}

export default Hero