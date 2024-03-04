import React from 'react'
import ExperienceSection from './sections/ExperienceSection'
import ProjectSection from './sections/ProjectSection'
import TechSection from './sections/TechSection'
import BlogSection from './sections/BlogSection'

const Content = () => {
  return (
    <div className='flex-1 w-full'>
      <ExperienceSection />
      <ProjectSection />
      <TechSection />
      <BlogSection />
    </div>
  )
}

export default Content