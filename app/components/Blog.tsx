import React from 'react';

const Blog = ({ image, name, date, readTime, link }: any) => {
  return (
    <a href={link} className='group flex flex-col gap-3 md:max-w-[19rem] hover:-translate-y-2 transition-all p-4'>
      <img src={image} alt={name} />
      <h2 className='text-lg font-[700] text-slate-300 group-hover:text-cyan-200 transition-all'> {/* Add group-hover text color here */}
        {name}
      </h2>
      <div className='flex flex-row items-center justify-between text-sm text-slate-500'>
        <span>{date}</span>
        <span className='italic'>- {readTime} read</span>
      </div>
    </a>
  );
}

export default Blog;
