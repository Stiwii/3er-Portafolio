import React from 'react'
import styled from 'styled-components'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <SkillSection>

      <div className='skills__container vista'>
        <h1><span>Skills</span> </h1>
        <div className='languages'>
          <h2><span>PROGRAMMING LANGUAGES</span></h2>
          <ul>
            <li><span>▶ </span> Python</li>
            <li><span>▶ </span> C/C++ C#</li>
            <li><span>▶ </span> JavaScript</li>
          </ul>
        </div>
        <div className="technologies">
          <h2>TECHNOLOGIES</h2>
          <ul>
            <li><span>▶ </span> HTML5</li>
            <li><span>▶ </span> Css</li>
            <li><span>▶ </span> Node.js</li>
            <li><span>▶ </span> PostgreSQL</li>
            <li><span>▶ </span> MongoDB(NoSQL)</li>
          </ul>
        </div>

        <div className='container_icons'>
          {/* <div className="icon1">
            <img src='public/skills/css.png' alt="" />
          </div>
          <div className="icon2">
            <img src='./public/skills/python.png' alt="" />
          </div>
          <div className="icon3">
            <img src='./public/skills/javascript.png' alt="" />
          </div>
          <div className="icon4">
            <img src='./public/skills/react.png' alt="" />
          </div>
          <div className="icon5">
            <img src='./public/skills/nodejs.png' alt="" />
          </div> */}
        </div>
      </div>



    </SkillSection>
  )
}

export default Skills

const SkillSection = styled.section`

  `