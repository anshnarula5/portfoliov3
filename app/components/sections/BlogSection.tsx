import React from 'react'
import Blog from '../Blog'

const BlogSection = () => {
  return (
    <section className='flex flex-col gap-4 lg:gap-6 py-12' id='blogs'>
      <h2 className='text-slate-200 text-2xl'>Blogs</h2>
      <div className='flex flex-wrap gap-5'>
        <Blog
          image="/edi.webp"
          name="Unleashing the Power of Event-Driven Messaging Architecture"
          date="Jun 30' 2023"
          readTime="7 min"
          link="https://medium.com/@anshnarula55/unleashing-the-power-of-event-driven-architecture-a-deep-dive-into-pub-sub-model-and-aws-services-c09f5f42a8ca" />
        <Blog
          image="/redux.png"
          name="Setup Redux for your react application in few simple steps!"
          date="Fev 24' 2022"
          readTime="4 min"
          link="https://dev.to/anshnarula5/setup-redux-for-your-react-application-in-few-simple-steps-1f1" />
        <Blog
          image="/react-auth.png"
          name="Make a React-Auth form using Bootstrap in few simple steps!"
          date="Feb 16' 2022"
          readTime="4 min"
          link="https://dev.to/anshnarula5/make-a-react-auth-form-using-bootstrap-in-few-simple-steps-2io5" />
      </div>
    </section>
  )
}

export default BlogSection