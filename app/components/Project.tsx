"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Project = ({ poster, name, projectLink, github, description, moreDetails }
  : { poster: any, name: string, projectLink: string, github: string, description: string, moreDetails: string }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShow = () => {
    setShowMore(!showMore);
  }
  return (
    <div className='p-3 lg:p-4 rounded-lg transition-all duration-200  lg:hover:bg-gray-400 lg:hover:bg-opacity-20 flex flex-col md:flex-row gap-6 lg:gap-8 items-start'>
      <div className='w-full h-full md:w-[8rem] md:h-[4.35rem] relative shrink-0'>
        <img src={poster} className='object-contain' alt='Poster' />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <h2 className='font-[700] text-cyan-200  lg:text-slate-200 hover:text-cyan-200  text-lg'>
            <a href={projectLink} target='_blank'>{name} </a></h2>
          <div className='w-5 h-5 md:w-6 md:h-6 relative text-cyan-100'>
            <a href={github} target='_blank'> <Image src={"/github.png"} fill alt='github' /></a>
          </div>
        </div>
        <div>
          {description}
        
        </div>
        {/* {showMore && moreDetails} */}
      </div>
    </div>
  )
}

export default Project