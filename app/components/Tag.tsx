import React from 'react'

const Tag = ({name}: {name: string}) => {
  return (
    <div className='px-3 py-1 bg-[#132e45] w-fit rounded-3xl text-[13px] lg:text-sm text-teal-200'>{name}</div>
  )
}

export default Tag