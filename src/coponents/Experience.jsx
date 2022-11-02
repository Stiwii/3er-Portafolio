import React from 'react'
import styled from 'styled-components'
import { BsChevronDown,BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <ExperienceSection>
      <div className='experience__container vista'>
        <h2>Experience</h2>
        <div className='Epi'>
          <h3><span> Epicentro </span></h3>
          <p>Computer Science Engineer Intern</p>
          <ul>
            <li>Web page modeling and restructuring using CSS and HTML ;</li>
            <li>Database hand using Microsoft Excel;</li>
          </ul>
        </div>
        <div className='bear'>
          <h3><span> Viewpoint Andean Bear </span></h3>
          <p>Pimampiro community outreach project</p>
          <ul>
            <li>Update of computer software in schools in the Pimampiro community</li>
            <li>Management and monitoring of Social Networks of the Andean Bear</li>
          </ul>
        </div>
      </div>

    </ExperienceSection>
  )
}

export default Experience

const ExperienceSection = styled.div`
 margin-top: 120px;

`