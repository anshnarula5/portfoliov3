import React from 'react'
import Tag from './Tag'
import Image from 'next/image'

const Experience =
  ({ companyName, position, description, tags, logo, date }: { companyName: string, position: string, description: string, tags: string[], logo: any, date: string }) => {
    return (
      <div className='flex flex-row gap-2 lg:gap-4'>
        <div className='flex flex-row gap-2'>
          <div className='text-[13px] pt-6 lg:min-w-[4.5rem] hidden lg:block'>{date}</div>
          <div className='flex flex-col items-center flex-grow gap-4  pt-6'>
            <div className='h-6 w-6 md:w-6 md:h-6 relative shrink-0 rounded-full'>
              {logo}
            </div>
            <span className='bg-slate-300 w-px h-full'></span>
          </div>
        </div>
        <div className='flex flex-col gap-4 lg:hover:bg-gray-400 lg:hover:bg-opacity-20 rounded-lg transition-all duration-200  px-4 pt-4 pb-8'>
          <div>
            <h2 className='font-[700] text-slate-200 text-lg'>{companyName}</h2>
            <h3 className='lg:text-lg text-slate-300'>{position}</h3>
          </div>
          <div>{description}</div>
          <div className='flex flex-row gap-2 flex-wrap'>
            {tags.map((tag) => (
              <Tag name={tag} />
            ))}
          </div>
        </div>
      </div>
    )
  }

export default Experience