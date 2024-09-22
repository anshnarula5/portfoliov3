import React from 'react'

const AboutSection = () => {
  const basicHighlight = "font-semibold inline-block text-slate-200";
  const advanceHighlight = " font-semibold inline-block text-slate-200 transition-all hover:-translate-y-1 hover:text-cyan-200 cursor-pointer"
  return (
    <section className='py-12 flex flex-col md:text-lg gap-4 tracking-wide group cursor-default' id='about'>
      <p>
        Hi there 👋, I'm Ansh Narula, a <span className={basicHighlight}> Software Development Engineer</span> at <span className={basicHighlight}> RedHealth  </span> {" "}, building Uber for ambulances.
        building AI based UPSC personalized mentor.
      </p>
      <p>
        With  <span className={basicHighlight}>~1.4</span> years of hands-on experience across multiple roles,
        I specialize in building <span className={basicHighlight}> scalable, efficient backend infrastructures</span>
        and creating <span className={basicHighlight}>user-friendly, pixel-perfect </span> web applications.
        </p>
        <p>
        From designing and implementing <span className={basicHighlight}>real-time communication</span> platforms for emergency medical
        services to enhancing page load efficiency and integrating AI tools, my journey has been all about  <span className={basicHighlight}>solving complex </span> problems through <span className='text-lime-200 font-semibold inline-block '> innovative solutions</span>.
        {/* {" "}<span className={`lg:glitch`}>  <span aria-hidden="true" className='hidden lg:inline'>innovative solutions.</span> innovative solutions. <span className='hidden lg:inline' aria-hidden="true">innovative solutions.</span>  </span> */}
      </p>
      <p className='group'>
        Off my work, I enjoy <span className={basicHighlight}>jogging 🏃</span>, {" "}
        <span className={advanceHighlight}><a href="https://www.chess.com/member/ansh_055" target='_blank'>{" "} chess ♞ </a>  </span> and  {" "}
        <span className={advanceHighlight}><a href="https://leetcode.com/Ansh_5/" target='_blank'>{" "} leetcoding  👨‍💻</a></span>
      </p>
    </section>
  )
}

export default AboutSection