"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.id;
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavItem = ({ section }: { section: string }) => {
    const isActive = section === currentSection;
    return (
      <Link href={`#${section}`} className={`group flex items-center py-3`} onClick={() => { setCurrentSection(section) }}>
        <span className={`${isActive && '!bg-slate-200 !w-16'} nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-12 group-hover:bg-slate-300 group-focus-within:w-8 group-focus-within:bg-slate-300 motion-reduce:transition-none`}></span>
        <span className={`${isActive && '!text-slate-200'} nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-300 group-focus-within:text-slate-300`}>{section}</span>
      </Link>
    )
  }
  return (
    <div className='flex-1 md:py-[6rem] min-h-screen lg:min-h-max md:h-screen !overflow-hidden lg:!sticky top-0 flex flex-col justify-center md:justify-between'>
      <div className='flex flex-col gap-28'>
        <div>
          <h1 className='font-bold text-3xl md:text-5xl tracking-tight text-slate-50'>
            Ansh Narula
          </h1>
          <h2 className='mt-3 md:text-2xl text-slate-200'>
            Seeking new opportunities
          </h2>
          <p className='mt-4'>
            JavaScript, TypeScript, C++, Java proficient full-stack engineer integrating AWS, seeking innovative projects and collaborative growth.
          </p>
        </div>
        <div className='hidden lg:block'>
          <NavItem section='about' />
          <NavItem section='experience' />
          <NavItem section='projects' />
          <NavItem section='tech' />
          <NavItem section='blogs' />
        </div>
      </div>

      <div className='hidden lg:block'>
        links
      </div>
    </div>
  )
}

export default Hero