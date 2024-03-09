"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import AnimatedContainer from './AnimatedContainer';
import { RightArrowIcon } from './Icons';

const Project = ({ poster, name, projectLink, github, description, moreDetails, delay }
  : { poster: any, name: string, projectLink: string, github: string, description: string, moreDetails: string, delay: number }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShow = () => {
    setShowMore(!showMore);
  }
  const gradientText = '';
  // 'group-hover:bg-gradient-to-r from-[#007cf0] to-[#00dfd8] inline-block group-hover:text-transparent bg-clip-text'
  return (
    <AnimatedContainer delay={delay} slideLeft yMargin='-10%' className='group'>
      <a href="" className='cursor-pointer p-3 lg:p-4 rounded-lg flex flex-col md:flex-row gap-6 lg:gap-8 items-start group  group-hover:translate-x-1 transition-all'>
      <Image width={150} height={48} src={poster} className='object-cover aspect-video rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1' alt='Poster' />
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center group'>
          <h2 className={`font-[700] group text-lg text-slate-400 group-hover:text-cyan-200 ${gradientText}`}>
            <a href={projectLink} target='_blank' className='flex items-center gap-1 '>
              <span>{name}</span>
              <RightArrowIcon color='#FFFFFF' className='group-hover:-rotate-45 transition-all' />
            </a></h2>
          <div className='w-5 h-5 md:w-6 md:h-6 relative text-cyan-100'>
            <a href={github} target='_blank'> <Image src={"/github.png"} fill alt='github' /></a>
          </div>
        </div>
        <div>
          {description}
        </div>
        {/* {showMore && moreDetails} */}
      </div>
      </a>
    </AnimatedContainer>
  )
}

export default Project