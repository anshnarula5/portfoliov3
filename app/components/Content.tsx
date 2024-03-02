import React from 'react'
import ExperienceSection from './sections/ExperienceSection'
import ProjectSection from './sections/ProjectSection'
import TechSection from './sections/TechSection'

const Content = () => {
  return (
    <div className='flex-1 w-full'>
      <ExperienceSection />
      <ProjectSection />
      <TechSection />
    </div>
  )
}

export default Content