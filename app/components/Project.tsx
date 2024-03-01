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
    <div className='p-4 rounded-lg transition-all duration-200  hover:bg-gray-400 hover:bg-opacity-20 flex flex-row gap-8 items-start'>
      <div className='md:w-[8rem] md:h-[4.35rem] relative shrink-0'>
        <Image src={poster} className='object-contain' fill alt='Poster' />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <h2 className='font-[700] text-slate-200 text-lg'>
            <a href={projectLink} target='_blank'>{name} </a></h2>
          <div className='md:w-6 md:h-6 relative'>
            <a href={github} target='_blank'> <Image src={"/github.png"} fill alt='github' /></a>
          </div>
        </div>
        <div>
          {description}
          {showMore && moreDetails}
          {showMore ?
            <span className='font-semibold text-cyan-100 mx-2 cursor-pointer' onClick={toggleShow}>Show Less</span> :
            <span className='font-semibold text-cyan-100 mx-2 cursor-pointer' onClick={toggleShow}>Show More</span>}
        </div>
      </div>
    </div>
  )
}

export default Project