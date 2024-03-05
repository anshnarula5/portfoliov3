import React from 'react'
import Tag from './Tag'
import Image from 'next/image'
import { LinkedInIcon } from './Icons'
import AnimatedContainer from './AnimatedContainer'

const Experience =
  ({ companyName, position, description, tags, logo, date, delay }: { companyName: string, position: string, description: string, tags: string[], logo: any, date: string, delay: number }) => {
    return (
      <AnimatedContainer slideLeft yMargin='-10%' delay={delay} className='flex flex-row gap-2 lg:gap-2 group'>
        <div className='flex flex-row gap-2'>
          <div className='text-[13px] pt-6 lg:min-w-[4.5rem] hidden lg:block'>{date}</div>
          <div className='flex flex-col items-center flex-grow gap-4  pt-6'>
            <div className='h-6 w-6 md:w-6 md:h-6 relative shrink-0 rounded-full'>
              {logo}
            </div>
            <span className='bg-slate-300 w-px h-full'></span>
          </div>
        </div>
        <div className='group group-hover:translate-x-1 flex flex-col gap-4  lg:hover:bg-opacity-20 rounded-lg transition-all duration-200  px-4 pt-4 pb-8 cursor-default'>
          <div>
            <h2 className='font-[700] text-slate-200 text-lg fill-animation group-hover:text-black w-fit px-1'>{companyName}</h2>
            <h3 className=' text-slate-300 pl-1'>{position}</h3>
          </div>
          <div className='pl-1'>{description}</div>
          <div className='flex flex-row gap-2 flex-wrap pl-1'>
            {tags.map((tag) => (
              <Tag name={tag} />
            ))}
          </div>
        </div>
      </AnimatedContainer>
    )
  }

export default Experience