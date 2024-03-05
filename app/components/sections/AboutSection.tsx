import React from 'react'

const AboutSection = () => {
  const basicHighlight = "font-semibold inline-block text-slate-200";
  const advanceHighlight = " font-semibold inline-block text-slate-200 transition-all hover:-translate-y-1 hover:text-cyan-200 cursor-pointer"
  return (
    <section className='py-12 flex flex-col md:text-lg gap-4 tracking-wide group cursor-default' id='about'>
      <p>
        I'm currently a Full Stack Dev Intern at <span className={basicHighlight}>Kalam </span> {" "}
        building AI based UPSC personalized mentor. I recently graduated from <span className={basicHighlight}>IIITDM Jabalpur</span>.
      </p>

      <p>
        I have <span className={basicHighlight}>~1.4</span> years of experience in software development across various companies, which has enchanced my skills exponentially.
        My experties ranges from crafting <span className={basicHighlight}>user-friendly</span> and  <span className={basicHighlight}>pixel perfect</span> web pages to building
        {" "}  <span className={basicHighlight}>robust backend infrastructures </span> which are scalable and efficent.</p>
      <p className='group'>
        Off my work, I enjoy <span className={advanceHighlight}>jogging 🏃</span>, {" "}
         <span className={advanceHighlight}><a href="https://www.chess.com/member/ansh_055" target='_blank'>{" "} chess ♞ </a>  </span> and  {" "}
         <span className={advanceHighlight}><a href="https://leetcode.com/Ansh_5/" target='_blank'>{" "} leetcoding  👨‍💻</a></span>
      </p>
    </section>
  )
}

export default AboutSection