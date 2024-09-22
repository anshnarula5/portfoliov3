"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { EmailIcon, GithubIcon, LinkedInIcon } from './Icons';

const Hero = () => {
  const [currentSection, setCurrentSection] = useState('');
  const [hoveredIcon, setHoveredIcon] = useState(null);

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

  const HoverableIcon = ({ icon: IconComponent, defaultColor, hoverColor, link, className }: any) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <a aria-label="Social Link" href={link} target='_blank' className='hover:-translate-y-2 transition-transform' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
        <div className="icon-container">
          <IconComponent className={`${className} icon`} color={isHovered ? hoverColor : defaultColor} />
        </div>
      </a>
    );
  };

  const handleHireClick = () => {
    window.open("mailto:anshnarula55@gmail.com?subject=I have an offer!", "_blank");
  }
  return (
    <div className='pl-2 flex-1 md:py-[5rem] min-h-screen lg:min-h-max md:h-screen !overflow-hidden lg:!sticky top-0 flex flex-col justify-center md:justify-between'>
      <div className='flex flex-col gap-20'>
        <div>
          <h1 className='font-bold text-3xl md:text-5xl tracking-tight text-slate-50'>
            Ansh Narula
          </h1>
          <h2 className='mt-3 md:text-2xl text-slate-200'>
            Seeking new opportunities
          </h2>
          <p className='mt-4 max-w-[25rem]'>
          Experienced full-stack engineer with expertise in JavaScript, C++, and Java, profecient in building scalable, high-performance applications. 
          <br />         
          <br />         
          Skilled in integrating cloud platforms (AWS, Google Cloud) and building event-driven architectures for robust, efficient systems.


          </p>
          {/* <Link href="#blogs"  className='mt-8 px-6 py-2 text-white transition-all hover:text-black font-[700] lg:text-lg glow-on-hover'>
            Hire Me!
          </Link> */}
        </div>
        <div className='hidden lg:block'>
          <NavItem section='about' />
          <NavItem section='experience' />
          <NavItem section='projects' />
          <NavItem section='tech' />
          <NavItem section='blogs' />
        </div>
      </div>
      <div className='hidden lg:flex gap-4 items-center'>
        <HoverableIcon icon={LinkedInIcon} className="lg:w-6 lg:h-6 transition-all" defaultColor="#94a3b8" hoverColor="#f1f5f9" link="https://www.linkedin.com/in/anshnarula/" />
        <HoverableIcon icon={GithubIcon} className="lg:w-6 lg:h-6 transition-all" defaultColor="#94a3b8" hoverColor="#f1f5f9" link="https://github.com/anshnarula5" />
        <HoverableIcon icon={EmailIcon} className="lg:w-8 lg:h-8 transition-all" defaultColor="#94a3b8" hoverColor="#f1f5f9" link="mailto:anshnarula55@gmail.com" />
      </div>
    </div>
  )
}

export default Hero