import React from 'react'
import Project from '../Project'

const ProjectSection = () => {
  return (
    <section className='flex flex-col py-8 gap-6' id='projects'>
      <Project
        name="JobPulse"
        poster="/jobtracker.webp"
        description="An intuitive job tracker application boasting a Kanban board-style dashboard, allowing users to efficiently update application statuses through simple drag-and-drop functionality."
        moreDetails="The included summary feature offers graphical insights into application performance metrics such as successful referrals and application distribution by company, facilitating informed decision-making and strategic planning. This cohesive design streamlines the application tracking process, providing users with a user-centric and comprehensive tool for managing their job applications effectively"
        projectLink="https://github.com/anshnarula5/jobTracker"
        github="https://github.com/anshnarula5/jobTracker"
      />
      <Project
        name='EasyBuy'
        poster="/easy-buy.webp"
        description='A fully functional Ecommerce app enabling users to effortlessly browse and purchase products across diverse categories.'
        moreDetails='With advanced filtering options, users can easily narrow down their search and find specific items. The app also offers a convenient sorting feature by price and secure payment processing via PayPal, ensuring a seamless and enjoyable shopping experience for users.'
        projectLink='https://easybuy-1.vercel.app/'
        github='https://github.com/anshnarula5/ecommerce'
      />
      <Project
        name='InstaMiliGram'
        poster="/insta.webp"
        description="An application where users can add posts, like other's post, follow other users and all other features same as instagram."
        moreDetails='This is a fully functional social media platform that allows users to share photos and videos with their followers, discover new content and explore profiles of other users. It also includes features such as commenting, and liking. This platform includes a responsive design for seamless user experience on any device. This app aims to replicate the popular social media platform with a sleek and user-friendly interface.'
        projectLink='https://instamiligram.vercel.app/auth'
        github='https://github.com/anshnarula5/instamiligram'
      />
      <Project
        name='Cinepedia'
        poster="/movie.webp"
        description='This movie browsing mobile application offers an extensive collection of films across various genres.'
        moreDetails='Implemented robust search functionality, including search history for quick access to previous searches. Designed and implemented a rating system, enabling users to rate movies and share their feedback through comments, fostering user interaction and community engagement. Implemented user authentication and personalized features such as wishlists and favorites exclusively for authenticated users, enhancing user engagement and retention. With its user-centric design and an extensive database of movies, this application serves as a go-to resource for movie enthusiasts.'
        projectLink='https://github.com/anshnarula5/movies'
        github='https://github.com/anshnarula5/movies'
      />

    </section>
  )
}

export default ProjectSection