import React from 'react'
import ExperienceSection from './sections/ExperienceSection'
import ProjectSection from './sections/ProjectSection'
import TechSection from './sections/TechSection'
import BlogSection from './sections/BlogSection'
import ContactSection from './sections/ContactSection'
import AboutSection from './sections/AboutSection'

const Content = () => {
  return (
    <div className='flex-1 w-full py-6'>
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <TechSection />
      <BlogSection />
      <ContactSection />
    </div>
  )
}

export default Content