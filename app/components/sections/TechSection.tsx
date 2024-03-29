import React from 'react'
import TechCard from '../Tech'
import AnimatedContainer from '../AnimatedContainer'


const TechSection = () => {
  return (
    <section className='flex flex-col gap-4 lg:gap-6 w-full lg:pl-16 py-12' id='tech'>
      <AnimatedContainer slideUp>
        <h2 className='text-slate-200 text-2xl'>Tech Stack</h2>
      </AnimatedContainer>
      <div className='flex flex-wrap gap-2 lg:gap-3 w-full '>
        <TechCard img="/tech/javascript.svg" name="Javascript" />
        <TechCard img="/tech/java.png" name="Java" />
        <TechCard img="/tech/c.svg" name="C++" />
        <TechCard img="/tech/typescript.svg" name="Typescript" />
        <TechCard img="/tech/lambda.png" name="AWS Lambda" />
        <TechCard img="/tech/sns.png" name="AWS SNS" />
        <TechCard img="/tech/sqs.png" name="AWS SQS" />
        <TechCard img="/tech/vpc.png" name="VPC" />
        <TechCard img="/tech/springboot.svg" name="SpringBoot" />
        <TechCard img="/tech/mysql.png" name="Mysql" />
        <TechCard img="/tech/postgresql.svg" name="Postgres" />
        <TechCard img="/tech/react.svg" name="React" />
        <TechCard img="/tech/nodejs.svg" name="Nodejs" />
        <TechCard img="/tech/express.svg" name="Express.js" />
        <TechCard img="/tech/mongodb.svg" name="MongoDB" />
        <TechCard img="/tech/nextjs.svg" name="Next.js" />
        <TechCard img="/tech/react.svg" name="ReactNative" />
        <TechCard img="/tech/css-3.png" name="CSS" />
        <TechCard img="/tech/redux1.svg" name="Redux" />
        <TechCard img="/tech/git.svg" name="Git" />
      </div>
    </section>
  )
}

export default TechSection