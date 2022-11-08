import React from 'react'
import styled from 'styled-components'
import { BsChevronDown,BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <AboutSection>

      <div className="about__container vista">
      
      <div className='title'>
        <h2><span>About me</span></h2>
      </div>
      <div className='info'>
        <p>
          My complete name is Steeven Geovanny Sanchez Pozo, I enjoy to create different web pages that could be very intereting for the user.
          In general, I like programing world and I'm in the last semester of Computer Sciences in <span><a href="https://www.yachaytech.edu.ec" target='_blank'>Yachay Yech University</a></span>, but the field that interests me most is web programming.
        </p>
         <p>
          Fast-fordward to today, due <span><a href="https://www.academlo.com" target='_blank'>Academlo</a> </span> I improved my skills and and I'm ready to face any front-end challenge in <span><a href="https://reactjs.org" target='_blank'>ReactJS</a></span>.
         </p>
         <p>
         Here are a few technologies I’ve been working with recently:
         </p>
         <ul>
          <li><span>▶ </span>React js</li>
          <li><span>▶ </span>JavaScript</li>
          <li><span>▶ </span>Node.js</li>
         </ul>

      </div>
      </div>

    </AboutSection>
    </>
  )
}

export default About

const AboutSection = styled.div`
 margin-top: 100px;
 position: relative;
 cursor: url('./icon/normal.png'), auto; 
 div,h1,h2,h3,h4,p,ul,li{
    cursor: url('./icon/normal.png'), auto; 
  }
  a{
  cursor: url('./icon/pointer.png'), auto; 
 }


`