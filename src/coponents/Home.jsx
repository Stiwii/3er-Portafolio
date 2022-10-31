import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsChevronDown } from 'react-icons/bs';


const Home = () => {
  return (
    <>
      <HomeSection id='home'>
        
         
        <div className="home__container vista">
          <div>
             <h2 className='greeting'><span className='greeting__span'><span>Welcome</span> , my name is </span> </h2>
        </div>
         
          <div>
          <h3 className='name'><span className='name_span'>STEEVEN SANCHEZ.</span> </h3>
        </div>
        <div>
          <h4 className='employment'><span className='employment__span'>Full Stack Web Developer.</span></h4>
        </div>
       
        <div>
          <p><span className='uppercase'>I</span> am a student in the last semester of Computer Science and Full Stack Web Developer, especially in Front End. Currently, I work on creating projects where I focus my knowledge on <span className='react'><a href="https://reactjs.org" target='_blank'>Reactjs</a>. </span> </p>
        </div>
        </div>




     
      

      </HomeSection>
     
    </>
  )
}

export default Home

const HomeSection = styled.section`
    
`