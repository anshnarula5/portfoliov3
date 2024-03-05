import React from 'react'
import Experience from '../Experience'
import Image from 'next/image'
import AnimatedContainer from '../AnimatedContainer'

const ExperienceSection = () => {
  return (
    <section className='flex flex-col gap-4 lg:gap-6 py-12' id='experience'>
      <AnimatedContainer slideUp>
      <h2 className='text-slate-200 text-2xl'>Experience</h2>
      </AnimatedContainer>
      <div>
        <Experience
          delay={0.1}
          companyName="Kalam (YC '23)"
          date='NOV 2023'
          position='Full Stack Development Intern'
          logo={<Image src="/kalam-logo-1.png" alt='Kalam' fill />}
          description='Developed web pages using Next.js, Tailwind CSS, and Framer Motion. Integrated Razorpay for secure transactions, utilized webhooks for personalized notifications. Improved load times by 40%, enhanced SEO by 25%.'
          tags={["NextJs", "TypeScript", "NextJS", "Tailwind", "Framer Motion"]}
        />
        <Experience
          delay={0.25}
          companyName="Amazon"
          date='JAN 2023'
          logo={<Image src="/amazon-64.png" alt='Amazon' fill />}
          position='SDE Intern'
          description='Worked in Alexa multimodal team, developed integration solution for smart home experience service, ensuring privacy compliance. Built event-driven infrastructure, handled deletion requests, and established secure connections, showcasing problem-solving skills and teamwork.'
          tags={["Java", "AWS", "TypeScript", "JUinit", "Mockito", "SDLC"]}
        />
        <Experience
          delay={0.4}
          companyName="BioBazaar"
          date='MAY 2022'
          logo={<Image src="/biobazaar.png" alt='Biobazaar' fill />}
          position='SDE Intern'
          description='Worked in a b2b tech team for a pharmaceutical product firm, contributing to front-end and back-end microservices. Developed tools, features, and testing programs to enhance order processing, billing, and daily operations, improving lead time and profit.'
          tags={["ReactJs", "JavaScript", "TypeScript", "NodeJs", "PostgreSQL", "Mocha"]}
        />
      </div>
    </section>
  )
}

export default ExperienceSection